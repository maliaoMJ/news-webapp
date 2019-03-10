<template>
  <div class="login" id="login">
    <div class="background-box" id="background">
      <vue-canvas-nest :config="config"></vue-canvas-nest>
    </div>
    <div class="login-box">
      <input type="text" placeholder="导购唯一识别码" />
      <input type="text" placeholder="用户名" />
      <input type="text" placeholder="联系方式" />
      <div class="button-box login-button">绑定</div>
      <div class="button-box cancel-button">取消</div>
      <!--<div class="power">菱歌科技@2015-2019 导购营销</div>-->
    </div>
  </div>
</template>
<script>
import vueCanvasNest from "vue-canvas-nest";
export default {
  components: { vueCanvasNest },
  data() {
    return {
      config: {
        color: "255,255,255",
        opacity: 0.7,
        zIndex: 1111,
        count: 99,
        el: "#background"
      }
    };
  },
  mounted() {
    this.$axios.get("v1/topics");
  }
};
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  position: relative;
  background: linear-gradient(
    to top left,
    rgba(102, 218, 243, 1),
    rgb(98, 135, 252)
  );
  .background-box {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 111;
    width: 100%;
    height: 100%;
  }
  .login-box {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 222;
    padding-top: 3rem;
    background: rgba(0, 0, 0, 0);
    input {
      width: 80%;
      height: 1.3rem;
      background: rgba(255, 255, 255, 0.4);
      outline: none;
      border: none;
      margin-bottom: 0.5rem;
      border-radius: 0.17rem;
      font-size: 0.5rem;
      padding-left: 0.3rem;
      color: #fff;
      font-weight: bolder;
      &::-webkit-input-placeholder {
        /* placeholder颜色  */
        color: #ddd;
        /* placeholder字体大小  */
        font-size: 0.45rem;
      }
    }
    .power {
      color: #fff;
      font-size: 0.35rem;
      position: fixed;
      bottom: 0.5rem;
      width: 100%;
      text-align: center;
    }
    .button-box {
      width: 80%;
      height: 1.3rem;
      margin: 0 auto;
      font-size: 0.6rem;
      background: red;
      border-radius: 0.17rem;
      margin-bottom: 0.5rem;
      padding-left: 0.3rem;
      line-height: 1.3rem;
      color: #fff;
      cursor: pointer;

      &.login-button {
        background: #1989fa;
      }
      &.cancel-button {
        background: #fd5547;
      }
    }
  }
}
</style>
