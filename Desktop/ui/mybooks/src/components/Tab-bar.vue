<template>
  <nav class="tab-bar border-top">
    <template v-for="tabItem in tabData">
      <router-link class="tab-item" :key="tabItem.id" :to="tabItem.path">
        <span>{{tabItem.name}}</span>
      </router-link>
    </template>
  </nav>
</template>

<script>
export default {
  name: "tab-bar",
  data() {
    return {
      tabData: [
        { id: 1, name: "图表", path: "/home" },
        { id: 2, name: "明细", path: "/billing" },
        { id: 3, name: "我的", path: "/mine" }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.tab-bar {
  width: 100%;
  height: 49px;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  background: #fff;
  .router-link-active {
    color: red;
  }
  .tab-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
}
</style>
