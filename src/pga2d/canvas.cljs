(ns pga2d.canvas
  (:require ))

(enable-console-print!)

(defn by-id [id]
  (.getElementById js/document (name id)))

(defn current-window-size []
  [(.-innerWidth js/window) (.-innerHeight js/window)])

;; returns the linear function mapping a->A, b->B:
(defn linear-interpolator [a b A B]
  (let [f  (/ (- B A) (- b a))]
    (fn [x] (+ (* (- x a) f) A))))

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
         (set! (.-fillStyle ctx)  color))

       :draw-point       
       (fn [x y r]
         (.beginPath ctx)
         (.arc ctx (xp x) (yp y) r 0 (* 2 js/Math.PI))
         (.fill ctx))

       :set-line-width
       (fn [t]
         (set! (.-lineWidth ctx) t))

       :draw-line
       (fn [[x0 y0] [x1 y1]]
         (.beginPath ctx)
         (.moveTo ctx (xp x0) (yp y0))
         (.lineTo ctx (xp x1) (yp y1))
         (.stroke ctx))
      }
      )))
