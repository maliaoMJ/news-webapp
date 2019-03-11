<template
  ><div class="analyse">
    <div class="overview-container">
      <div class="select-button" @click="openTimeSelect">
        <span>本月</span><i class="fa fa-angle-down"></i>
      </div>
      <div class="target">
        <h4>2,0000.00</h4>
        <p>业绩目标</p>
      </div>
      <div class="scale-box">
        <div class="complete">
          <p class="number">2,000.00</p>
          <p class="text">完成</p>
        </div>
        <span class="line van-hairline--right"></span>
        <div class="complete">
          <p class="number">40%</p>
          <p class="text">完成占比</p>
        </div>
        <span class="line van-hairline--right"></span>
        <div class="complete">
          <p class="number">100.00</p>
          <p class="text">收益</p>
        </div>
      </div>
    </div>
    <div class="visitor-analyse">
      <h6>访客概况</h6>
    </div>
    <div class="count-analyse">
      <div class="item">
        <p class="title">游览内容</p>
        <p class="count">
          <span class="number">500</span><span class="unit">次</span>
        </p>
      </div>
      <div class="item">
        <p class="title">游览产品</p>
        <p class="count">
          <span class="number">1500</span><span class="unit">次</span>
        </p>
      </div>
      <div class="item">
        <p class="title">加入购物车</p>
        <p class="count">
          <span class="number">101</span><span class="unit">次</span>
        </p>
      </div>
      <div class="item">
        <p class="title">购买次数</p>
        <p class="count">
          <span class="number">50</span><span class="unit">次</span>
        </p>
      </div>
    </div>
    <div class="detail-data">
      <div class="top">
        <h5 class="title">详细数据</h5>
        <p class="select-button" @click="openTypeSelect">
          <span>内容游览量</span><i class="fa fa-angle-down"></i>
        </p>
      </div>
    </div>
    <div class="content-list">
      <article-item
        v-for="item in articlesList"
        :key="item.color"
        :article-data="item"
      ></article-item>
    </div>
    <!--时间选择-->
    <van-popup v-model="showTime" position="bottom"
      ><van-picker
        :columns="timeColumns"
        show-toolbar
        @change="onChangeTime"
        @confirm="onChangeTime"
        @cancel="cancel"
    /></van-popup>
    <!--游览类型选择-->
    <van-popup v-model="showType" position="bottom">
      <van-picker
        :columns="typeColumns"
        show-toolbar
        @change="onChangeType"
        @confirm="onChangeType"
        @cancel="cancel"
    /></van-popup></div
></template>
<script>
import ArticleItem from "@/components/ArticleItem/";
export default {
  components: { ArticleItem },
  data() {
    return {
      articlesList: [
        {
          title: "曾经苍海难为水，除去巫山不是云。",
          color: "#5334f4",
          count: 500
        },
        { title: "这一次我为苍生", color: "#4bd964", count: 208 },
        { title: "那一世-《仓央嘉措》", color: "#fdcf05", count: 179 },
        {
          title: "Although you can't change the past,the future can be.",
          color: "#ff8200",
          count: 89
        },
        { title: "Sorry，All the period .", color: "#5149aff", count: 32 }
      ],
      showTime: false,
      showType: false,
      timeColumns: ["一周", "半年", "一年", "两年", "全部"],
      typeColumns: ["访客总量", "购买总量", "转发总量", "分享总量"]
    };
  },
  methods: {
    onChangeTime: function(picker, index) {
      console.log(`当前索引：${index}`);
    },
    onChangeType: function(picker, index) {
      console.log(`当前索引：${index}`);
    },
    openTimeSelect: function() {
      this.showTime = true;
    },
    openTypeSelect: function() {
      this.showType = true;
    },
    cancel: function() {
      this.showTime = false;
      this.showType = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.analyse {
  width: 100%;
  height: 100%;
  overflow: auto;
  background: #f4f7f9;
  .overview-container {
    height: 5.1rem;
    width: 100%;
    position: relative;
    overflow: hidden;
    background: linear-gradient(
      to top left,
      rgba(102, 218, 243, 1),
      rgb(98, 135, 252)
    );
    .select-button {
      width: 1.52rem;
      height: 0.6rem;
      font-size: 0.32rem;
      background: #97d9fa;
      line-height: 0.6rem;
      position: absolute;
      font-weight: bold;
      top: 0.55rem;
      right: 0.6rem;
      color: #fff;
      border-radius: 0.4rem;
      border: 2px solid #b3f8ff;
      cursor: pointer;
      i.fa.fa-angle-down {
        padding-left: 0.1rem;
        font-weight: bolder;
      }
    }
    .target {
      width: 100%;
      margin-top: 1.5rem;
      color: #fff;
      text-align: center;
      margin-bottom: 0.26rem;
      h4 {
        font-size: 0.76rem;
        font-weight: 500;
      }
      p {
        font-size: 0.4rem;
        margin-top: -0.12rem;
      }
    }
    .scale-box {
      width: 100%;
      height: 1.8rem;
      margin-top: 0.15rem;
      padding-top: 0.15rem;
      padding-bottom: 0.15rem;
      display: flex;
      flex-direction: row;
      .line {
        display: inline-block;
        border-right: 1px solid #fff;
        height: 0.75rem;
        margin-top: 0.4rem;
        overflow: hidden;
      }
      .complete {
        flex: 1;
        color: #fff;
        .number {
          font-size: 0.6rem;
        }
        .text {
          font-size: 0.4rem;
        }
      }
    }
  }
  .visitor-analyse {
    width: 92%;
    margin-left: 4%;
    margin-top: 0.4rem;
    height: 4.4rem;
    background: #fff;
    border-radius: 0.22rem;
    padding: 0.33rem 0.38rem;
    box-sizing: border-box;
    h6 {
      font-size: 0.4rem;
      text-align: left;
      font-weight: 400;
      color: #4c4c4c;
    }
  }
  .count-analyse {
    width: 100%;
    height: 5.54rem;
    box-sizing: border-box;
    padding: 0.4rem;
    overflow: hidden;
    .item {
      font-size: 0;
      &:nth-child(2n) {
        margin-left: 4%;
      }
      width: 48%;
      height: 2.2rem;
      background: #fff;
      display: inline-block;
      border-radius: 0.18rem;
      overflow: hidden;
      padding: 0.35rem;
      box-sizing: border-box;
      .title {
        font-size: 0.35rem;
        text-align: left;
        color: #c7c7c7;
      }
      .count {
        margin-top: 0.15rem;
        text-align: left;
        .number {
          font-size: 0.7rem;
        }
        .unit {
          font-size: 0.5rem;
        }
      }
    }
  }
  .detail-data {
    width: 92%;
    margin-left: 4%;
    height: 6rem;
    background: #fff;
    border-top-right-radius: 0.2rem;
    border-top-left-radius: 0.2rem;
    padding: 0.35rem;
    box-sizing: border-box;
    .top {
      width: 100%;
      height: 1rem;
      overflow: hidden;
      .title {
        width: 2rem;
        float: left;
        font-size: 0.42rem;
        text-align: left;
        font-weight: 400;
        color: #4b4b4b;
      }
      .select-button {
        color: #9fc6ec;
        font-size: 0.35rem;
        float: right;
        text-align: right;
        i.fa.fa.fa-angle-down {
          padding-left: 0.1rem;
          font-size: 0.5rem;
          vertical-align: top;
        }
      }
    }
  }
  .content-list {
    width: 92%;
    height: auto;
    padding-bottom: 10px;
    margin-left: 4%;
  }
}
</style>
