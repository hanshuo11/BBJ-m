<template>
  <div class="userSetPage">
    <van-nav-bar title="用户设置" leftText="返回" >
      <van-icon class="goback" @click="goBack" name="arrow" slot="left" />
    </van-nav-bar>
    <div class="userSetContent">
      <h4 class="accountTitle">
        当前登陆账号
      </h4>
      <van-cell-group>
        <van-cell>
          <template slot="title">
            <div>
              <img class="userImg" src="http://storage.jd.com/i.imageUpload/7773687335363233353831353531353131373034333130353237_mid.jpg" alt="user">
              <div class="userName">
                <div>18800462896</div>
                <div style="color: #999">邮箱：56238155@qq.com</div>
              </div>
            </div>
          </template>
        </van-cell>
      </van-cell-group>
      <van-cell-group>
        <van-cell class="fontColor" title="修改登录密码" is-link></van-cell>
      </van-cell-group>
       <van-cell-group>
        <van-cell class="fontColor" title="收货地址管理" is-link></van-cell>
      </van-cell-group>
       <van-cell-group>
        <van-cell class="fontColor" title="绑定手机号" is-link></van-cell>
      </van-cell-group>
       <van-cell-group>
        <van-cell class="fontColor" title="绑定邮箱" is-link></van-cell>
      </van-cell-group>
      <van-cell-group>
        <van-cell class="fontColor" title="支付密码管理" is-link></van-cell>
      </van-cell-group>

      <div class="loginOut">
        <van-button @click="loginOut" class="button" type="primary" bottom-action>退出登陆</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Row,
  Col,
  Icon,
  Cell,
  CellGroup,
  NavBar,
  Tabbar,
  TabbarItem,
  Button
} from "vant";
export default {
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Icon.name]: Icon,
    [NavBar.name]: NavBar,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Button.name]: Button
  },
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.goBack();
    },
    loginOut() {
      let vm = this;
      sessionStorage.removeItem("user");
      if (sessionStorage.getItem("user")) {
        alert("退出登录失败");
      } else {
        vm.$router.push("/");
      }
    }
  }
};
</script>

<style lang="scss">
.userSetPage {
  color: #666;
  .userSetContent {
    width: 100%;
    height: 70%;
    .accountTitle {
      font-size: 14px;
      font-weight: 400;
      margin: 0 10px;
      padding: 12px 0;
      color: #333;
    }
    .userImg {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      float: left;
      display: block;
      margin-right: 10px;
    }
    .userName {
      float: left;
      font-size: 14px;
    }
    .fontColor {
      color: #999;
    }
  }
  .loginOut {
    width: 100%;
    height: 100%;
    padding-top: 30px;
    text-align: center;
    .button {
      width: 80%;
    }
  }
}
</style>