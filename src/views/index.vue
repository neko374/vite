<template>
  <div>
    <div id="chart1"></div>
    <router-link to="/table">表</router-link>
  </div>
</template>

<script>
import { inject, onMounted } from "vue";

export default {
  name: "index",
  data() {
    return {
      chart1: {},
    };
  },
  setup() {
    onMounted(() => {
      let myChart = inject("echarts").init(document.getElementById("chart1"));
      myChart.setOption({
        title: { text: "总用户量" },
        tooltip: {},
        xAxis: {
          data: ["12-3", "12-4", "12-5", "12-6", "12-7", "12-8"],
        },
        yAxis: {},
        series: [
          {
            name: "用户量",
            type: "line",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });
      window.onresize = function () {
        myChart.resize();
      };
    });
  },
  components: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
#chart1 {
  width: 600px;
  height: 300px;
}
</style>