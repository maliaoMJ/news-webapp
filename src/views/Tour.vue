<template>
  <div class="tour">
    <div class="article-container">
      <ContentItem></ContentItem>
    </div>
    <div class="user-list-container">
      <div class="user-list-wrapper">
        <van-pull-refresh v-model="list[0].refreshing" @refresh="onRefresh(0)">
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
              <user-item :isMargin="true"
                ><span slot="history" class="history"
                  >1分钟前游览过</span
                ></user-item
              >
            </div>
          </van-list>
        </van-pull-refresh>
      </div>
    </div>
  </div>
</template>
<script>
import ContentItem from "@/components/ContentItem/";
import UserItem from "@/components/UserItem/";
export default {
  name: "Tour",
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
  }
};
</script>
<style lang="scss" scoped>
.tour {
  width: 100%;
  height: 100%;
  background: #f2f5f5;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .article-container {
    width: 108%;
    height: 4rem;
    background: #fff;
    overflow: hidden;
    margin-left: -5%;
  }
  .user-list-container {
    flex: 1;
    display: block;
    overflow: hidden;
    .user-list-wrapper {
      width: 100%;
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      padding-top: 0.24rem;
    }
  }
}
</style>
