(ns pga2d.diagram3
  (:require [pga2d.grassmann :as gr]
            [pga2d.clifford :as cf]
            [pga2d.canvas :as c]
            [pga2d.diagram :as d]
            [cljs.pprint :refer [cl-format]]
            ))


(enable-console-print!)

;; This diagram depends on two integer parameters n and s.
;; It visualizes a set of lines obtained as follows:
;; Begin with the nth roots of unity (equally spaced points on unit circle)
;; pk = cos(2 pi k/n) + sin(2 pi k/n) i
;; Then draw the n lines
;; lk = p(k) join p(sk)

(d/diagram
  {:coords
     [[-1.5 -1.5] [1.5 1.5]]
;;   [[-0.15 -0.15] [0.15 0.15]]

   :source-link
   {:color "#000000" :source "diagram3.cljs"}

   :input-style
   {:backgroundColor "#ffffff" :opacity 0.75}

   :inputs
   {:n {:type :slider :min 1 :max 720 :step 1 :value 720 :width 500}
    :s {:type :slider :min 1 :max 720 :step 1 :value 38 :width 500}
    }

   ;; The user will be able to drag these points.  Each draggable should
   ;; have a key which serves as its id; the value for that key should
   ;; be a map with keys :mv (a point multivector), and :color.
   ;:dragables
   ;{:A0     {:mv (gr/point -1.0  1.0  1) :color "#ffffff"}
   ; :A1     {:mv (gr/point 0.6  0.2  1) :color "#ffffff"}
   ; :B0     {:mv (gr/point -0.6 0.0  1) :color "#666666"}
   ; :B1     {:mv (gr/point  1.0 1.2  1) :color "#666666"} }

   ;; The diagram package takes care of rendering the draggable points above, and
   ;; the following function will be called to render anything else.
   :draw
   (fn [g cv render dragable input]
     (let [N      (g :normalized)      ;; N = shorthand for :normalized function in g
           n      (input :n)
           delta  (/ 1.0 n)
           s      (input :s)
           doColor false
           ]
       ((cv :clear) "#ffffff")
       ((cv :set-line-width) .25)
       ;; draw lines connecting the x_i (the ith root of unity)
       ;; to (x_i)^s, its sth power.
       (doseq [t (range delta 1.0 delta)]
         (let [angle0 (* t (* 2 Math.PI))
               angle1 (* angle0 s)
               red   (Math.floor (* t 255))
               blue  (Math.floor (* (- 1.0 t) 255))
               color (cl-format nil "rgb(~d, 0, ~d)" red blue)
               p0    (gr/point (Math.cos angle0) (Math.sin angle0) 1)
               p1    (gr/point (Math.cos angle1) (Math.sin angle1) 1)
               [m, c]      (if (< (d/mndist p0 p1) 1E-6) ;; draw tangent line when points equal
                             (let [pv (gr/point (- (Math.sin angle0)) (Math.cos angle0) 0)]
                        [(gr/join p0 pv), "#000000"])
                        [(gr/join p0 p1), (if doColor color "#000000")])]
;;           (println "m = " m)
;;          (println "t = " t)
          (render m {:color c})
           ))

       )
     )})

;; (def TextSlider
;;   (.createClass
;;    js/React
;;    #js{
;;        :handleInput
;;        (fn [e] (this-as this (.setState this #js{:value e.target.value})))
;;        :getInitialState
;;        (fn [] (this-as this #js{:value this.props.initialValue}))
;;        :render
;;        (fn []
;;          (this-as this
;;                   (.div js/React.DOM #js{:className "textSlider"}
;;                         #_(.input js/React.DOM #js{:type "text" :size "1" :value this.state.value
;;                                                  :onChange this.handleInput})
;;                         (.span js/React.DOM #js{} this.state.value)
;;                         (.input js/React.DOM #js{:type "range" :min "0" :max "10" :step "1"
;;                                                  :value this.state.value
;;                                                  :onInput this.handleInput
;;                                                  :onChange this.handleInput}))))}))
;; 
;; (def App
;;   (.createClass
;;    js/React
;;    #js{
;;        :render
;;        (fn []
;;          (this-as this
;;                   (.div js/React.DOM #js{}
;;                         (.createElement js/React TextSlider #js{:initialValue 2})
;;                         (.createElement js/React TextSlider #js{:initialValue 9}))))}))
;; 
;; (.render js/ReactDOM
;;          #_(.createElement js/React TextSlider #js{:initialValue 7})
;;          (.createElement js/React App)
;;          (.getElementById js/document "app"))
