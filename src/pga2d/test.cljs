(ns pga2d.test
  (:require [pga2d.grassmann :as gr]
            [pga2d.clifford :as cf]
            [pga2d.canvas :as c]))


(enable-console-print!)

(def g (cf/ga 0))

; generate some global points and lines for testing
(def p0 (gr/point 0 0 1))
(def p1 (gr/point 1 0 0))
(def p2 (gr/point 0 1 0))
(def v0 (gr/point 2 3 0))

(def m0 (gr/line 0 0 1))
(def m1 (gr/line 1 0 0))
(def m2 (gr/line 0 1 0))
(def m3 (gr/line .6 .8 1))

(def mv1 (gr/multivector 1 [0 0 0] [4 5 6] 7))


;; x = 0
(def L1 (gr/line 1 0 0))
(def L2 (gr/line 0 1 0))
(def L3 (gr/line 1 0 -3))

(def p12 (gr/grade ((g :gp) L1 L2) 2))
(def p13 (gr/grade ((g :gp) L1 L3) 2))

(def ans [
((g :normsquared) p12)
((g :normsquared) p13)
])

(defn line-line-intersection [[a0 b0 c0] [a1 b1 c1]]
  (let [l1  (gr/line a0 b0 c0)
        l2  (gr/line a1 b1 c1)
        nl1 ((g :normalized) l1)
        nl2 ((g :normalized) l2)
        p   ((g :gp) nl1 nl2)
        p2  (gr/grade p 2)
        np2 ((g :normalized) p2)
        ]
    (if (cf/ideal? np2 ((g :rawnormsquared) np2))
      ;; distance between parallel lines:
      ((g :norm) p2)
      ;; intersection point of two lines
      (gr/pointFrom ((g :normalized) p2))
    )
    ))

(defn line-line-angle [[a0 b0 c0] [a1 b1 c1]]
  (let [l1  (gr/line a0 b0 c0)
        l2  (gr/line a1 b1 c1)
        nl1 ((g :normalized) l1)
        nl2 ((g :normalized) l2)
        p   ((g :gp) nl1 nl2)
        p2  (gr/grade p 2)
        np2 ((g :normalized) p2)
        ]
    (if (cf/ideal? np2 ((g :rawnormsquared) np2))
      ;; distance between parallel lines:
      nil
      ;; angle between two lines:
      (Math.asin ((g :norm) p2))
      )
    ))

(defmulti render  (fn [cv g mv] (mv :k)))

;; draw a point
(defmethod render 2 [cv g mv]
  (let [p (gr/pointFrom ((g :normalized) mv))]
    ((cv :draw-point) p 5)))

;; draw a line
(defmethod render 1 [cv g mv]
  ((cv :draw-line) mv))

(let [cv (c/canvas [-1 -1] [1 1])]
  ((cv :clear) "#000000")
  ((cv :set-color) "#ffffff")
  (let [g   (cf/ga 0)
        p0  (gr/point -1.0  0   1)
        p1  (gr/point 0.5 0.5 1)
        l01 (gr/join p0 p1)]
    (render cv g p0)
    (render cv g p1)
    ((cv :set-color) "#ffff00")
    (render  cv g l01)
    )
  ;;((cv :draw-point) 0 0 5)
  ;;((cv :draw-line) [-0.5,-0.5], [0.75,0.5])
  ;;((cv :set-color) "#009900")
  ;;((cv :set-line-width) 10)
  ;;((cv :draw-line) [-0.5,0.5], [0.75,-0.5])

(def compareGP (let [l0 (gr/line 1 0 0)  ;; x == 0
                     l1 (gr/line 1 0 -3) ;; x == 3
                     l2 (gr/line 0 1 0)
                     gp02 ((g :gp) l0 l2)
                     gp01 ((g :gp) l0 (g :normalized l1))
                     pt02 (gr/grade gp02 2)
                     pt01 (gr/grade gp01 2)
                     ]
                 [pt02 pt01 ((g :normsquared) pt02) ((g :normsquared) pt01)]
                 )
  )
