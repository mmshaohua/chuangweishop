<template>
  <div class="page-home-center">
    <div class="avatar" v-if="userInfo">
      <div class="avator-icon">
        <img :src="userInfo.avatar" />
        <input type="file" @change="handleUpdAvatar" />
      </div>
      <div class="nick-name">{{ userInfo.nickname }}</div>
    </div>

    <div class="avatar" v-else>
      <div class="avator-icon">
        <img src="../../assets/images/avatar.png" />
      </div>
      <router-link to="/login" tag="div" class="nick-name">立即登录</router-link>
    </div>

    <ul class="my-order-tab">
      <li>
        <i class="iconfont icon-youhui"></i>
        <div class="common-p">电影订单</div>
      </li>
      <li>
        <i class="iconfont icon-linggan"></i>
        <div class="common-p">拼团订单</div>
      </li>
    </ul>

    <router-link tag="div" to="/card" class="margin-set my-card">
      <span class="label">卖座卡</span>
    </router-link>
    <div class="margin-set my-balance">
      <span class="label">余额</span>
    </div>
    <div class="margin-set system-set" @click="handleLogout">
      <span class="label">退出登录</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "center",
  data() {
    return {
      userInfo: ""
    };
  },
  methods: {
    handleLogout() {}
  }
};
</script>

<style lang="scss">
.page-home-center {
  .avatar {
    text-align: center;
    margin-top: -44px;
    height: 200px;
    padding-left: 22px;
    padding-top: 64px;
    background: url(https://assets.maizuo.com/h5/v5/public/app/img/bg.6837f67.png);
    background-size: cover;
    display: flex;
    align-items: center;
    color: #fff;

    .avator-icon {
      position: relative;
      width: 63px;
      height: 63px;
      border-radius: 35px;
      margin-right: 20px;
      border: 2px solid #fff;

      img {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }

      input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
      }
    }

    .nick-name {
      font-size: 16px;
    }
  }

  .my-order-tab {
    width: 100%;
    margin: 0 auto;
    display: flex;
    text-align: center;
    font-size: 13px;
    padding: 0;
    height: 79px;
    background: #fff;
    margin-bottom: 10px;
    align-items: center;

    li {
      position: relative;
      flex: 1;
      list-style: none;

      .iconfont {
        font-size: 26px;
      }

      .common-p {
        margin-top: 10px;
        color: #797d82;
      }
    }
  }

  .margin-set {
    position: relative;
    background: #fff;
    padding: 0 15px;
    height: 49px;
    display: flex;
    align-items: center;

    .label {
      font-size: 16px;
      margin-left: 15px;
      color: #191a1b;
      flex: 1;
    }

    &::after {
      content: " ";
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      height: 1px;
      border-bottom: 1px solid #ededed;
      color: #ededed;
      transform-origin: 0 100%;
      transform: scaleY(0.5);
      left: 13px;
    }
  }
}
</style>
