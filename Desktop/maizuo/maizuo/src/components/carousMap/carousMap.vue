<template>
  <van-swipe indicator-color="#fff" :loop="true">
    <van-swipe-item v-for="banner in SwiperImgs" :key="banner.bannerId">
      <img :src="banner.imgUrl" />
    </van-swipe-item>
  </van-swipe>
</template>
<script>
export default {
  name: "CarousMap",
  data() {
    return {
      SwiperImgs: []
    };
  },
  mounted() {
    this.axios({
      method: "get",
      url: "https://m.maizuo.com/gateway?type=2&cityId=810100&k=9062041",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"15611114019290014261849"}',
        "X-Host": "mall.cfg.common-banner"
      }
    })
      .then(res => {
        //console.log(res);
        if (res.status === 200) {
          this.SwiperImgs = res.data.data;
          //console.log(this.SwiperImgs);
        }
      })
      .catch(res => {
        //console.log(res);
      });
  }
};
</script>
<style lang='scss'>
.van-swipe__indicators {
  //text-align: right;
}
.van-swipe__indicator {
  height: 7px !important;
  width: 7px !important;
  text-align: right;
}
.van-swipe-item {
  img {
    width: 100%;
  }
}
</style>
