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
  /*Time line */

  .line-container .item-tag {
    position: absolute;
    left: -6.3rem;
    width: 2rem;
    text-align: center;
    color: #949fa8;
    font-size: 0.3rem;
  }
  .line-container {
    margin-top: 0 !important;
    &::after {
      position: absolute;
      content: "";
      left: 1.8rem !important;
      top: 0;
      width: 1px;
      height: 100%;
      background-color: #e4e1fe;
    }
  }
  .line-container .item-symbol {
    box-sizing: border-box;
    position: absolute;
    left: -4.18rem;
    z-index: 1;
    background: white;
  }
  .item-content.circle {
    width: 6.6rem !important;
    position: absolute !important;
    left: -3.8rem !important;
  }
  .line-container .item-circle {
    box-sizing: border-box;
    position: absolute;
    margin-left: -7px;
    width: 0.32rem;
    height: 0.32rem;
    border-radius: 50%;
    background: white;
    border: 0.07rem solid #4088ff;
  }
  .behaviour .article-item {
    color: #434343;
    width: 100%;
    height: 1.7rem;
    border-radius: 0.2rem;
    background: #fff;
    margin: 0;
    text-align: left;
    padding: 0.2rem;
    position: relative;
    box-sizing: border-box;
    .article-content {
      display: flex;
      flex-direction: row;
      margin: 0;
      padding: 0;
      overflow: hidden;
      position: absolute;
      top: 0.2rem;
      .text {
        font-size: 0.27rem;
        height: 0.9rem;
        overflow: hidden;
        box-sizing: border-box;
        padding-left: 0.1rem;
        padding-right: 0.15rem;
        line-height: 0.48rem;
        text-overflow: ellipsis; //文本溢出显示省略号
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        max-width: 5.2rem;
      }
      img {
        width: 0.9rem;
        height: 0.9rem;
        border-radius: 0.07rem;
      }
    }
    .time {
      position: absolute;
      top: 1.3rem;
      width: 100%;
      height: 0.4rem;
      font-size: 0.1rem;
      color: #999999;
      transform: scale(0.9);
      margin-left: -0.2rem;
    }
  }
}
</style>
