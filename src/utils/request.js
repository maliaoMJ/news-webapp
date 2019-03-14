import axios from "axios";
import router from "@/router";
const AUTH_TOKEN = localStorage.getItem("token") || "";
const instance = axios.create({
  baseURL: "https://cnodejs.org/api/",
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  },
  timeout: 60000
});
instance.defaults.headers.common["Authorization"] = AUTH_TOKEN;
instance.interceptors.request.use(
  function(config) {
    // console.log(config);
    if (!config.headers.common.Authorization) {
      console.log("该请求没有token!");
    } else {
      console.log(`改请求携带的TOKEN${config.headers.common.Authorization}`);
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function(response) {
    // console.log(response);
    if (response.status === 401) {
      console.log("401 token 失效！");
      router.push("/401");
    } else if (response.status === 403) {
      console.log("403 服务器拒绝了请求");
      router.push("/403");
    } else if (response.status === 404) {
      console.log("请求的资源不存在！");
      router.push("/nofound");
    }
    // router.push('/main/material');
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);
export default instance;
