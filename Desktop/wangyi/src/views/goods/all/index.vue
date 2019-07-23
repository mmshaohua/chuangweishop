<template>
  <div>
    <router-view></router-view>
    <div class="wy_pages_All">
      <tabbar />
    </div>
  </div>
</template>

<script>
import tabbar from "./children/index";
export default {
  name: "all",
  components: {
    tabbar
  }
};
</script>

<style>
</style>
