<template>
  <div class="User">
    <div class="top-box">
      <div class="background-box"></div>
      <div class="modify-box">
        <van-icon name="edit" />
      </div>
      <div class="user-info-box">
        <img
          class="avatar"
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1552373019&di=1d76acc486f8451321bc6cdc25c8d2eb&src=http://images.liqucn.com/img/h21/h61/img_localize_7209c0ede2a282b3a8b9c8d2c89c5f46_400x400.png"
          alt=""
        />
        <div class="base-info">
          <span class="username">李长彤</span>
          <span class="gender venus"><i class="fa fa-venus"></i>&nbsp;25</span>
        </div>
        <div class="city">北京 朝阳区</div>
        <div class="iphone-number">13213832373</div>
        <div class="tags-box">
          <tag-item :round="true">健身达人</tag-item>
          <tag-item :round="true">美妆博主</tag-item>
          <tag-item :round="true">爱逛街</tag-item>
          <tag-item :round="false"><i class="fa fa-angle-right"></i></tag-item>
        </div>
      </div>
    </div>
    <div class="avocation-tags-box">
      <h6 class="title">兴趣标签</h6>
      <router-link class="link" to="/tags/"
        ><i class="fa fa-angle-right"></i
      ></router-link>
      <div class="tag-box">
        <tag-item
          :round="true"
          color="#9a9a9a"
          backgroundColor="#fff"
          borderColor="#9a9a9a"
          borderWidth="1px"
          width="auto"
          paddingLeft=".2rem"
          paddingRight=".2rem"
          >财经&nbsp;2</tag-item
        >
        <tag-item
          :round="true"
          color="#9a9a9a"
          backgroundColor="#fff"
          borderColor="#9a9a9a"
          borderWidth="1px"
          width="auto"
          paddingLeft=".2rem"
          paddingRight=".2rem"
          >八卦&nbsp;2</tag-item
        >
        <tag-item
          :round="true"
          color="#9a9a9a"
          backgroundColor="#fff"
          borderColor="#9a9a9a"
          borderWidth="1px"
          width="auto"
          paddingLeft=".2rem"
          paddingRight=".2rem"
          >体育&nbsp;2</tag-item
        >
        <tag-item
          :round="true"
          color="#9a9a9a"
          backgroundColor="#fff"
          borderColor="#9a9a9a"
          borderWidth="1px"
          width="auto"
          paddingLeft=".2rem"
          paddingRight=".2rem"
          >美妆&nbsp;22</tag-item
        >
        <tag-item
          :round="true"
          color="#9a9a9a"
          backgroundColor="#fff"
          borderColor="#9a9a9a"
          borderWidth="1px"
          width="auto"
          paddingLeft=".2rem"
          paddingRight=".2rem"
          >教育&nbsp;1</tag-item
        >
        <tag-item
          :round="true"
          color="#9a9a9a"
          backgroundColor="#fff"
          borderColor="#9a9a9a"
          borderWidth="1px"
          width="auto"
          paddingLeft=".2rem"
          paddingRight=".2rem"
          >娱乐新闻3</tag-item
        >
        <tag-item
          :round="true"
          color="#9a9a9a"
          backgroundColor="#fff"
          borderColor="#9a9a9a"
          borderWidth="1px"
          width="auto"
          paddingLeft=".2rem"
          paddingRight=".2rem"
          >美妆博主&nbsp;44</tag-item
        >
        <tag-item
          :round="true"
          color="#9a9a9a"
          backgroundColor="#fff"
          borderColor="#9a9a9a"
          borderWidth="1px"
          width="auto"
          paddingLeft=".2rem"
          paddingRight=".2rem"
          >爱逛街&nbsp;23</tag-item
        >
        <tag-item
          :round="false"
          color="#9a9a9a"
          backgroundColor="#fff"
          borderColor="#9a9a9a"
          borderWidth="1px"
          paddingRight="0rem"
          paddingLeft="0rem"
          ><i class="van-icon van-icon-ellipsis"></i
        ></tag-item>
      </div>
    </div>
    <div class="visitor-behaviour">
      <h6 class="title">访客行为</h6>
      <div class="total-box">
        <div class="item">
          <van-icon name="description" color="#4088ff" />
          <p class="sub-title">游览内容</p>
          <p class="number">10次</p>
        </div>
        <div class="item">
          <van-icon name="point-gift-o" color="#4088ff" />
          <p class="sub-title">游览商品</p>
          <p class="number">110次</p>
        </div>
        <div class="item">
          <van-icon name="shopping-cart-o" color="#4088ff" />
          <p class="sub-title">加入购物车</p>
          <p class="number">2次</p>
        </div>
        <div class="item">
          <van-icon name="gold-coin-o" color="#4088ff" />
          <p class="sub-title">购买商品</p>
          <p class="number">1次</p>
        </div>
      </div>
    </div>
    <div class="recommend-goods">
      <h6 class="title">猜Ta喜欢</h6>
      <div class="goods-box">
        <goods-item v-for="item in 12" :key="item"></goods-item>
      </div>
    </div>
  </div>
</template>
<script>
import TagItem from "@/components/TagItem/";
import GoodsItem from "@/components/GoodsItem/";
export default {
  name: "User",
  components: {
    TagItem,
    GoodsItem
  }
};
</script>

