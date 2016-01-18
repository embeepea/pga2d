(ns pga2d.canvas
  (:require [pga2d.grassmann :as gr]
            [pga2d.clifford :as cf]))

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
(defn canvas [ll ur]
  (let [canvas-element (by-id "canvas")
        [w h]  (current-window-size)
        xp     (linear-interpolator (ll 0) (ur 0) 0 w)
        yp     (linear-interpolator (ll 1) (ur 1) h 0)]
    (set! (.-width canvas-element) w)
    (set! (.-height canvas-element) h)
    (let [ctx (.getContext canvas-element "2d")]
      {
       :clear
       (fn [color]
         (set! (.-fillStyle ctx) color)
         (.fillRect ctx 0 0 w h))

       :set-color
       (fn [color]
         (set! (.-strokeStyle ctx) color)
         (set! (.-fillStyle ctx) color))

       :draw-point
       (fn [p r]
         (let [[x y] (normalized p)]
           (.beginPath ctx)
           (.arc ctx (xp x) (yp y) r 0 (* 2 js/Math.PI))
           (.fill ctx)))

       :set-line-width
       (fn [t]
         (set! (.-lineWidth ctx) t))

       :draw-line
       (fn [line-mv]
         (let [ps (map #(gr/point-from %) (line-rectangle-intersection line-mv [ll ur]))]
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

       }
      )))
