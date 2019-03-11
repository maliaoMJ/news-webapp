<template>
  <div class="chart-item"><IEcharts :option="options" ref="charts" /></div>
</template>
<script>
import echarts from "vue-echarts";
export default {
  name: "ChartItem",
  props: {
    options: {
      type: Object,
      default: function() {
        return {
          color: ["#3398DB"],
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow"
            }
          },
          grid: {
            left: "0%",
            right: "0%",
            bottom: "0%",
            top: "15%",
            containLabel: true
          },
          xAxis: [
            {
              type: "category",
              data: ["Mon", "Tue", "Wed", "Thu", "Fri"],

              axisTick: {
                alignWithLabel: true
              },
              axisLabel: {
                textStyle: {
                  color: "#a6a6a6"
                }
              },

              axisLine: {
                lineStyle: {
                  color: "#eee",
                  width: 1 //这里是为了突出显示加上的
                }
              }
            }
          ],
          yAxis: [
            {
              type: "value",
              splitLine: {
                show: true,
                lineStyle: {
                  type: "dashed",
                  width: 1,
                  color: "#ddd"
                }
              },
              axisLine: {
                lineStyle: {
                  color: "#fff"
                }
              },

              axisLabel: {
                textStyle: {
                  color: "#a6a6a6"
                }
              }
            }
          ],
          series: [
            {
              name: "直接访问",
              type: "bar",
              barWidth: "15%",
              data: [380, 270, 100, 334, 260],
              itemStyle: {
                normal: {
                  barBorderRadius: [80, 80, 0, 0],
                  //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                  color: function(params) {
                    let colorList = [
                      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: "#7c71d5" },
                        { offset: 0.5, color: "#a06deb" },
                        { offset: 1, color: "#c76dda" }
                      ]),
                      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: "#f8a423" },
                        { offset: 1, color: "#ee6d27" }
                      ]),
                      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: "#eff14b" },
                        { offset: 1, color: "#fbe711" }
                      ]),
                      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: "#9fff58" },
                        { offset: 1, color: "#77dd4c" }
                      ]),
                      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: "#05d1fe" },
                        { offset: 1, color: "#149aff" }
                      ])
                    ];
                    return colorList[params.dataIndex];
                  }
                }
              }
            }
          ]
        };
      }
    }
  },
  data() {
    return {};
  },
  mounted() {
    // let that = this;
    // this.$nextTick(() => {
    //   window.onsize = function() {
    //     that.$refs.charts.resize();
    //   };
    // });
  }
};
</script>
<style lang="scss" scoped>
.chart-item {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .echarts {
    width: 100%;
    height: 100%;
  }
}
</style>
