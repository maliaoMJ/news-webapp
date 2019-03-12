<template>
  <div id="app">
    <div class="mainViewContainer"><router-view /></div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}
.van-tabbar-item__icon .van-icon {
  font-size: 22px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  /*max-width: 600px;*/
  /*margin: 0 auto;*/
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .mainViewContainer {
    width: 100%;
    flex: 1;
    display: block;
    overflow: hidden;
    .van-tab--active {
      font-weight: 500;
      color: #1989fa;
      /*font-size: 16px;*/
    }
    .van-tabs .van-tabs__content {
      flex: 1 !important;
      width: 100%;
      display: block;
      overflow: hidden;
    }
  }
  .appFooter {
    position: relative;
    overflow: hidden;
  }
}
</style>
