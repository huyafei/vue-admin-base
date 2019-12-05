import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import axios from "./utils/request.js";
Vue.prototype.$ajax = axios;

import "normalize.css/normalize.css";
import "./assets/css/reset.css";

import "./assets/scss/element-variables.scss";
import "./assets/scss/index.scss";

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
