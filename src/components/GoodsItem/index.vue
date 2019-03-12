<template>
  <div class="goods-item">
    <div class="goods-container">
      <img
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552393731380&di=ef2830247288ed97c75084bc40d7ff62&imgtype=0&src=http%3A%2F%2Fm.360buyimg.com%2Fmobilecms%2Fs750x750_jfs%2Ft9382%2F255%2F419174577%2F214784%2Ff9026ac4%2F59aa5039N3b06738b.jpg%2521q80.jpg"
        alt=""
      />
      <p class="goods-name">
        Innisfree GreenTeaBalancing Cream Innisfree GreenTeaBalancing Cream
      </p>
      <p class="price">$18.00</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "GoodsItem"
};
</script>
<style lang="scss" scoped>
.goods-item {
  box-sizing: border-box;
  height: 5.8rem;
  width: 4.7rem;
  overflow: hidden;
  padding: 0.3rem;
  .goods-container {
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: 0.1rem;
    overflow: hidden;
    box-shadow: 5px 5px 10px #1d1c1c1c;
    padding: 0.4rem 0.6rem;
    box-sizing: border-box;
    img {
      width: 2.9rem;
      height: 2.9rem;
    }
    .goods-name {
      font-size: 0.3rem;
      word-break: break-all;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    .price {
      color: #941926;
      font-size: 0.4rem;
      margin-top: 0.2rem;
    }
  }
}
</style>
