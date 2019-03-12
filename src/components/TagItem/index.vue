<template>
  <div
    :class="[round ? '' : 'circle', 'line-tag']"
    :style="{
      background: backgroundColor,
      color,
      border: `${borderWidth} ${borderType} ${borderColor}`
    }"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "tag",
  props: {
    round: {
      type: Boolean,
      default: true
    },
    borderWidth: {
      type: String,
      default: "1px"
    },
    border: {
      type: Boolean,
      default: false
    },
    borderColor: {
      type: String,
      default: "linear-gradient(to top left, #66daf3 23%, #6287fc)"
    },
    borderType: {
      type: String,
      default: "solid"
    },
    backgroundColor: {
      type: String,
      default: "linear-gradient(to top left, #66daf3 23%, #6287fc)"
    },
    color: {
      type: String,
      default: "#fff"
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.line-tag {
  overflow: hidden;
  color: #fff;
  width: 1.95rem;
  height: 0.75rem;
  font-size: 0.34rem;
  background: linear-gradient(to top left, #66daf3 23%, #6287fc);
  border-radius: 0.4rem;
  line-height: 0.84rem;
  text-align: center;
  letter-spacing: 0.03rem;
  display: inline-block;
  margin-left: 0.2rem;
  i {
    font-size: 0.5rem;
    margin-left: 0.1rem;
  }
  &:first-child {
    margin-left: 0.12rem;
  }
  &.circle {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
  }
}
</style>
