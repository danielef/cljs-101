(defproject cljs-101 "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.238"]
                 [reagent "0.7.0"]
                 [com.yetanalytics/re-mdl "0.1.8" :exclusions [cljsjs/react-with-addons]]
                 [cljsjs/react-with-addons "15.5.4-0"]]
  
  :main cljs-101.core
  
  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-figwheel "0.5.15"]]
  
  :figwheel {:readline false}

  :cljsbuild {
    :builds [{:id "dev"
              ; The path to the top-level ClojureScript source directory:
              :source-paths ["src-cljs"]
              :figwheel true
              ; The standard ClojureScript compiler options:
              ; (See the ClojureScript compiler documentation for details.)
              :compiler {:main cljs-101.hello 
                         :asset-path "js/out"
                         :output-dir "resources/public/js/out"
                         :output-to "resources/public/js/main.js"
                         :optimizations :none
                         :pretty-print true
                         }}]})
