<template>
  <div class="behaviour-item">
    <div class="left">
      <span class="dot" :style="{ background: articleData.color }"></span>
    </div>
    <div class="center">
      <div class="text">{{ articleData.title }}</div>
    </div>
    <div class="right">{{ articleData.count }}次</div>
  </div>
</template>
<script>
export default {
  name: "ArticleItem",
  props: {
    color: {
      type: String,
      default: "red"
    },
    articleData: {
      type: Object,
      default: function() {
        return { title: "文章标题", color: "#5334f4", count: 0 };
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.behaviour-item {
  height: 1rem;
  width: 100%;
  margin-top: 0.11rem;
  border-bottom: 2px solid #eaf6ff;
  border-radius: 2px;
  background: #f6f9f9;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  .left {
    height: 1rem;
    width: 1rem;
    box-sizing: border-box;
    font-size: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .dot {
      display: block;
      width: 0.2rem;
      height: 0.2rem;
      border-radius: 0.2rem;
      background: #5334f4;
      overflow: hidden;
      padding: 0;
      margin: 0;
    }
  }
  .right {
    height: 1.22rem;
    width: 1.6rem;
    font-size: 0.4rem;
    color: #8f9292;
    line-height: 1.32rem;
  }
  .center {
    flex: 1;
    .text {
      width: 100%;
      height: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 6rem;
      font-size: 0.4rem;
      line-height: 1rem;
      text-align: left;
    }
  }
  &:last-child {
    border-bottom: 0 solid #fff;
  }
}
</style>
