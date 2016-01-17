# pga2d

An experiment to implement 2D geometric algebra in ClosureScript.

## Overview

We (Mark Phillips and I) are just beginning.

## Setup

### Using IntelliJ/Cursive

This project is set up for use with Cursive, the IntelliJ plugin for
Clojure(Script) development.  To open the project with Cursive, from
within Cursive choose Open (NOT "Create New Project" or "Import
Project"), and navigate to the directory containing the project.

If this is the first time you have used Cursive with a ClojureScript
project on this computer, you will also need to create a clojure.main
Cursive REPL configuration.  The steps for doing this are:

* Click Run->Edit configurations.
* Click the + button at the top left and choose Clojure REPL
* Choose a Local REPL
* Enter a name in the Name field (e.g. "REPL")
* Choose the radio button Use clojure.main in normal JVM process
* In the Parameters field put script/repl.clj
* Click the OK button to save your REPL config.

More details are available at
https://github.com/bhauman/lein-figwheel/wiki/Running-figwheel-in-a-Cursive-Clojure-REPL
.


### From the Command Line

To get an interactive development environment run:

    lein figwheel

and open your browser at [localhost:3449](http://localhost:3449/).
This will auto compile and send all changes to the browser without the
need to reload. After the compilation process is complete, you will
get a Browser Connected REPL. An easy way to try it is:

    (js/alert "Am I connected?")

and you should see an alert in the browser window.

To clean all compiled files:

    lein clean

To create a production build run:

    lein cljsbuild once min

And open your browser in `resources/public/index.html`. You will not
get live reloading, nor a REPL. 
