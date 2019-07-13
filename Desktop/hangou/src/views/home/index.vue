<template>
  <div class="page-home">
    <router-view></router-view>
    <Tabbar
      :tabs="[
      {name:'首页',icon:'icon-shouye',to:'/wap'},
      {name:'发现',icon:'icon-shop',to:'/specital'},
      {name:'我的商城',icon:'icon-wode',to:'/member'}
    ]"
    />
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar/index.vue";
export default {
  name: "home",
  components: {
    Tabbar
  }
};
</script>

<style lang="scss">
.page-home {
  display: flex;
  flex-direction: column;
  height: 100%;
  > div:first-child {
    flex: 1;
    overflow: auto;
  }
}
</style>

