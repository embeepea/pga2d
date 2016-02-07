(ns pga2d.ui
  (:require))

(defn kwdstr [kwd] (apply str (rest (str kwd))))

(def TextInput
  (.createClass
   js/React
   #js{
       :handleInput
       (fn [e] (this-as this
                        (.setState this #js{:value e.target.value})
                        (swap! this.props.appstate assoc-in
                               [:inputs this.props.keyword] (js/parseFloat e.target.value))
                        (this.props.draw)))
       :getInitialState
       (fn [] (this-as this #js{:value this.props.initialValue}))
       :render
       (fn []
         (this-as this
                  (.div js/React.DOM #js{}
                        (.span js/React.DOM #js{} (str (kwdstr this.props.keyword) ": "))
                        (.input js/React.DOM #js{:type "text" :size "8"
                                                 :value this.state.value
                                                 :onChange this.handleInput}))))}))

(def SliderInput
  (.createClass
   js/React
   #js{
       :handleInput
       (fn [e] (this-as this
                        (.setState this #js{:value e.target.value})
                        (swap! this.props.appstate assoc-in
                               [:inputs this.props.keyword] (js/parseFloat e.target.value))
                        (this.props.draw)))
       :getInitialState
       (fn [] (this-as this #js{:value this.props.initialValue}))
       :render
       (fn []
         (this-as this
                  (.div js/React.DOM #js{}
                        (.span js/React.DOM #js{} (str (kwdstr this.props.keyword) ": "))
                        (.input js/React.DOM #js{:type "range"
                                                 :style #js{:width this.props.width}
                                                 :min this.props.min
                                                 :max this.props.max
                                                 :step this.props.step
                                                 :value this.state.value
                                                 :onInput this.handleInput
                                                 :onChange this.handleInput})

                        (.input js/React.DOM #js{:type "text" :size "8"
                                                 :value this.state.value
                                                 :onChange this.handleInput}))))}))


(defn input-value-map [inputs]
  (into {} (map
            (fn [[k v]] [k (if (number? v) v (:value v))])
            (seq inputs))))

(defn input-widget [k v draw appstate]
  (cond
    (number? v)
    (.createElement js/React TextInput
                    #js{:draw draw
                        :appstate appstate
                        :keyword k :initialValue v})

    (= (:type v) :number)
    (.createElement js/React TextInput
                    #js{:draw draw
                        :appstate appstate
                        :keyword k
                        :initialValue (:value v)
                        })

    (= (:type v) :slider)
    (.createElement js/React SliderInput
                    #js{:draw draw
                        :appstate appstate
                        :keyword k
                        :initialValue (:value v)
                        :min (:min v)
                        :max (:max v)
                        :step (:step v)
                        :width (if (:width v) (:width v) 200)
                        })
    ))

;; Warning: using :key instead of :keyword in props above does not work; apparently there
;; is some kind of internal clash with the name "key".

(def UI
  (.createClass
   js/React
   #js{
       :render
       (fn []
         (this-as this
                  (apply js/React.DOM.div
                         #js{:className "inputs"
                             :style #js{:backgroundColor this.props.backgroundColor
                                        :opacity this.props.opacity}}
                         (map
                          (fn [[k v]]
                            ;; k,v are the key,value for a single input
                            (input-widget k v this.props.draw this.props.appstate))
                          (seq this.props.inputs)))))}))
