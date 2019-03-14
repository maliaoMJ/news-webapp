<template>
  <div class="noFound" id="login">
    <div class="background-box" id="background">
      <vue-canvas-nest :config="config"></vue-canvas-nest>
    </div>
    <div class="content-box">
      <h4>403</h4>
      <p>服务器上文件或目录拒绝访问!</p>
      <div class="back-button" @click="goBack">
        重新登录 <i class="fa fa-arrow-right"></i>
      </div>
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
  methods: {
    goBack() {
      this.$router.push("/login");
    }
  },
  mounted() {
    this.$axios.get("v1/topics");
  }
};
</script>
<style lang="scss" scoped>
.noFound {
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
  }
  .content-box {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 222;
    padding-top: 4rem;
    background: rgba(0, 0, 0, 0);
    color: #fff;
    text-align: center;
    h4 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.6rem;
    }
    .back-button {
      width: 3rem;
      height: 1rem;
      background: #1989fa;
      margin: 0 auto;
      font-size: 0.44rem;
      margin-top: 1rem;
      line-height: 1rem;
      border-radius: 0.1rem;
    }
  }
}
</style>
