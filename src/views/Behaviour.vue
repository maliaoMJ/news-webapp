<template>
  <div class="behaviour">
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
              <light-timeline :items="list[0].items"></light-timeline>
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
              <light-timeline :items="list[0].items"></light-timeline>
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
              <light-timeline :items="list[0].items"></light-timeline>
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
              <light-timeline :items="list[0].items"></light-timeline>
            </van-list>
          </van-pull-refresh>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Behaviour",
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
          list.items.push({
            type: "circle",
            tag: "5小时前",
            htmlMode: true,
            content: `<div class="article-item">
                        <div class="article-content">
                            <p class="text">该样式只能适用于当前组件元素。通过该属性，可以使得组件之间的样式不互相污染。如果一个项目中的所有style标签全部加上了scoped，相当于实现了样式的模块化。</p>
                            <img src="http://img0.imgtn.bdimg.com/it/u=4009693006,1011871230&fm=26&gp=0.jpg" alt="">
                        </div>
                        <div class="time">03/27/2018</div>
                      </div>`
          });
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
.behaviour {
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
