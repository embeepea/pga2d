(ns figwheel-test.core
  (:require ))

(enable-console-print!)

(println "Edit to this text should show up in your developer console.")

(println (str "1+1=") (+ 1 1))
;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
