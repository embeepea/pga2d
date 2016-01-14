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

