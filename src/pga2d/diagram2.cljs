(ns pga2d.diagram2
  (:require [pga2d.grassmann :as gr]
            [pga2d.clifford :as cf]
            [pga2d.canvas :as c]))

(enable-console-print!)

(def g (cf/ga 0))

(defmulti render  (fn [cv g mv] (mv :k)))

;; draw a point
(defmethod render 2 [cv g mv]
  (let [p (gr/point-from ((g :normalized) mv))]
    ((cv :draw-point) p 5)))

;; draw a line
(defmethod render 1 [cv g mv]
  ((cv :draw-line) mv))

(defmethod render nil [cv g mv]
  (println "invalid render")
  )

(let [cv (c/canvas [-2 -2] [2 2])]
  (let [g (cf/ga 0)
        m0 (gr/line -2 -1 -1)
        m1 (gr/line 2 -1 -1)
        A0 (gr/point -1 1 1)
        A1 (gr/point .6 .2 1)
        a (gr/join A0 A1)  ;A0 join A1
        Am ((g :normalized) (gr/add A0 A1))   ; midpoint (since Ai is normalized)
        tmp ((g :gp) Am a)
        r ((g :normalized) (gr/grade tmp 1)) ; perp bisector of A0A1
        c ((g :normalized) (gr/add m0 (gr/times m1 -1)))      ; angle bisector m0 m1
        C ((g :normalized) (gr/wedge r c) )   ; intersection of r and c
        s ((g :normalized) (gr/join A0 C) )   ; join of Am and C
        h ((g :normalized) ((g :gp) r s) )    ; rotor that rotates around C desired angle
        gA0 (gr/chop (((g :sandwich) ((g :exp) 1.0 h) ) m0) 1e-10) ;; image of m0 under rotor g
        ]

    (println "r = " r " s = " s " h = " h " gA0 " gA0)
    ((cv :clear) "#000000")
    ;; given 2 points and 2 lines (points lie on resp. lines)
    ((cv :set-color) "#ffffff")
    (render cv g A0)
    (render cv g A1)
    ((cv :set-color) "#ffff00")
    (render cv g m0)
    (render cv g m1)
    ((cv :set-color) "#8888ff")
    (render cv g a)
    ((cv :set-color) "#ffffff")
    (render cv g Am)
    ((cv :set-color) "#00ffff")
    (render cv g r)
    ((cv :set-color) "#00ff00")
    (render cv g c)
    ((cv :set-color) "#ffffff")
    (render cv g C)
    ((cv :set-color) "#ff0000")
    (render cv g s)
    ((cv :set-color) "#ffffff")
    (println gA0)
    (render cv g gA0)
    ((cv :set-color) "#ff00ff")
    (doall (map (fn [param1]
                  (let [rotor ((g :exp) param1 h)
                        sandwich (((g :sandwich) rotor) m0)
                        chopped (gr/chop sandwich 1e-10)]
                    (println "rotor" rotor "m0 " m0 " sandwich " sandwich)
                    (render cv g chopped)
                    )
                  )
                (range 0.1 1.0 (/ 1.0 15.0))
                )
           )
    )
  )
