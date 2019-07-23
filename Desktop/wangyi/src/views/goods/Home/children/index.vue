<template>
  <div class="home_header">
    <router-link to="/home" tag="div" class="home_header_logo">
      <img src="@/assets/images/image_png.png" alt />
    </router-link>
    <router-link to="/search" tag="div" class="home_header_input">
      <i class="iconfont icon-iconfontfangdajing"></i>
      <span>搜索商品，共21789款好物</span>
    </router-link>
    <router-link to="/mine" tag="div" class="home_header_login">登录</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.home_header {
  display: flex;
  padding: 7px 7px;
  &_logo {
    img {
      width: 70px;
      height: 20px;
      margin: 5px 10px 0 8px;
    }
  }
  &_input {
    display: flex;
    border-radius: 4.5px;
    background-color: #ccc;
    // box-sizing: border-box;
    width: 60%;
    color: #666;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    i {
      margin-right: 3px;
    }
  }
  &_login {
    width: 10%;
    line-height: 22px;
    font-size: 12px;
    margin-left: 8px;
    color: #b4282d;
    border: 1px solid #b4282d;
    text-align: center;
    border-radius: 5px;
  }
}
</style>

