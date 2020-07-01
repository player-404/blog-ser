<template>
  <div id="app">
    <div class="nav">
      <NavComponent />
    </div>
    <router-view />
  </div>
</template>
<script>
import NavComponent from "./components/nav";

export default {
  name: "app",
  components: {
    NavComponent
  }
};
</script>
<style lang="less">
#app {
  margin: 0;
  padding: 0;
}
</style>
