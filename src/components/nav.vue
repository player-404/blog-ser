<template>
  <div id="nav">
    <div class="left"></div>
    <div class="center"></div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: "NavComponent"
};
</script>

<style lang="less">
#nav {
  display: flex;
  justify-content: space-around;
  height: 40px;
  box-sizing: border-box;
  padding: 20px;
  .left {
    flex-grow: 1;
    background-color: red;
    height: 100%;
  }
  .center {
    flex-grow: 2;
    background-color: blanchedalmond;
  }
  .right {
    flex-flow: 1;
    background-color: yellow;
  }
}
</style>