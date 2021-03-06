(ns pga2d.canvas
  (:require [pga2d.grassmann :as gr]
            [pga2d.clifford :as cf]
            [goog.events :as events]))

(enable-console-print!)

(defn by-id [id]
  (.getElementById js/document (name id)))

(defn current-window-size []
  [(.-innerWidth js/window) (.-innerHeight js/window)])

;; returns the linear function mapping a->A, b->B:
(defn linear-interpolator [a b A B]
  (let [f  (/ (- B A) (- b a))]
    (fn [x] (+ (* (- x a) f) A))))

(defn normalized [[x y z]]
  (if (= z 0) [x y] [(/ x z) (/ y z)]))

(defn dot [a b] (apply + (map * a b)))

(defn rotate [n s]
  (lazy-cat (drop n s)
            (take n s)))

(defn indices [pred coll]
  (keep-indexed #(when (pred %2) %1) coll))

(def ega (cf/ga 0))

(def global-scale 50.0)

; a function to quickly generate two points on a given line
; arbitrarily far away ("far" is controlled by global scale gs above
;
(defn two-far-points-on-line [line-mv [wll wur] gs]
  (let [[a b c] (gr/line-from line-mv)    ;; line equation
        d2      (+ (* a a) (* b b))       ;; norm squared
        k       (- (/ c d2))              ;; factor to find nearest point to origin
        near0   [(* a k) (* b k) 1]     ;; nearest point to origin
        vec     [(- (* gs b)) (* gs a) 0] ;; direction vector of line of length gs
        k2      (Math.sqrt d2)            ;; normalize the vector
        nvec    (map #(/ % k2) vec)       ;; ditto
        p0      (map + near0 nvec)         ;; move near point by vec
        p1      (map - near0 nvec)         ;; move near point by -vec
        ]
    [(gr/point p0) (gr/point p1)]         ;; two points as multivectors
    )
  )

(defn line-rectangle-intersection [line [[xMin yMin] [xMax yMax]]]
  (let [verts   [(gr/point xMin yMin 1)    ;; lower left               e3
                 (gr/point xMax yMin 1)    ;; lower right           v4    v3
                 (gr/point xMax yMax 1)    ;; upper right         e4        e2
                 (gr/point xMin yMax 1)]   ;; upper left            v1    v2
        edges   [(gr/line 0 1 (- yMin))  ;; bottom  y = yMin           e1
                 (gr/line 1 0 (- xMax))  ;; right   x = xMax
                 (gr/line 0 1 (- yMax))  ;; top     y = yMax
                 (gr/line 1 0 (- xMin))] ;; left    x = xMin
        distances           (map #(+ 1e-6 (gr/pseudoscalar-from (gr/wedge line %))) verts)
        sign-changes        (map * distances  (rotate 1 distances))
        edge-indices        (indices #(< % 0) sign-changes)
        intersecting-edges  (map #(get edges %) edge-indices)
        intersection-points (map #((ega :normalized) (gr/wedge % line)) intersecting-edges)
        ]
    intersection-points
    ))

;;      signs  (vec (map #(dot line %) verts))]
;;      (:hits
;;       (reduce
;;        (fn [{:keys [last-sign last-vert hits]} [vert sign]]
;;          {:last-sign sign
;;           :last-vert vert
;;           :hits      (cond
;;                        (= 0 sign)                (conj hits vert)
;;                        (< (* last-sign sign) 0)  (conj hits (line-line-intersection
;;                                                              (point-point-line vert last-vert)
;;                                                              line))
;;                        :else                     hits)})
;;        {:last-sign (last signs)
;;         :last-vert (last verts)
;;         :hits      []}
;;        (map vector verts signs)
;;        )))))
;;

(defn canvas
  ([ll ur] (canvas ll ur {}))
  ([ll ur options]
   (let [defaults       {:preserve-aspect false}
         settings       (into defaults options)
         canvas-element (by-id "canvas")
         [w h]          (current-window-size)
         d              (min w h)
         xp             (if (:preserve-aspect settings)
                          (linear-interpolator (ll 0) (ur 0) 0 w)
                          (linear-interpolator (ll 0) (ur 0) (/ (- w d) 2)  (/ (+ w d)  2)))
         yp             (if (:preserve-aspect settings)
                          (linear-interpolator (ll 1) (ur 1) h 0)
                          (linear-interpolator (ll 1) (ur 1) (/ (+ h d) 2)  (/ (- h d)  2)))
         px             (if (:preserve-aspect settings)
                          (linear-interpolator 0 w (ll 0) (ur 0))
                          (linear-interpolator (/ (- w d) 2)  (/ (+ w d)  2) (ll 0) (ur 0)))
         py             (if (:preserve-aspect settings)
                          (linear-interpolator h 0 (ll 1) (ur 1))
                          (linear-interpolator (/ (+ h d) 2)  (/ (- h d)  2) (ll 1) (ur 1)))
         wll            [ (px 0) (py h) ]
         wur            [ (px w) (py 0) ]
         ]

    (set! (.-width canvas-element) w)
    (set! (.-height canvas-element) h)
    (let [ctx (.getContext canvas-element "2d")]
      {
       :scale
       (fn [scale]
         (let [mx (/ w 2) ;(/ (+ (wll 0) (wur 0)) 2)
               my (/ h 2)] ; (/ (+ (wll 1) (wur 1)) 2)]
           (println "wll:wur " wll ":" wur)
           (.transform ctx 1.0 0.0 0.0 1.0 mx my)
           (.transform ctx scale 0.0 0.0 scale 0.0 0.0)
           (.transform ctx 1.0 0.0 0.0 1.0 (-  mx) (- my))
           )
         )
       :clear
       (fn [color]
         (set! (.-fillStyle ctx) color)
         (.resetTransform ctx)
         (.setTransform ctx 1 0 0 1 0 0)
         (.fillRect ctx 0 0 w h)
         ;(.clip ctx )
         )

       :set-color
       (fn [color]
         (set! (.-strokeStyle ctx) color)
         (set! (.-fillStyle ctx) color))

       :draw-point
       (fn [p r]
         (if (not= (p 2) 0)
           (let [[x y] (normalized p)]
             (.beginPath ctx)
             (.arc ctx (xp x) (yp y) r 0 (* 2 js/Math.PI))
             (.fill ctx))))

       :draw-circle
       (fn [p r]
         (let [[x y] (normalized p)]
           (.beginPath ctx)
           (.arc ctx (xp x) (yp y) r 0 (* 2 js/Math.PI))
           (.stroke ctx)))

       :set-line-width
       (fn [t]
         (set! (.-lineWidth ctx) t))

       :draw-line
       (fn [line-mv]
;;         (let [ps (map #(gr/point-from %) (line-rectangle-intersection line-mv [wll wur]))]
         (let [ps (map #(gr/point-from %) (two-far-points-on-line line-mv [wll wur] global-scale))]
           (when (= (count ps) 2)
             (let [[x0 y0] (normalized (first ps))
                   [x1 y1] (normalized (second ps))]
               (.beginPath ctx)
               (.moveTo ctx (xp x0) (yp y0))
               (.lineTo ctx (xp x1) (yp y1))
               (.stroke ctx)))))

       :draw-segment
       (fn [p0 p1]
         (let [[x0 y0] (normalized p0)
               [x1 y1] (normalized p1)]
           (.beginPath ctx)
           (.moveTo ctx (xp x0) (yp y0))
           (.lineTo ctx (xp x1) (yp y1))
           (.stroke ctx)))

       :install-mouse-handler
       (fn [mouse-handler]
         (let [mouse-state    (atom {:down false})]
           (events/listen
            canvas-element events/EventType.MOUSEUP
            (fn [event]
              (swap! mouse-state assoc :down false :xy nil)
              (mouse-handler {:type :up :xy [(px (.-offsetX event)) (py (.-offsetY event))]})))
           (events/listen
            canvas-element events/EventType.MOUSEDOWN
            (fn [event]
              (let [xy [(px (.-offsetX event)) (py (.-offsetY event))]]
                (swap! mouse-state assoc :down true :base xy)
                (mouse-handler {:type :down :xy xy}))))
           (events/listen
            canvas-element events/EventType.MOUSEMOVE
            (fn [event] (let [xy  [(px (.-offsetX event)) (py (.-offsetY event))]]
                          (if (@mouse-state :down)
                            (mouse-handler {:type :drag
                                            :xy xy
                                            :d [(- (xy 0) ((@mouse-state :base) 0))
                                                (- (xy 1) ((@mouse-state :base) 1))]})
                            (mouse-handler {:type :move :xy xy})))))))


       }
      )))
  )



(defmulti render  (fn [cv g mv] (mv :k)))

;; draw a point
(defmethod render 2 [cv g mv]
  (let [p (gr/point-from ((g :normalized) mv))]
    ((cv :draw-point) p 5)
    (when (mv :selected) ((cv :draw-circle) p 10))))

;; draw a line
(defmethod render 1 [cv g mv]
  ((cv :draw-line) mv))

(defmethod render nil [cv g mv]
  (println "invalid render: " mv)
  )

(defn canvas-render [cv g]
  (fn renderfunc
    ([mv] (renderfunc mv {}))
    ([mv options]
     (when (:color options) ((cv :set-color) (:color options)))
     (if (or (= (type mv) cljs.core/PersistentArrayMap)
             (= (type mv) cljs.core/PersistentHashMap))
       (render cv g mv)
       (doall (map renderfunc mv))
       ))))

