<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar></tab-bar>
  </div>
</template>
<script>
import TabBar from "./components/Tab-bar";
export default {
  components: {
    [TabBar.name]: TabBar
  }
};
</script>
