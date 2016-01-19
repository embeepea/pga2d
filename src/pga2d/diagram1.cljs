(ns pga2d.diagram1
  (:require [pga2d.grassmann :as gr]
            [pga2d.clifford :as cf]
            [pga2d.canvas :as c]))

(enable-console-print!)

(let [g      (cf/ga 0)                      ; Let `g` be the euclidean geometric algebra
      cv     (c/canvas [-1 -1] [1 1])       ; Let `cv` be a canvas with the given coord sys
      render (c/canvas-render cv g)         ; Let `render` be the function for drawing in that canvas
      p0     (gr/point -0.5  0.2 1)         ; Let `p0` be a point with specific coords
      p1     (gr/point 0.5  -0.2 1)         ; Let `p1` be a point with specific coords
      l01    (gr/join p0 p1)]               ; Let `l01` be the join of p0,p1 (a line)
    ((cv :clear) "#000000")                 ; clear the background to black
    (render [p0,p1] {:color "#ff0000"})     ; draw points p0,p1 in red
    (render l01 {:color "#00ffff"})         ; draw line l01 in cyan
  )
