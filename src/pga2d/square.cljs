(ns pga2d.square
  (:require [pga2d.grassmann :as gr]
            [pga2d.clifford :as cf]
            [pga2d.canvas :as c]
            [pga2d.diagram :as d]
            [cljs.pprint :refer [cl-format]]
            ))


(enable-console-print!)

;; Draw a square

(d/diagram
  {:coords
   [[-1.5 -1.5] [1.5 1.5]]

   :source-link
   {:color "#000000" :source "square.cljs"}

   :input-style
   {:backgroundColor "#ffffff" :opacity 0.75}

   :inputs
   {
    :z {:type :slider :min 0.05 :max 20 :step 0.1 :value 1.0 :width 500}
    :w {:type :slider :min 0.05 :max 10 :step 0.1 :value 1.0 :width 500}
    }

    :draw
   (fn [g cv render dragable input]
     (let [ z      (input :z)
           w      (input :w)
           ]
       ((cv :clear) "#ffffff")
       ((cv :scale) z)
       ((cv :set-line-width) w)
         (let [p0 (gr/point -1 -1 1)
               p1 (gr/point -1 1 1)
               p2 (gr/point 1 1 1)
               p3 (gr/point 1 -1 1)
               l0 (gr/join p0 p1)
               l1 (gr/join p1 p2)
               l2 (gr/join p2 p3)
               l3 (gr/join p3 p0)
               c  "#000000"]
           (println "l0 " l0)
           (render l0 {:color c})
           (render l1 {:color c})
           (render l2 {:color c})
           (render l3 {:color c})
           ))

       )
     })
