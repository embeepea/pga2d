(ns pga2d.diagram2
  (:require [pga2d.grassmann :as gr]
            [pga2d.clifford :as cf]
            [pga2d.canvas :as c]))

(enable-console-print!)

;; This diagram uses geometric algebra to construct a solution to
;; the following problem:
;;
;; Given:
;;   an oriented line m0
;;   a point A0 on m0
;;   an oriented line m1
;;   a point A1 on m1
;; Find:
;;   The direct isometry of R2 that takes m0 to m1 and A0 to A1.

(let [g      (cf/ga 0)                        ; g = euclidean geometric algebra
      cv     (c/canvas [-2 -2] [2 2])         ; cv = canvas with given coord sys
      render (c/canvas-render cv g)           ; render = function for drawing in canvas
      N      (g :normalized)                  ; N = shorthand for :normalized function in g
      A0     (gr/point -1 1 1)                ; A0 = the first given point
      A1     (gr/point .6 .2 1)               ; A1 = the second given point
      P      (gr/point 0 -1 0)                ; P = a 3rd point, will be used to construct lines m0,m1
                                              ;   For extreme coolness, setting P to (gr/point 0 -1 0)
                                              ;   will give parallel lines.
;;      m0     (N (gr/join P A0))               ; m0 = line through points P,A0
      ;; for ultimate coolness, when the lines are parallel and have the same orientation,
      ;; the desired isometry is a translation
      m0     (N (gr/join A0 P))               ; m0 = line through points A0,P
      m1     (N (gr/join A1 P))               ; m1 = line through points A1,P
      a      (gr/join A0 A1)                  ; a = line through points A0,A1
      Am     (N (gr/add A0 A1))               ; midpoint of segment A0,A1 (since Ai is normalized)
      r      (N (gr/grade ((g :gp) Am a) 1))  ; perp bisector of segment A0,A1
                                              ;   (Note that taking the grade 1 part of this is only
                                              ;   needed because of numerical roundoff; all grades
                                              ;   other than 1 will be within epsilon of 0 already.)
      c      (N (gr/add m0 (gr/times m1 -1))) ; angle bisector of lines m0,m1
      C      (N (gr/wedge r c) )              ; intersection of lines r,c
      s      (N (gr/join A0 C) )              ; line through points A0,C
      h      (N ((g :gp) r s) )               ; h = geometric product of lines r,s = rotor that
                                              ;   rotates around point C by desired angle
                                              ; h is the answer we seek
      ]
    ((cv :clear) "#000000")
    (render [m0,m1] {:color "#ffff00"})
    (render a {:color "#0000ff"})
    (render r {:color "#00ffff"})
    (render c {:color "#00ff00"})
    (render s {:color "#ff0000"})

    (doseq [t (drop-last 1 (drop 1 (range 0.0 1.0 (/ 1.0 15.0))))]
      ;; h to the 0th power is the identity (think: rotation about C of angle 0)
      ;; h to the 1st power is h (think: rotation about C of full amount)
      ;; h to the t-th power, for 0 < t < 1, is rotation about C of partial amount
      ;; draw the image of m0 (white dot) and A0 (yellow line) under several partial
      ;;   rotation angles:
      (let [rotor ((g :exp) t h)]
        (render (gr/chop (((g :sandwich) rotor) m0) 1e-10) {:color "rgba(255,255,0,0.4)"})
        (render (gr/chop (((g :sandwich) rotor) A0) 1e-10) {:color "rgba(255,255,255,0.5)"})
        ))

    ;; draw these points last, so they appear on top of lines:
    (render [A0,A1] {:color "#ffffff"})
    (render Am {:color "#ffffff"})
    (render C {:color "#ffffff"})
    )
