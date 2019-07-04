<template>
  <div class="page-home-cinemas">
    <div class="page-home-cinemas_head">
      <div class="page-home-cinemas_headLeft">
        <span @click="handleToCity">深圳</span>
        <i class="iconfont icon-down"></i>
      </div>

      <div class="page-home-cinemas_headCenter">影院</div>
      <div class="page-home-cinemas_headRight">
        <i class="iconfont icon-search"></i>
      </div>
    </div>
    <div class="page-home-cinemas_fixheadcontent">
      <label>
        全城
        <i class="iconfont icon-down"></i>
      </label>
      <label>
        app订票
        <i class="iconfont icon-down"></i>
      </label>
      <label>
        最近去过
        <i class="iconfont icon-down"></i>
      </label>
    </div>
    <div class="films_layer"></div>
    <div class="cityFilms_content">
      <ul>
        <router-link
          :to="{name:'film',params:{filmId:item.filmId}}"
          tag="li"
          v-for="item in citySiteList"
          :key="item.cinemaId"
        >
          <div class="films_site">
            <span>{{ item.name }}</span>
            <span>{{ item.address }}</span>
          </div>
          <div class="price_site">
            <div>
              <span>
                <i>￥</i>
                <span>{{item.lowPrice/100}}</span>
              </span>
              <span>
                <i>起</i>
              </span>
            </div>
            <div>
              <span>距离位置</span>
            </div>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "cinemas",
  computed: {
    ...mapState("citySite", ["citySiteList"])
  },
  methods: {
    ...mapActions("citySite", ["getCitySiteList"]),
    handleToCity() {
      this.$router.push("/city");
    }
  },
  created() {
    this.getCitySiteList();
  }
};
</script>

<style lang="scss">
@import "~@/assets/styles/common/mixins.scss";
.page-home-cinemas {
  font-size: 16px;
  &_head {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 44px;
    line-height: 44px;
    overflow: hidden;
    margin: 0;
    padding: 0;
    z-index: 3000;
    background-color: #fff;
    display: flex;
  }
  &_headLeft {
    min-width: 15%;
    justify-content: flex-start;
    align-items: center;
    margin-left: 15px;
  }

  &_headCenter {
    text-align: center;
    font-size: 17px;
    color: #191a1b;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &_headRight {
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    i {
      text-align: right;
    }
  }
  &_fixheadcontent {
    @include border-bottom;
    font-size: 16px;
    display: flex;
    position: fixed;
    height: 50px;
    width: 100%;
    top: 44px;
    right: 0;
    text-align: center;
    background-color: #fff;
    z-index: 2000;
    font-weight: 350;
    label {
      line-height: 49px;
      flex: 1;
      color: #191a1b;
      letter-spacing: -0.2px;
    }
  }
  .films_layer {
    padding-top: 94px;
  }
  .cityFilms_content {
    li {
      @include border-bottom;
      width: 100%;
      display: flex;
      padding: 15px;

      .films_site {
        width: 80%;
        span {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          display: block;
          width: 100%;
          font-size: 17px;
        }
        :first-child {
          margin-bottom: 17px;
        }
        :last-child {
          font-size: 12px;
          margin-top: 5px;
          color: #797d82;
        }
      }
      .price_site {
        margin-left: 9px;
        justify-content: flex-start;
        text-align: center;
        margin-right: -5px;
        :first-child {
          padding-top: 2px;
          span {
            color: #ff5f16;
            i {
              font-size: 12px;
              margin: 0 1px;
              color: #ff5f16;
            }
            span {
              margin-top: 2px;
              font-size: 15px;
              color: #ff5f16;
            }
          }
        }
        :last-child {
          font-size: 11px;
          color: #797d82;
          margin-top: 18px;
        }
      }
    }
  }
}
</style>
