(ns cljs-101.hello
  (:require [reagent.core :as reagent]
            [re-mdl.core  :as mdl]))

(defn panel
  "This is a wide card with a share button."
  []
  [mdl/card
   :attr   {:style {:width  "512px"}}
   :shadow 2
   :children
   [[mdl/card-title
     :attr   {:style {:height     "176px"
                      :color      "#fff"
                      :background "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover"}}
     :header :h2
     :child  "Welcome"]
    [mdl/card-supporting-text
     :children ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Mauris sagittis pellentesque lacus eleifend lacinia..."]]
    [mdl/card-actions
     :border? true
     :children
     [[mdl/button
       :el             :a
       :colored?       true
       :ripple-effect? true
       :child          "Get Started"]]]
    [mdl/card-menu
     :children [[mdl/button
                 :attr           {:style {:color "white"}}
                 :icon?          true
                 :ripple-effect? true
                 :child          [:i.material-icons "share"]]]]]])

(defn ^:export init[]
  (js/alert "Hello from ClojureScript!")
  (.log js/console "Hello from ClojureScript!")
  (reagent/render [panel] (.getElementById js/document "app")))

