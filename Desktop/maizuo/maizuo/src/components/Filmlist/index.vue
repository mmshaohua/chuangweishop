<template>
  <div class="page-home-films">
    <div class="hot_showing">
      <ul class="hot_showing_allbox">
        <li class="hot_showing_box" v-for="(item,index) in list" :key="index">
          <router-link :to="{name:'film',params:{filmId:item.filmId}}" class="hot_showing_link">
            <div class="hot_showing_img">
              <img :src="item.poster" />
            </div>
            <div class="hot_showing_boxContent">
              <div class="hot_showing_firstContent">
                <span class="name">{{item.name}}</span>
                <span class="item">{{item.filmType.name}}</span>
              </div>
              <div class="hot_showing_twoContent" v-show="filmType==='nowPlaying'">
                <span>观众评分</span>
                <span>{{item.grade}}</span>
              </div>
              <div
                class="hot_showing_twoContent"
                v-show="filmType==='comingsoon'"
                style="visibility:hidden;"
              >
                <span>观众评分</span>
                <span>{{item.grade}}</span>
              </div>
              <div class="hot_showing_threeContent">
                <span>主演 : {{item.actors | actorFormat}}</span>
              </div>
              <div class="hot_showing_lastContent" v-show="filmType==='nowPlaying'">
                <span>{{item.nation}} |{{item.runtime}}分钟</span>
              </div>
              <div v-show="filmType==='comingsoon'" class="hot_showing_lastContent">
                <span>上映日期:{{ item.premiereAt }}</span>
              </div>
            </div>
            <div class="hot_showing_btn" v-show="filmType==='nowPlaying'">购票</div>
            <div class="hot_showing_btn" v-show="filmType==='comingsoon'">预售</div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "FilmList",
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    },
    filmType: String
  },

  filters: {
    actorFormat(actors = []) {
      let tmp = actors.map(item => item.name);
      return tmp.length ? tmp.join(" ") : "暂无主演";
    }
  }
};
</script>
<style lang="scss">
@import "~@/assets/styles/common/mixins.scss";

.van-tabs--line .van-tabs__wrap {
  height: 44px;
  span {
    font-size: 14px;
    line-height: 44px;
  }
}
.van-tabs--line {
  padding-top: 44px;
}
.hot_showing_allbox {
  margin-left: 15px;
  &_box {
    padding: 15px 15px 15px 0;
    height: 47px;
    position: relative;
  }
}
.hot_showing {
  &_link {
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    padding: 15px 15px 15px 0;
    height: 94px;
    position: relative;
  }
  &_img {
    height: 94px;

    img {
      width: 66px;
    }
  }
  &_boxContent {
    flex: 1;
    padding: 0 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    // width: 422px;
  }
  &_firstContent {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    > span:first-child {
      color: #191a1b;
      font-size: 16px;
      height: 22px;
      line-height: 22px;
      margin-right: 5px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    > span.item {
      font-size: 9px;
      color: #fff;
      background-color: #d2d6dc;
      height: 14px;
      line-height: 14px;
      padding: 0 1px;
      border-radius: 1px;
    }
  }
  &_twoContent {
    margin-top: 4px;
    > span:first-child {
      font-size: 13px;
      color: #797d82;
    }
    > span:last-child {
      color: #ffb232;
      font-size: 14px;
    }
  }
  &_threeContent {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    margin-top: 4px;
    > span {
      font-size: 13px;

      color: #797d82;
    }
  }
  &_lastContent {
    margin-top: 4px;
    > span {
      font-size: 13px;

      color: #797d82;
    }
  }
  &_btn {
    @include border;
    line-height: 25px;
    height: 25px;
    width: 50px;
    color: #ff5f16;
    font-size: 13px;
    text-align: center;
    border-radius: 2px;
    position: relative;
    margin-top: 31px;
  }
}
</style>

