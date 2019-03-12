const path = require("path");
const SkeletonWebpackPlugin = require("vue-skeleton-webpack-plugin");
module.exports = {
  transpileDependencies: ["vue-echarts", "resize-detector"],
  configureWebpack: config => {
    config.plugins.push(
      new SkeletonWebpackPlugin({
        webpackConfig: {
          entry: {
            app: path.join(__dirname, "./src/Skeleton.js")
          }
        },
        minimize: true,
        quiet: true
      })
    );
  },
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  }
};
