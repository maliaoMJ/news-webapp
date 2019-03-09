import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "@/utils/request";
import "./registerServiceWorker";
import fastclick from "fastclick";
import VueLazyload from "vue-lazyload";
// 引入flexible.js
import "@/utils/flexible";
import Vant from "vant";

// 引入Vant UI 组件库
import "vant/lib/index.css";
fastclick.attach(document.body);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error:
    "http://wanzao2.b0.upaiyun.com/14758515678631475754541_400x400.gif-460.gif",
  loading:
    "http://wanzao2.b0.upaiyun.com/14758515678631475754541_400x400.gif-460.gif",
  attempt: 1
});
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.use(Vant);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
