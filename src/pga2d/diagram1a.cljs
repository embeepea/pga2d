(ns pga2d.diagram1a
  (:require [pga2d.grassmann :as gr]
            [pga2d.clifford :as cf]
            [pga2d.canvas :as c]
            [pga2d.diagram :as d]))

(enable-console-print!)

(d/diagram
 ;; these are the default diagram coordinates, so this could be omitted
 {:coords
  [[-1 -1] [1 1]]

  ;; The user will be able to drag these points.  Each draggable should
  ;; have a key which serves as its id; the value for that key should
  ;; be a map with keys :mv (a point multivector), and :color.
  :dragables        
  {:p0 {:mv (gr/point 0     0   1) :color "#ff0000"}
   :p1 {:mv (gr/point 0.5  -0.2 1) :color "#ff0000"}}

  ;; The diagram packages takes care of rendering the draggable points above, and
  ;; the following function will be called to render anything else.
  :draw
  (fn [g cv render dragable]
    (let [p0     (dragable :p0)        ;; (dragable k) returns current multivector for dragable with id k
          p1     (dragable :p1)
          l01    (gr/join p0 p1)]      ;; Let l01 be the join of p0,p1 (a line)
      ((cv :clear) "#000000")          ;; clear the background to black
      (render l01 {:color "#00ffff"})  ;; draw line l01 in cyan
      ))
  })
