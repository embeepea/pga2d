(ns pga2d.test
  (:require [pga2d.grassmann :as gr]
            [pga2d.clifford :as cf]))


(enable-console-print!)

(def g (cf/ga 0))

; generate some global points and lines for testing
(def p0 (gr/point 0 0 1))
(def p1 (gr/point 1 0 0))
(def p2 (gr/point 0 1 0))
(def v0 (gr/point 2 3 0))

(def m0 (gr/line 0 0 1))
(def p3 (gr/point 2 3 1))
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


;; (def l1 (gr/line 1 -1 -1))
;; (def l2 (gr/line 2 3 1))
;; (def p
;;   (gr/pointFrom ((g :gp)
;;       ((g :normalized) l1)
;;       ((g :normalized) l2))
;;      ))

