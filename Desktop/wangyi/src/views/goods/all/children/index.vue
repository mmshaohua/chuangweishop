<template>
  <div class="wy_son_tabbar">
    <ul class="wy_son_tabbar_ul">
      <router-link
        v-for="item in tabs"
        :key="item.id"
        :to="item.to"
        tag="li"
        class="wy_son_tabbar_li"
      >
        <i class="iconfont" :class="item.icon"></i>
        <span>{{item.name}}</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        {
          id: 1,
          name: "首页",
          icon: "icon-home",
          to: "/home"
        },
        {
          id: 2,
          name: "分类",
          icon: "icon-guizi",
          to: "/classify"
        },
        {
          id: 3,
          name: "识物",
          icon: "icon-tupian",
          to: "/general"
        },
        {
          id: 4,
          name: "购物车",
          icon: "icon-shop",
          to: "/cart"
        },
        {
          id: 5,
          name: "个人",
          icon: "icon-gerenzhongxin",
          to: "/mine"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "~@/assets/styles/common/px2rem.scss";
.wy_son_tabbar {
  .router-link-active {
    color: orangered;
  }
  .icon-tupian {
    font-size: 17px;
  }
  position: absolute;
  left: 0;
  bottom: 0px;
  width: 100%;

  &_ul {
    display: flex;
    flex: 1;
    li {
      display: flex;
      flex: 1;
      height: 44px;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      flex-direction: column;
      text-align: center;
      i {
        margin-bottom: 3px;
      }
    }
  }
}
</style>

