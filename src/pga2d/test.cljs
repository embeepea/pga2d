(ns pga2d.test
  (:require [pga2d.core :as core]))

(enable-console-print!)

(def p0 (core/point 0 0 1))
(def p1 (core/point 1 0 0))

(println "this is the test!")

(println (str "the gp of p0 and p1 is: " (core/gp p0 p1)))
