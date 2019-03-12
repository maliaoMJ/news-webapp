module.exports = {
  transpileDependencies: ["vue-echarts", "resize-detector"],
  configureWebpack: {
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js"
      }
    }
  }
};
