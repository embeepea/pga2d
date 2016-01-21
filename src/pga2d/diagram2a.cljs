(ns pga2d.diagram2a
  (:require [pga2d.grassmann :as gr]
            [pga2d.clifford :as cf]
            [pga2d.canvas :as c]
            [pga2d.diagram :as d]))

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

(d/diagram
 {:coords
  [[-2 -2] [2 2]]

  ;; The user will be able to drag these points.  Each draggable should
  ;; have a key which serves as its id; the value for that key should
  ;; be a map with keys :mv (a point multivector), and :color.
  :dragables
  {:A0     {:mv (gr/point -1.0  1.0  1) :color "#ffffff"}
   :A1     {:mv (gr/point  0.6  0.2  1) :color "#ffffff"}
   :B0     {:mv (gr/point -0.2 -1.0  1) :color "#666666"}
   :B1     {:mv (gr/point  0.2 -1.0  1) :color "#666666"}}

  ;; The diagram package takes care of rendering the draggable points above, and
  ;; the following function will be called to render anything else.
  :draw
  (fn [g cv render dragable]
    (let [N      (g :normalized)      ;; N = shorthand for :normalized function in g
          A0     (dragable :A0)       ;; (dragable k) returns current multivector for dragable with id k
          A1     (dragable :A1)
          B0     (dragable :B0)
          B1     (dragable :B1)
          m0     (N (gr/join B0 A0))              ;; m0 = line through points P,A0
          m1     (N (gr/join A1 B1))              ;; m1 = line through points A1,P
          a      (gr/join A0 A1)                  ;; a = line through points A0,A1
          Am     (N (gr/add A0 A1))               ;; midpoint of segment A0,A1 (since Ai is normalized)
          r      (N (gr/grade ((g :gp) Am a) 1))  ;; perp bisector of segment A0,A1
                                                  ;;  (Note that taking the grade 1 part of this is only
                                                  ;;  needed because of numerical roundoff; all grades
                                                  ;;  other than 1 will be within epsilon of 0 already.)
          c      (N (gr/add m0 (gr/times m1 -1))) ;; angle bisector of lines m0,m1
          C      (N (gr/wedge r c) )              ;; intersection of lines r,c
          s      (N (gr/join A0 C) )              ;; line through points A0,C
          h      (N ((g :gp) r s) )               ;; h = geometric product of lines r,s = rotor that
                                                  ;;   rotates around point C by desired angle
                                                  ;; h is the answer we seek
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
      (render Am {:color "#ffffff"})
      (render C {:color "#ffffff"})
      )
    )})
