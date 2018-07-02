<template>
  <div class="login">
    <van-nav-bar title="登陆或注册" leftText="返回" >
      <van-icon class="goback" @click="goBack" name="arrow" slot="left" />
    </van-nav-bar>
    <div class="user-content">
      <van-tabs>
        <van-tab  class="tabsContent"  :title="'用户登陆'">
            <van-field v-model="username" label="账号" placeholder="邮箱/已验证手机" required icon="clear" @click-icon="username = ''">
            </van-field>
            <van-field icon="browsing-history" v-model="password" :type="passwordType" label="密码" placeholder="请输入密码" required @click-icon="passwordShow">
            </van-field>
            <div class="loginErro">{{loginErro}}</div>
            <van-button class="loginButton" size="large" @click="login">登陆</van-button>
        </van-tab>
        <van-tab class="tabsContent" :title="'账号注册'">
          <van-field icon="clear" v-model="form.username"  @click-icon="form.username = ''"  placeholder="用户名">
          </van-field>
          <van-field icon="clear" v-model="form.email"  @click-icon="form.email = ''"  placeholder="手机号/邮箱">
          </van-field>
          <van-field  v-model="form.password"   placeholder="请设置6-20位登录密码">
          </van-field>
          <div class="registerErro">{{registerErro}}</div>
           <van-button class="loginButton" size="large" @click="register">注册</van-button>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { NavBar, Icon, Tab, Tabs, Field, Button, Toast } from "vant";

export default {
  name: "index",
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Field.name]: Field,
    [Button.name]: Button
  },

  data() {
    return {
      username: "",
      password: "",
      passwordType: "password",
      passswordFlag: false,
      loginErro: "",
      registerErro: "",
      form: {
        username: "",
        password: "",
        email: ""
      }
    };
  },
  methods: {
    login() {
      let vm = this;
      postJSON("/user/login", {
        user_name:vm.username,
        user_password:vm.password
      }).then(function(res) {
        if (res.body) {
          sessionStorage.setItem("user", JSON.stringify(res.body[0]));
          vm.$router.push("/");
        } else {
          vm.loginErro = res.text;
        }
      });
    },
    register() {
      let data = this.form;
      let vm = this;
      postJSON("/user/register", data).then(function(res) {
        if (res.text == "该账号已被注册") {
          vm.registerErro = res.text;
        } else {
          //  sessionStorage.setItem("user", JSON.stringify(res.body[0]));
          vm.$router.go(0);
        }
      });
    },
    goBack() {
      this.$router.goBack();
    },
    passwordShow() {
      this.passswordFlag = !this.passswordFlag;
      if (this.passswordFlag == false) {
        this.passwordType = "password";
      } else {
        this.passwordType = "text";
      }
    }
  },
  mounted: function() {
    // console.log(this.$store.state.loginErro);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
.login {
  // text-align: center;
  .user-content {
    .tabsContent {
      width: 90%;
      margin: 0 auto;
      .loginErro {
        width: 100%;
        height: 10px;
        padding-top: 6px;
        font-size: 12px;
        color: #f23030;
      }
      .registerErro {
        width: 100%;
        height: 10px;
        padding-top: 6px;
        font-size: 12px;
        color: #f23030;
      }
      .loginButton {
        margin-top: 20px;
        background-color: #f23030;
        color: #fff;
      }
    }
  }
}
</style>
