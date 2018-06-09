import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.compact.css";

import Vue from "vue";
import AppComponent from "./App.vue";

new Vue({
  el: "#app",
  template: "<app-component></app-component>",
  components: {
    AppComponent
  }
})
