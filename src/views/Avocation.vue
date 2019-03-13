<template>
  <div class="avocation">
    <div class="avocation-tags-box">
      <h6 class="title">兴趣标签</h6>
      <div class="tag-box">
        <tag-item
          :round="true"
          color="#fff"
          backgroundColor="linear-gradient(to left, #f3dc70, #ffa316)"
          borderColor="#9a9a9a"
          borderWidth="0px"
          >财经&nbsp;2</tag-item
        >
        <tag-item
          :round="true"
          color="#fff"
          backgroundColor="linear-gradient(to left, #f3dc70, #ffa316)"
          borderColor="#9a9a9a"
          borderWidth="0px"
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
          >娱乐新闻&nbsp;3</tag-item
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
          >美食&nbsp;5</tag-item
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
          :round="true"
          color="#9a9a9a"
          backgroundColor="#fff"
          borderColor="#9a9a9a"
          borderWidth="1px"
          width="auto"
          paddingLeft=".2rem"
          paddingRight=".2rem"
          >健身达人&nbsp;44</tag-item
        >
        <tag-item
          :round="false"
          color="#9a9a9a"
          backgroundColor="#fff"
          borderColor="#9a9a9a"
          borderWidth="1px"
          ><i class="van-icon van-icon-ellipsis"></i
        ></tag-item>
      </div>
    </div>
    <div class="content-box">
      <div class="list-wrapper">
        <van-pull-refresh v-model="list[0].refreshing" @refresh="onRefresh(0)">
          <van-list
            v-model="list[0].loading"
            :finished="list[0].finished"
            finished-text="加载已完成"
            @load="onLoad(0)"
          >
            <content-item
              v-for="item in list[0].items"
              :key="item"
              :title="item"
            >
              <span slot="sub">4分钟前游览过1次</span>
            </content-item>
          </van-list>
        </van-pull-refresh>
      </div>
    </div>
  </div>
</template>
<script>
import ContentItem from "@/components/ContentItem/";
import TagItem from "@/components/TagItem/";
export default {
  name: "home",
  components: {
    ContentItem,
    TagItem
  },
  data() {
    return {
      active: 1,
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
.avocation {
  width: 100%;
  height: 100%;
  background: #f1f4f4;
  display: flex;
  flex-direction: column;
  .avocation-tags-box {
    width: 100%;
    height: 3.8rem;
    background: #fff;
    position: relative;
    overflow: hidden;
    h6.title {
      text-align: left;
      padding-left: 0.6rem;
      font-size: 0.4rem;
      padding-top: 0.5rem;
      font-weight: 400;
      width: 50%;
      display: block;
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
        margin-left: -0.1rem;
      }
    }
  }
  .content-box {
    flex: 1;
    display: block;
    overflow: hidden;
    .list-wrapper {
      width: 100%;
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
    }
  }
}
</style>
