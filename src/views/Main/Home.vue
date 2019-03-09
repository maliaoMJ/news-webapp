<template>
  <div class="home">
    <div class="viewContainer"><router-view /></div>
    <app-footer class="appFooter"></app-footer>
  </div>
</template>
<script>
import AppFooter from "@/components/AppFooter/";

export default {
  components: { AppFooter }
};
</script>
<style lang="scss" scoped>
.van-tabbar-item__icon .van-icon {
  font-size: 22px;
}
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .viewContainer {
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
