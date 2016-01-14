(ns pga2d.test
  (:require [pga2d.grassmann :as gr]
            [pga2d.clifford :as cf]))

(enable-console-print!)

(defn doit [sig]

  (def g (cf/ga sig))

  (def p0 (gr/point 0 0 1))
  (def p1 (gr/point 1 0 0))

  (println "this is the test!")

  (println (str "the gp (signature " sig " of p0 and p1 is: " ((g :gp) p0 p1)))
  
  )

(doit 0)
