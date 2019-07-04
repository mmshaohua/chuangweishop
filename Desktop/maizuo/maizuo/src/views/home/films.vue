<template>
  <div class="page-home-films">
    <div class="city-fixed" @click="handleGoCity">
      <!--
          curCityInfo 可能在初次渲染的时候，ajax 请求还没有完成，导致得到 undefined 。再导致 。name 报错
      -->
      <span>{{ curCityInfo && curCityInfo.name }}</span>
      <i class="iconfont icon-down"></i>
    </div>
    <van-list
      ref="myBox"
      v-model="filmLoading"
      @load="getFilmList"
      :finished="isFinished"
      finished-text="别拉了"
    >
      <CarousMap></CarousMap>
      <van-tabs v-model="curFilmType" title-active-color="red" line-width="114px" sticky>
        <van-tab title="正在热映">
          <Filmlist filmType="nowPlaying" :list="filmList" />
        </van-tab>
        <van-tab title="即将上映">
          <Filmlist filmType="comingsoon" :list="filmList" />
        </van-tab>
      </van-tabs>
    </van-list>
  </div>
</template>
<script>
import Vue from "vue";
import { Tab, Tabs, Toast, List } from "vant";
Vue.use(Tab)
  .use(Tabs)
  .use(Toast)
  .use(List);
import CarousMap from "@/components/carousMap/carousMap";
import Filmlist from "@/components/Filmlist";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "films",
  components: {
    CarousMap,
    Filmlist
  },

  computed: {
    ...mapState("film", ["filmList"]),
    ...mapGetters("film", ["isFinished"]),
    ...mapGetters("city", ["curCityInfo"]),
    curFilmType: {
      get() {
        return this.$store.state.film.curFilmType;
      },

      set(value) {
        this.$store.commit({
          type: "film/setCurFilmType",
          filmType: value
        });
      }
    },

    filmLoading: {
      get() {
        return this.$store.state.film.filmLoading;
      },

      set(value) {
        this.$store.commit({
          type: "film/setFilmLoading",
          filmType: value
        });
      }
    }
  },

  watch: {
    curFilmType(newVal, oldVal) {
      // 当 curFilmType 发生变化了，这是重新发送请求
      this.$refs.myBox.$el.scrollTop = 0;
      this.getFilmList(true);
    }
  },
  methods: {
    ...mapActions("film", ["getFilmList"]),
    handleGoCity() {
      this.$router.push("/city");
    }
  }
};
</script>
<style lang="scss">
.city-fixed {
  position: absolute;
  top: 18px;
  left: 7px;
  color: #fff;
  z-index: 10;
  font-size: 13px;
  background: rgba(0, 0, 0, 0.2);
  height: 30px;
  line-height: 30px;
  border-radius: 15px;
  text-align: center;
  padding: 0 5px;
  i {
    font-size: 14px;
  }
}
</style>

