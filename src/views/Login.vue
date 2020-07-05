<template>
  <div id="login">
    <div class="container">
      <!-- 头像 -->
      <div class="login-header">
        <div class="icon">
          <img src="../assets/header.jpg" alt />
        </div>
      </div>
      <!-- 主体 -->
      <div class="login-body">
        <div class="username">
          <p class="title">Username</p>
          <el-input v-model="username" placeholder="输入用户名"></el-input>
        </div>
        <div class="password">
          <p class="title">Password</p>
          <el-input v-model="password" placeholder="输入密码" show-password></el-input>
        </div>
        <div class="remember">
          <span class="rem-text">Remember Me</span>
          <el-switch v-model="remember" active-color="#13ce66" inactive-color="#808080"></el-switch>
        </div>
        <div class="check">
          <el-button type="primary" class="btn" round>login</el-button>
        </div>
      </div>
      <!-- 尾部 -->
      <div class="login-bot">
        <div class="signUp">
          <el-button type="text">sign up</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      remember: ""
    };
  },
  components: {},
  methods: {
    focus() {
      this.outline = true;
      console.log(this.outline);
    },
    blur() {
      this.outline = false;
    }
  }
};
</script>
<style lang="less" scoped>
#login {
  font-family: "Microsoft Yahei";
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("../assets/bg.jpg") no-repeat center center;
  background-size: cover;
  .container {
    width: 340px;
    height: 500px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    .login-header {
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 10px 0;
      .icon {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-color: pink;
        overflow: hidden;
        & img {
          display: block;
          width: 100%;
          height: 100%;
        }
        & :hover img{
          transform: rotate(360deg);
        }
      }
    }
    .login-body {
      margin: 34px;
      .username {
        .title {
          color: #585858;
          margin: 0 0 10px 0;
        }
      }
      .remember {
        display: flex;
        justify-content: space-between;
        margin: 20px 0;
      }
    }
    .check {
      width: 100%;
      height: 40px;
      margin: 30px 0;
      .btn {
        width: 100%;
        height: 100%;
      }
    }
    .login-bot {
      .signUp {
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>