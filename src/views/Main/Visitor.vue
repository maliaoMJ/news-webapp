<template>
  <div class="visitor">
    <van-tabs
      v-model="active"
      sticky
      animated
      swipeable
      color="#1989fa"
      :line-width="90"
      title-active-color="#1989fa"
    >
      <van-tab title="游览内容">
        <div class="materialContainer" name="default">
          <van-pull-refresh
            v-model="list[0].refreshing"
            @refresh="onRefresh(0)"
          >
            <van-list
              v-model="list[0].loading"
              :finished="list[0].finished"
              finished-text="加载已完成"
              @load="onLoad(0)"
            >
              <div
                v-for="item in list[0].items"
                :key="item"
                :title="item"
                class="wrapper-user-item"
              >
                <user-item :isMargin="false"></user-item>
              </div>
            </van-list>
          </van-pull-refresh>
        </div>
      </van-tab>
      <van-tab title="游览商品">
        <div class="materialContainer" name="default">
          <van-pull-refresh
            v-model="list[1].refreshing"
            @refresh="onRefresh(1)"
          >
            <van-list
              v-model="list[1].loading"
              :finished="list[1].finished"
              finished-text="加载已完成"
              @load="onLoad(1)"
            >
              <content-item
                v-for="item in list[1].items"
                :key="item"
                :title="item"
              ></content-item>
            </van-list>
          </van-pull-refresh>
        </div>
      </van-tab>
      <van-tab title="加入购物车">
        <div class="materialContainer" name="default">
          <van-pull-refresh
            v-model="list[2].refreshing"
            @refresh="onRefresh(2)"
          >
            <van-list
              v-model="list[2].loading"
              :finished="list[2].finished"
              finished-text="加载已完成"
              @load="onLoad(2)"
            >
              <content-item
                v-for="item in list[2].items"
                :key="item"
                :title="item"
              ></content-item>
            </van-list>
          </van-pull-refresh>
        </div>
      </van-tab>
      <van-tab title="购买商品">
        <div class="materialContainer" name="default">
          <van-pull-refresh
            v-model="list[3].refreshing"
            @refresh="onRefresh(3)"
          >
            <van-list
              v-model="list[3].loading"
              :finished="list[3].finished"
              finished-text="加载已完成"
              @load="onLoad(3)"
            >
              <content-item
                v-for="item in list[3].items"
                :key="item"
                :title="item"
              ></content-item>
            </van-list>
          </van-pull-refresh>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
// @ is an alias to /src
import ContentItem from "@/components/ContentItem/";
import UserItem from "@/components/UserItem/";
export default {
  name: "visitor",
  components: {
    ContentItem,
    UserItem
  },
  data() {
    return {
      active: 0,
      list: [
        {
          items: [],
          refreshing: false,
          loading: false,
          error: false,
          finished: false
        },
        {
          items: [],
          refreshing: false,
          loading: false,
          error: false,
          finished: false
        },
        {
          items: [],
          refreshing: false,
          loading: false,
          error: false,
          finished: false
        },
        {
          items: [],
          refreshing: false,
          loading: false,
          error: false,
          finished: false
        }
      ]
    };
  },
  methods: {
    onLoad(index) {
      const list = this.list[index];
      setTimeout(() => {
        for (let i = 0; i < 20; i++) {
          const text = list.items.length + 1;
          list.items.push(text < 10 ? "0" + text : text);
        }
        list.loading = false;
        // show error info in second demo
        if (index === 1 && list.items.length === 20 && !list.error) {
          list.error = true;
        } else {
          list.error = false;
        }
        if (list.items.length >= 1000) {
          list.finished = true;
        }
      }, 500);
    },
    onRefresh(index) {
      const list = this.list[index];
      setTimeout(() => {
        list.items = [];
        this.onLoad(0);
        list.error = false;
        list.finished = false;
        list.refreshing = false;
        window.scrollTo(0, 20);
      }, 1000);
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.visitor {
  width: 100%;
  height: 100%;
  display: flex;
  .wrapper-user-item {
    width: 100%;
    background: #fff;
    /*padding-bottom:.1rem;*/
    padding-bottom: 0.15rem;
    &:first-child {
      margin-top: 0.3rem;
      padding-top: 0.3rem;
    }
  }
  .van-tabs.van-tabs--line {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .van-tabs__wrap.van-hairline--top-bottom {
    display: block;
    width: 100%;
    height: auto;
  }
  .materialContainer {
    width: 100%;
    height: 100%;
    background: #f7f7f7;
    overflow: auto;
    .list {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
