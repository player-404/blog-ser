<template>
  <div id="app">
    <div class="test"></div>
    <router-view />
  </div>
</template>
<script>

export default {
  name: "app",
};
</script>
<style lang="less">
html, body{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-size: 14px;
}
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
}
</style>
