<template>
  <van-tabbar v-model="active" @change="changeTab">
    <van-tabbar-item
      v-for="item in tabLists"
      :key="item.title"
      :icon="item.icon"
    >
      {{ item.title }}</van-tabbar-item
    >
  </van-tabbar>
</template>

<script>
export default {
  name: "AppFooter",
  computed: {
    active: {
      get: function() {
        let filterResult = this.tabLists.filter(
          item => item.link === this.$route.path
        );
        return filterResult[0].order || 0;
      },
      set: function() {
        let filterResult = this.tabLists.filter(
          item => item.link === this.$route.path
        );
        return filterResult[0].order || 0;
      }
    }
  },
  data() {
    return {
      tabLists: [
        {
          icon: "newspaper-o",
          title: "素材",
          link: "/main/material",
          order: 0
        },
        {
          icon: "chart-trending-o",
          title: "统计",
          link: "/main/analyse",
          order: 1
        },
        {
          icon: "goods-collect-o",
          title: "商城",
          link: "/main/shop",
          order: 2
        },
        { icon: "friends-o", title: "访客", link: "/main/visitor", order: 3 }
      ]
    };
  },
  methods: {
    changeTab(index) {
      // 判断是否登录
      let path = this.tabLists[index].link;
      this.$router.push(path);
    }
  }
};
</script>

<style lang="scss" scoped>
.van-tabbar-item__icon .van-icon {
  font-size: 0.8rem !important;
}
</style>
