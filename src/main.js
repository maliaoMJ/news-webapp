import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "@/utils/request";
import "./registerServiceWorker";
import fastclick from "fastclick";
import IEcharts from "vue-echarts-v3/src/lite.js";
import "echarts/lib/chart/bar";
import "echarts/lib/component/tooltip";
import VueLazyload from "vue-lazyload";
import "@/utils/flexible";
import Vant from "vant";
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
Vue.component("IEcharts", IEcharts);
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.use(Vant);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
