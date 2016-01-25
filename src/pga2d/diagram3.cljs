(ns pga2d.diagram3
  (:require [pga2d.grassmann :as gr]
            [pga2d.clifford :as cf]
            [pga2d.canvas :as c]
            [pga2d.diagram :as d]))

(enable-console-print!)

;; This diagram depends on two integer parameters n and s.
;; It visualizes a set of lines obtained as follows:
;; Begin with the nth roots of unity (equally spaced points on unit circle)
;; pk = cos(2 pi k/n) + sin(2 pi k/n) i
;; Then draw the n lines
;; lk = p(k) join p(sk)

(d/diagram
  {:coords
   [[-1.5 -1.5] [1.5 1.5]]

   ;; The user will be able to drag these points.  Each draggable should
   ;; have a key which serves as its id; the value for that key should
   ;; be a map with keys :mv (a point multivector), and :color.
   ;:dragables
   ;{:A0     {:mv (gr/point -1.0  1.0  1) :color "#ffffff"}
   ; :A1     {:mv (gr/point 0.6  0.2  1) :color "#ffffff"}
   ; :B0     {:mv (gr/point -0.6 0.0  1) :color "#666666"}
   ; :B1     {:mv (gr/point  1.0 1.2  1) :color "#666666"} }

   ;; The diagram package takes care of rendering the draggable points above, and
   ;; the following function will be called to render anything else.
   :draw
   (fn [g cv render dragable]
     (let [N      (g :normalized)      ;; N = shorthand for :normalized function in g
           n      720.0
           delta  (/ 1.0 n)
           s      38.0
           ]
       ((cv :clear) "#ffffff")
       ((cv :set-line-width) .25)
       ;; draw lines connecting the x_i (the ith root of unity)
       ;; to (x_i)^s, its sth power.
       (doseq [t (range 0.0 1.0 delta)]
         (let [angle0 (* t (* 2 Math.PI))
               angle1 (* angle0 s)
               p0    (gr/point (Math.cos angle0) (Math.sin angle0) 1)
               p1    (gr/point (Math.cos angle1) (Math.sin angle1) 1)
               m     (gr/join p0 p1)]
;;           (println "m = " m)
           (render m {:color "#000000"})
           ))

       )
     )})
