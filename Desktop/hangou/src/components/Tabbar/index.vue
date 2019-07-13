<template>
  <div class="hg-tabbar">
    <ul class="hg-tabbar_ul">
      <li class="hg-tabbar_li" v-for="(item,index) in tabs" :key="index">
        <router-link :to="item.to" tag="div">
          <i class="iconfont" :class="item.icon"></i>
          <span>{{item.name}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import { constants } from "crypto";
export default {
  name: "Tabbar",
  props: {
    tabs: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  mounted() {
    axios({
      method: "get",
      url: "http://www.hangowa.com/mo_bile/index.php?act=index"
    }).then(res => {
      console.log(res);
    });
  }
};
</script>

<style lang="scss">
.hg-tabbar {
  &_ul {
    display: flex;
    li {
      background-color: #ccc;
      flex: 1;
      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .iconfont {
          font-size: 20px;
        }
        span {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
