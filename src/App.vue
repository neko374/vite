<template>
  <router-view></router-view>
</template>
<script>
import * as echarts from "echarts";
import { provide } from "vue";

export default {
  name: "App",
  setup() {
    provide("echarts", echarts);
  },
};
</script>