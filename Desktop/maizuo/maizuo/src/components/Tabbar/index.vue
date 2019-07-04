<template>
  <div class="mz-tabbar">
    <ul class="mz-tabbar_ul">
      <li class="mz-tabbar_li" v-for="(tab,index) in tabs" :key="index">
        <router-link :to="tab.to" active-class="active">
          <i class="iconfont" :class="tab.icon"></i>
          <span>{{ tab.name }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Tabbar",
  props: {
    tabs: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/styles/common/px2rem.scss";
@import "../../assets/styles/common/mixins.scss";
.mz-tabbar {
  @include border-top;
  @include border-bottom;
  //   height: px2rem(50);
  background-color: #fff;
  &_ul {
    display: flex;
    height: 100%;
    // margin-top: 100px;
  }
  &_li {
    flex: 1;
    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      height: 100%;
      font-size: 12px;
      color: #797d82;
      .iconfont {
        font-size: 24px;
        padding-top: 8px;
        padding-bottom: 4px;
      }
      &.active {
        color: #ff5f16;
      }
    }
  }
}
</style>

