<template>
  <div class="header">
    <div>
      <img src="../../assets/favicon.ico" width="28" height="28" />
      <router-link to="/index">首页</router-link>
    </div>
    <router-link to="/table">表格数据</router-link>
    <router-link to="/chart">图表大屏</router-link>
    <router-link to="/editor">代码编辑</router-link>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 8vh;
  padding-top: 2%;
  padding-bottom: 4%;
  white-space: nowrap;
  display: flex;
  justify-content: space-evenly;
  box-sizing: border-box;
  border-bottom: .1px solid gray;
}

a {
  text-decoration: none;
  color: rgb(102, 103, 171);
  font-size: 30px;
}
</style>