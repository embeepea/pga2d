(ns figwheel.connect (:require [figwheel.client] [figwheel.client.utils] [pga2d.diagram2]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/pga2d.diagram2.on-js-reload (apply js/pga2d.diagram2.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'pga2d.diagram2/on-js-reload' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

