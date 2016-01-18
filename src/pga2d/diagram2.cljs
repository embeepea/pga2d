(ns pga2d.diagram2
  (:require [pga2d.grassmann :as gr]
            [pga2d.clifford :as cf]
            [pga2d.canvas :as c]))

(enable-console-print!)

(let [g      (cf/ga 0)
      cv     (c/canvas [-2 -2] [2 2])
      render (c/canvas-render cv g)
      m0     (gr/line -2 -1 -1)  ;; m0  (gr/line 2 1 1)
      m1     (gr/line 2 -1 -1)   ;; m1  (gr/line -2 1 1)
      A0     (gr/point -1 1 1)
      A1     (gr/point .6 .2 1)  ;; A1  (gr/point .5 0 1)
      a      (gr/join A0 A1)  ;A0 join A1
      Am     ((g :normalized) (gr/add A0 A1))   ; midpoint (since Ai is normalized)
      tmp    ((g :gp) Am a)
      r      ((g :normalized) (gr/grade tmp 1)) ; perp bisector of A0A1
      c      ((g :normalized) (gr/add m0 (gr/times m1 -1)))      ; angle bisector m0 m1
      C      ((g :normalized) (gr/wedge r c) )   ; intersection of r and c
      s      ((g :normalized) (gr/join A0 C) )   ; join of Am and C
      h      ((g :normalized) ((g :gp) r s) )    ; rotor that rotates around C desired angle
      gA0    (gr/chop (((g :sandwich) ((g :exp) 1.0 h) ) m0) 1e-10) ;; image of m0 under rotor g
      ]
    ((cv :clear) "#000000")
    ;; given 2 points and 2 lines (points lie on resp. lines)
    ;;((cv :set-color) "#ffffff")
    (render [m0,m1] {:color "#ffff00"})
    (render a {:color "#8888ff"})
    (render r {:color "#00ffff"})
    (render c {:color "#00ff00"})
    (render s {:color "#ff0000"})
    (render gA0 {:color "#ffffff"})

    (doseq [param1 (range 0.1 1.0 (/ 1.0 15.0))]
      (let [rotor ((g :exp) param1 h)
            sandwich (((g :sandwich) rotor) m0)
            chopped (gr/chop sandwich 1e-10)]
        (render chopped {:color "#ff00ff"})))

    ;; draw points last, so they appear on top of lines:
    (render [A0,A1] {:color "#ffffff"})
    (render Am {:color "#ffffff"})
    (render C {:color "#ffffff"})
    )
