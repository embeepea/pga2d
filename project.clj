(defproject pga2d "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [org.clojure/core.async "0.2.374"]
                 [figwheel-sidecar  "0.5.0"]]

  :plugins [[lein-cljsbuild "1.1.1"]
            [lein-figwheel "0.5.0-3"]]

  :source-paths ["src" "scripts"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src"]

                :figwheel {:on-jsload "pga2d.diagram3/on-js-reload"}

                :compiler {:main pga2d.diagram3
                           :asset-path "js/compiled/out"
                           :output-to "resources/public/js/compiled/pga2d.js"
                           :output-dir "resources/public/js/compiled/out"
                           :source-map-timestamp true}}
               ;; This next build is an compressed minified build for
               ;; production. You can build this with:
               ;; lein cljsbuild once min
               {:id "min"
                :source-paths ["src"]
                :compiler {:output-to "resources/public/js/compiled/pga2d.js"
                           :main pga2d.test
                           :preamble ["./public/lib/react-0.14.7/build/react.min.js"
                                      "./public/lib/react-0.14.7/build/react-dom.min.js"
                                      "./public/lib/requestanimationframe.js"]
                           :externs ["resources/public/lib/react-0.14.7/build/react.js"
                                     "resources/public/lib/react-0.14.7/build/react-dom.js"]
                           :optimizations :simple
                           :closure-warnings {:externs-validation :off
                                              :non-standard-jsdoc :off}
                           :pretty-print false}}

               ;; lein cljsbuild once diagram1
               {:id "diagram1"
                :source-paths ["src"]
                :compiler {:output-to "resources/public/js/compiled/diagram1.js"
                           :main pga2d.diagram1
                           :preamble ["./public/lib/react-0.14.7/build/react.min.js"
                                      "./public/lib/react-0.14.7/build/react-dom.min.js"
                                      "./public/lib/requestanimationframe.js"]
                           :externs ["resources/public/lib/react-0.14.7/build/react.js"
                                     "resources/public/lib/react-0.14.7/build/react-dom.js"]
                           :optimizations :simple
                           :closure-warnings {:externs-validation :off
                                              :non-standard-jsdoc :off}
                           :pretty-print false}}

               ;; lein cljsbuild once diagram2
               {:id "diagram2"
                :source-paths ["src"]
                :compiler {:output-to "resources/public/js/compiled/diagram2.js"
                           :main pga2d.diagram2
                           :preamble ["./public/lib/react-0.14.7/build/react.min.js"
                                      "./public/lib/react-0.14.7/build/react-dom.min.js"
                                      "./public/lib/requestanimationframe.js"]
                           :externs ["resources/public/lib/react-0.14.7/build/react.js"
                                     "resources/public/lib/react-0.14.7/build/react-dom.js"]
                           :optimizations :simple
                           :closure-warnings {:externs-validation :off
                                              :non-standard-jsdoc :off}
                           :pretty-print false}}

               {:id "diagram3"
                :source-paths ["src"]
                :compiler {:output-to "resources/public/js/compiled/diagram3.js"
                           :main pga2d.diagram3
                           :preamble ["./public/lib/react-0.14.7/build/react.min.js"
                                      "./public/lib/react-0.14.7/build/react-dom.min.js"
                                      "./public/lib/requestanimationframe.js"]
                           :externs ["resources/public/lib/react-0.14.7/build/react.js"
                                     "resources/public/lib/react-0.14.7/build/react-dom.js"]
                           :optimizations :simple
                           :closure-warnings {:externs-validation :off
                                              :non-standard-jsdoc :off}
                           :pretty-print false}}

               ;; lein cljsbuild once diagram1a
               {:id "diagram1a"
                :source-paths ["src"]
                :compiler {:output-to "resources/public/js/compiled/diagram1a.js"
                           :main pga2d.diagram1a
                           :preamble ["./public/lib/react-0.14.7/build/react.min.js"
                                      "./public/lib/react-0.14.7/build/react-dom.min.js"
                                      "./public/lib/requestanimationframe.js"]
                           :externs ["resources/public/lib/react-0.14.7/build/react.js"
                                     "resources/public/lib/react-0.14.7/build/react-dom.js"]
                           :optimizations :simple
                           :closure-warnings {:externs-validation :off
                                              :non-standard-jsdoc :off}
                           :pretty-print false}}

               ;; lein cljsbuild once diagram2a
               {:id "diagram2a"
                :source-paths ["src"]
                :compiler {:output-to "resources/public/js/compiled/diagram2a.js"
                           :main pga2d.diagram2a
                           :preamble ["./public/lib/react-0.14.7/build/react.min.js"
                                      "./public/lib/react-0.14.7/build/react-dom.min.js"
                                      "./public/lib/requestanimationframe.js"]
                           :externs ["resources/public/lib/react-0.14.7/build/react.js"
                                     "resources/public/lib/react-0.14.7/build/react-dom.js"]
                           :optimizations :simple
                           :closure-warnings {:externs-validation :off
                                              :non-standard-jsdoc :off}
                           :pretty-print false}}

               ]}

  :figwheel {;; :http-server-root "public" ;; default and assumes "resources"
             ;; :server-port 3449 ;; default
             ;; :server-ip "127.0.0.1"

             :css-dirs ["resources/public/css"] ;; watch and update CSS

             ;; Start an nREPL server into the running figwheel process
             ;; :nrepl-port 7888

             ;; Server Ring Handler (optional)
             ;; if you want to embed a ring handler into the figwheel http-kit
             ;; server, this is for simple ring servers, if this
             ;; doesn't work for you just run your own server :)
             ;; :ring-handler hello_world.server/handler

             ;; To be able to open files in your editor from the heads up display
             ;; you will need to put a script on your path.
             ;; that script will have to take a file path and a line number
             ;; ie. in  ~/bin/myfile-opener
             ;; #! /bin/sh
             ;; emacsclient -n +$2 $1
             ;;
             ;; :open-file-command "myfile-opener"

             ;; if you want to disable the REPL
             ;; :repl false

             ;; to configure a different figwheel logfile path
             ;; :server-logfile "tmp/logs/figwheel-logfile.log"
             })
