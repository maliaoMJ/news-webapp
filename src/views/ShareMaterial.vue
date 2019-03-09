<template>
  <div class="share">
    <div class="article-box"><content-item></content-item></div>
    <div class="warn-box"><i class="fa  fa-exclamation-triangle"></i></div>
    <h6 class="title">提示</h6>
    <div class="content-box">
      <p>
        1、点击素材标题，跳转至原文详情，在原文详情页面转发，则无法最终跟踪数据
      </p>
      <p>2、直接转发本业，则为您转发本素材，并且可以追踪该素材的游览数据</p>
    </div>
    <div class="button-box">转发</div>
  </div>
</template>
<script>
import ContentItem from "@/components/ContentItem/";
export default {
  components: {
    ContentItem
  }
};
</script>
<style lang="scss" scoped>
.share {
  background: linear-gradient(
    to top,
    rgba(102, 218, 243, 1),
    rgb(98, 135, 252) 104%
  );
  padding-top: 0.5rem;
  width: 100%;
  height: 100%;
  display: block;
  overflow: hidden;
  .article-box {
    overflow: hidden;
  }
  .warn-box {
    width: 1.3rem;
    height: 1.3rem;
    display: block;
    background: orange;
    margin: 0 auto;
    margin-top: 1.5rem;
    line-height: 1.17rem;
    text-align: center;
    border-radius: 1.3rem;
    i {
      font-size: 0.8rem;
      color: #fff;
    }
  }
  h6.title {
    color: #fff;
    font-size: 0.55rem;
  }
  .content-box {
    padding-left: 0.6rem;
    padding-right: 0.5rem;
    font-size: 0.45rem;
    text-align: left;
    color: #fff;
    margin-top: 0.45rem;
    margin-bottom: 1.5rem;
    p {
      padding-top: 0.2rem;
    }
  }
  .button-box {
    width: 4rem;
    height: 1rem;
    background: #fff;
    margin: 0 auto;
    font-size: 0.5rem;
    line-height: 1rem;
    color: #1989fa;
    border-radius: 0.1rem;
  }
}
</style>
