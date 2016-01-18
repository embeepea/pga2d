(ns pga2d.diagram1
  (:require [pga2d.grassmann :as gr]
            [pga2d.clifford :as cf]
            [pga2d.canvas :as c]))

(enable-console-print!)

(def g (cf/ga 0))

(defmulti render  (fn [cv g mv] (mv :k)))

;; draw a point
(defmethod render 2 [cv g mv]
  (let [p (gr/pointFrom ((g :normalized) mv))]
    ((cv :draw-point) p 5)))

;; draw a line
(defmethod render 1 [cv g mv]
  ((cv :draw-line) mv))

(let [cv (c/canvas [-1 -1] [1 1])]
  (let [g   (cf/ga 0)
        p0  (gr/point -0.5  0.2 1)
        p1  (gr/point 0.5  -0.2 1)
        l01 (gr/join p0 p1)]
    ((cv :clear) "#000000")
    ((cv :set-color) "#ff0000")
    (render cv g p0)
    (render cv g p1)
    ((cv :set-color) "#00ffff")
    (render  cv g l01)
    )
  )
