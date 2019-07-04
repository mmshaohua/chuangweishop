<template>
  <div class="page-city">
    <van-nav-bar title="当前城市-深圳" left-text="i" @click-left="onClickLeft" />
    <van-search v-model="searchVal" placeholder="请输入搜索关键词" />

    <!-- 拼音检索 -->
    <div class="lv-indexlist" v-show="!searchVal">
      <ul class="lv-indexlist__content" ref="lv-indexlist__content">
        <div class="recommend-city">
          <div class="gprs-city">
            <div class="city-index-title">GPS定位你所在城市</div>
            <ul class="city-index-detail">
              <li class="city-item-detail city-item-detail-gprs">
                <div class="city-item-text">深圳</div>
              </li>
            </ul>
          </div>
          <div class="hot-city">
            <div class="city-index-title">热门城市</div>
            <ul class="city-index-detail">
              <li
                class="city-item-detail"
                v-for="item in hotCity"
                :Key="item.cityId"
                @click="handleChgCity(item)"
              >
                <div class="city-item-text">{{ item.name }}</div>
              </li>
            </ul>
          </div>
        </div>
        <li :ref="'box_' + item.py" class="lv-indexsection" v-for="item in cityList" :Key="item.py">
          <p class="lv-indexsection__index">{{ item.py }}</p>
          <ul>
            <li
              v-for="city in item.list"
              :Key="city.cityId"
              @click="handleChgCity(city)"
            >{{ city.name }}</li>
          </ul>
        </li>
      </ul>
      <div class="lv-indexlist__nav">
        <ul>
          <li v-for="item in indexlist" :key="item" @click="goTop(item)">{{ item }}</li>
        </ul>
      </div>
    </div>

    <!-- 搜索结果 -->
    <div class="lv-indexlist" v-show="searchVal">
      <ul class="search_box" v-show="searchList.length > 0">
        <li
          v-for="city in searchList"
          :key="city.cityId"
          @click="handleChgCity(city)"
        >{{ city.name }}</li>
      </ul>

      <div class="empty-result" v-show="!searchList.length">
        <img src="../../assets/images/empty.png" alt />
        <p>没有找到匹配的城市</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "city",
  computed: {
    ...mapGetters("city", ["cityList", "hotCity", "indexlist", "searchList"]),

    searchVal: {
      get() {
        return this.$store.state.city.searchVal;
      },
      set(value) {
        this.$store.commit({
          type: "city/setSearchVal",
          value
        });
      }
    }
  },
  methods: {
    // 将请求城市列表的代码移动到万年老二哪里去做。
    // why: 应该这个数据在很多地方都需要使用到
    // ...mapActions("city", ["getCities"]),
    onClickLeft() {
      this.$router.push("/home");
    },
    /**
     * 点击右侧拼音首字母，让左侧对应的元素滚动到最顶部
     * @param {String} py 拼音首字母
     */
    goTop(py) {
      // 1. 找到左侧对应着的dom元素
      let el = this.$refs["box_" + py][0];
      let box = this.$refs["lv-indexlist__content"];
      // 2. 得到当前 el 距离顶部的距离
      let offsetTop = el.offsetTop;
      // 3. 操作左侧的滚动条的 scrollTop 属性
      box.scrollTop = offsetTop;
    },
    /**
     * 修改当前选择的城市
     */
    handleChgCity(city) {
      // 1. 获取当前点击的城市的城市ID
      let cityId = city.cityId;
      // 2. 将 仓库 中的相关数据给修改了
      this.$store.commit({
        type: "city/setCurCityId",
        cityId
      });
      // 3. 编程式导航 回到上一页
      // this.$router.back();
      this.$router.go(-1);
      // 4. 将城市id给本地储存起来
      window.localStorage.setItem("curCityId", cityId);
      // 5. TODO 需要重新获取 影片与影院的数据
    }
  }

  // created() {
  //   // this.getCities();
  // }
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
