<template>
  <div :class="[isMargin ? 'isMargin' : '', 'userItem']">
    <div class="image-box">
      <img
        src="http://img.haote.com/upload/news/20180725/153249800375155.jpg"
        alt=""
      />
    </div>
    <div class="info">
      <div class="top">
        <span class="name">无尘新</span>
        <span class="gender"
          ><i class="fa fa-mars" v-show="false"></i><i class="fa fa-venus"></i
        ></span>
      </div>
      <div class="bottom">
        <span class="address">河北 廊坊</span>
        <span class="history">1分钟游览过金品梅</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserItem",
  props: {
    isMargin: {
      type: Boolean,
      default: true
    }
  }
};
</script>
<style lang="scss" scoped>
.userItem {
  width: 90%;
  height: 1.8666rem;
  background: #fff;
  border-radius: 0.2rem;
  margin-left: 5%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.2rem;
  box-sizing: border-box;
  &.isMargin {
    margin-top: 0.3rem;
  }
  .image-box {
    width: 1.4rem;
    height: 1.4rem;
    img {
      width: 1.4rem;
      height: 1.4rem;
      -webkit-border-radius: 0.1rem;
      -moz-border-radius: 0.1rem;
      border-radius: 0.1rem;
    }
  }
  .info {
    flex: 1;
    display: flex;
    flex-direction: column;
    .top {
      height: 0.8rem;
      line-height: 0.55rem;
      text-align: left;
      padding-left: 0.3rem;

      .name {
        font-size: 0.4rem;
        padding-right: 0.2rem;
        font-weight: bolder;
        color: #1989fa;
      }
      .gender {
        font-size: 0.4rem;
        i.fa-mars {
          color: #1989fa;
          font-weight: bolder;
        }
        i.fa-venus {
          color: #ffb3c0;
          transform: rotate(40deg);
          font-weight: bolder;
        }
      }
    }
    .bottom {
      height: 0.7rem;
      line-height: 0.3rem;
      text-align: left;
      padding-left: 0.3rem;

      .address {
        font-size: 0.35rem;
        padding-right: 0.2rem;
        color: #aca9af;
        display: block;
        float: left;
        line-height: 0.8rem;
      }
      .history {
        display: block;
        text-align: right;
        font-size: 0.3rem;
        float: right;
        line-height: 0.8rem;
        padding-right: 0.1rem;
        color: #aaa;
      }
    }
  }
}
</style>
