<template>
  <div class="contentItem">
    <div class="content">
      <div class="text-box">
        <div class="content-text ">
          微信图片列表为大家提供了各种最新的微信图片类型的种最新的微信图片类型的
        </div>
      </div>
      <div class="image-box">
        <img src="http://pic.qqtn.com/up/2018-5/15274879663104398.jpg" alt="" />
      </div>
    </div>
    <div class="date-box">
      <slot name="sub"><span>02/30/2019</span></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentItem"
};
</script>
<style lang="scss" scoped>
.contentItem {
  width: 92%;
  height: 3.533rem;
  background: #fff;
  margin-top: 0.4rem;
  margin-left: 4%;
  border-radius: 0.25rem;
  padding: 0.4864rem;
  box-sizing: border-box;
  overflow: hidden;
  .content {
    width: 100%;
    height: 2.13rem;
    display: flex;
    flex-direction: row;
    .text-box {
      flex: 1;
      display: block;
      /*padding-top: 0.2166rem;*/
      /*padding-right: 0.28rem;*/
      padding: 0.21rem;
      .content-text {
        font-size: 0.43rem;
        width: 100%;
        height: 100%;
        line-height: 0.6rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        box-sizing: border-box;
        text-align: left;
        color: #565c61;
      }
    }
    .image-box {
      width: 2.2rem;
      height: 2.2rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 0.12rem;
      }
    }
  }
  .date-box {
    height: 1rem;
    width: 100%;
    padding: 0;
    margin: 0;
    text-align: left;
    padding-left: 0.2rem;
    overflow: hidden;
    line-height: 0.3rem;
    span {
      font-size: 0.38rem;
      padding: 0;
      margin: 0;
      color: #d7d7d7;
    }
  }
}
</style>
