(ns pga2d.diagram2
  (:require [pga2d.grassmann :as gr]
            [pga2d.clifford :as cf]
            [pga2d.canvas :as c]))

(enable-console-print!)

;; Given two lines m0,m1, and two points A0 (on m0), A1 (on m1):
;; find the direct isometry that takes m0 to m1 (oriented) and A0 to A1.

(let [g      (cf/ga 0)
      cv     (c/canvas [-2 -2] [2 2])
      render (c/canvas-render cv g)
      N      (g :normalized)
      ;;m0     (gr/line -2 -1 -1)  ;; m0  (gr/line 2 1 1)
      ;;m1     (gr/line 2 -1 -1)   ;; m1  (gr/line -2 1 1)
      A0     (gr/point -1 1 1)
      A1     (gr/point .6 .2 1)  ;; A1  (gr/point .5 0 1)
          P    (gr/point 0 -1 1) ;; or (gr/point 0 -1 1) for extreme coolness
          m0   (gr/join P A0) ;; = m0
          m1   (gr/join A1 P) ;; = m1
      m0     (N m0)
      m1     (N m1)
      a      (gr/join A0 A1)  ;A0 join A1
      Am     (N (gr/add A0 A1))   ; midpoint (since Ai is normalized)
      tmp    ((g :gp) Am a)
      r      (N (gr/grade tmp 1)) ; perp bisector of A0A1  (= tmp within fudge)
      c      (N (gr/add m0 (gr/times m1 -1)))      ; angle bisector m0 m1
      C      (N (gr/wedge r c) )   ; intersection of r and c
      s      (N (gr/join A0 C) )   ; join of Am and C
      h      (N ((g :gp) r s) )    ; rotor that rotates around C desired angle
      ]
    ((cv :clear) "#000000")
    ;; given 2 points and 2 lines (points lie on resp. lines)
    ;;((cv :set-color) "#ffffff")
    (render [m0,m1] {:color "#ffff00"})
    (render a {:color "#0000ff"})
    (render r {:color "#00ffff"})
    (render c {:color "#00ff00"})
    (render s {:color "#ff0000"})

    (doseq [param1 (drop-last 1(drop 1 (range 0.0 1.0 (/ 1.0 15.0))))]
      (let [rotor ((g :exp) param1 h)]
        (render (gr/chop (((g :sandwich) rotor) m0) 1e-10) {:color "rgba(255,255,0,0.4)"})
        (render (gr/chop (((g :sandwich) rotor) A0) 1e-10) {:color "rgba(255,255,255,0.5)"})
        ))

    ;; draw points last, so they appear on top of lines:
    (render [A0,A1] {:color "#ffffff"})
    (render Am {:color "#ffffff"})
    (render C {:color "#ffffff"})


    (let [
          ;;P    (gr/point 0 -1 1)
          ;;PA0  (gr/join P A0) ;; = m0
          ;;PA1  (gr/join P A1) ;; = m1
          ]
      (render [] {:color "#0000ff"})
      )


    )