<style lang="scss" scoped>
.User {
  width: 100%;
  height: 100%;
  background: #f6f9f9;
  position: relative;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch; /* 用于 ios5+ */
  .top-box {
    width: 100%;
    height: 7.9rem;
    position: relative;
    overflow: hidden;
    .background-box {
      width: 130%;
      height: 130%;
      border-radius: 100%;
      position: absolute;
      top: -60%;
      left: -15%;
      z-index: 1;
      background: linear-gradient(to top left, #66daf3 23%, #6287fc);
    }
    .modify-box {
      width: 100%;
      height: 1rem;
      position: absolute;
      top: 0.4rem;
      z-index: 2;
      text-align: right;
      color: #fff;
      font-size: 0.65rem;
      line-height: 1.2rem;
      box-sizing: border-box;
      padding-right: 0.4rem;
    }
    .user-info-box {
      width: 78%;
      height: 4.3rem;
      background: #fff;
      border-radius: 0.3rem;
      position: absolute;
      top: 2.9rem;
      left: 11%;
      z-index: 4;
      box-shadow: 0 0 50px rgba(35, 34, 34, 0.06);
      .avatar {
        display: block;
        width: 2.6rem;
        height: 2.6rem;
        border-radius: 100%;
        position: absolute;
        top: -1.6rem;
        left: 50%;
        margin-left: -1.3rem;
        box-shadow: 0 0 20px rgba(35, 34, 34, 0.19);
      }
      .city {
        width: 100%;
        height: auto;
        position: absolute;
        top: 1.8rem;
        z-index: 5;
        font-size: 0.39rem;
        color: #9d9d9d;
      }
      .iphone-number {
        width: 100%;
        height: auto;
        position: absolute;
        top: 2.4rem;
        z-index: 5;
        font-size: 0.37rem;
        color: #9d9d9d;
      }
      .tags-box {
        height: 1.3rem;
        width: 100%;
        position: absolute;
        top: 3.1rem;
        z-index: 7;
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;
        margin: 0;
        padding: 0;
        justify-content: center;
        align-content: space-evenly;
        font-size: 0;
        i.fa.fa-angle-right {
        }
      }
      .base-info {
        width: 100%;
        height: 0.8rem;
        position: relative;
        top: 1.1rem;
        text-align: center;
        padding: 0;
        margin: 0;
        line-height: 0.4rem;
        overflow: hidden;
        .username {
          font-size: 0.4rem;
          padding-left: 0.7rem;
          padding-right: 0.1rem;
          vertical-align: middle;
        }
        .gender {
          font-size: 0.25rem;
          background: #fe67cd;
          border-radius: 0.5rem;
          padding-left: 0.1rem;
          padding-right: 0.1rem;
          padding-top: 2px;
          color: #fff;
          vertical-align: middle;
          i.fa.fa-venus {
            transform: rotate(45deg);
          }
        }
        /*.gender {*/
        /*font-size: 0.3rem;*/
        /*i.fa {*/
        /*border-radius: 1rem;*/
        /*display: block;*/
        /*width: 1rem;*/
        /*height: 0.5rem;*/
        /*margin-left: 0.1rem;*/
        /*font-size: 0.4rem;*/
        /*&.venus {*/
        /*background: #fe67cd;*/
        /*}*/
        /*&.mars {*/
        /*background: deepskyblue;*/
        /*}*/
        /*i.fa-venus {*/
        /*transform: rotate(45deg);*/
        /*vertical-align: middle;*/
        /*}*/
        /*i.fa-mars {*/
        /*color: #fff;*/
        /*}*/
        /*}*/
        /*}*/
      }
    }
  }
  .avocation-tags-box {
    width: 100%;
    height: 4rem;
    background: #fff;
    position: relative;
    overflow: hidden;
    h6.title {
      text-align: left;
      padding-left: 0.6rem;
      font-size: 0.4rem;
      padding-top: 0.2rem;
      font-weight: 400;
      width: 50%;
      display: block;
      float: left;
    }
    .link {
      display: block;
      float: right;
      color: #ccc;
      padding-right: 0.4rem;
      font-size: 0.7rem;
    }
    .tag-box {
      position: absolute;
      width: 100%;
      min-height: 2.8rem;
      top: 1rem;
      display: flex;
      flex-wrap: wrap;
      margin: 0;
      padding: 0;
      justify-content: center;
      align-content: space-evenly;
      i.van-icon-ellipsis {
        font-size: 0.5rem;
        /* margin-left: 0.1rem; */
        line-height: 0.8rem;
        padding-right: 0;
      }
    }
  }
  .visitor-behaviour {
    width: 100%;
    height: 3.5rem;
    background: #fff;
    margin-top: 0.6rem;
    margin-bottom: 0.6rem;
    h6.title {
      text-align: left;
      padding-left: 0.6rem;
      font-size: 0.4rem;
      padding-top: 0.2rem;
      font-weight: 400;
    }
    .total-box {
      width: 100%;
      height: 2.5rem;
      display: flex;
      flex-direction: row;
      .item {
        flex: 1;
        display: flex;
        flex-direction: column;
        font-size: 0.4rem;
        justify-content: center;
        align-items: center;
        i {
          font-size: 0.68rem;
        }
        .sub-title {
          font-size: 0.35rem;
          padding-top: 0.2rem;
          padding-bottom: 0.15rem;
          color: #8c8c8c;
        }
      }
    }
  }
  .recommend-goods {
    width: 100%;
    height: auto;
    padding-bottom: 30px;
    .title {
      padding-top: 0;
      font-size: 0.4rem;
      font-weight: 400;
      letter-spacing: 0.02rem;
      text-align: left;
      padding-left: 0.6rem;
      padding-bottom: 0.3rem;
    }
    .goods-box {
      box-sizing: border-box;
      padding-left: 0.3rem;
      padding-right: 0.3rem;
      width: 100%;
      height: auto;
      font-size: 0;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      /*.goods-item {*/
      /*display: inline-block;*/
      /*float: left;*/
      /*margin-bottom: 0.3rem;*/
      /*&:nth-child(2n + 2) {*/
      /*margin-left: 0.6rem;*/
      /*}*/
      /*}*/
    }
  }
}
</style>
