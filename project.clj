(defproject cljs-101 "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.238"]]
  :main cljs-101.core
  
  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-figwheel "0.5.15"]]
  
  :cljsbuild {
    :builds [{:id "dev"
              ; The path to the top-level ClojureScript source directory:
              :source-paths ["src-cljs"]
              :figwheel true
              ; The standard ClojureScript compiler options:
              ; (See the ClojureScript compiler documentation for details.)
              :compiler {
                         :output-to "resources/public/js/main.js"
                         :optimizations :none
                         :pretty-print true}}]}
  
  )
