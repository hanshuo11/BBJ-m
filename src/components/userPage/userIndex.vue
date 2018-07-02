<template>
  <div class="userIndex">

    <van-nav-bar title="我的" leftText="返回" >
      <van-icon class="goback" @click="goBack" name="arrow" slot="left" />
    </van-nav-bar>
  
    <div class="userWarp">
      <div class="userSet" @click="$router.push('/userIndex/set');"><van-icon name="setting" /> 账号管理</div>
      <img src="http://storage.jd.com/i.imageUpload/7773687335363233353831353531353131373034333130353237_mid.jpg" alt="user">
      <div class="userName">用户名：wshs562358155</div>
    </div>

    <van-cell-group class="user-group">
      <van-cell  title="我的订单" isLink to="/userIndent" />
      <van-tabbar class="noFixed">
        <van-tabbar-item icon="pending-payment">待付款</van-tabbar-item>
        <van-tabbar-item icon="logistics" >待收货</van-tabbar-item>
        <van-tabbar-item icon="pending-orders" info="5">售后</van-tabbar-item>
      </van-tabbar>
     
    </van-cell-group>

    <van-cell-group>
      <van-cell icon="exchange" title="我的积分" isLink />
      <van-cell icon="gold-coin" title="我的优惠券" isLink />
      <van-cell icon="gift" title="我的收藏" isLink />
    </van-cell-group>
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
  TabbarItem
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
    [TabbarItem.name]: TabbarItem
  },
  data() {
    return {};
  },
  methods: {
    goBack() {
      console.log(1);
      this.$router.goBack();
    }
  }
};
</script>

<style lang="scss">
.userIndex {
  background: #f7f7f7;
  color: #666;
  .userWarp {
    width: 95%;
    height: 113px;
    position: relative;
    margin: 10px auto;
    background: linear-gradient(90deg, #eb3c3c, #ff7459);
    box-shadow: 0 2px 5px rgba(255, 98, 98, 0.4);
    border-radius: 10px;
    padding-top:10px;
    img {
      width: 65px;
      height: 65px;
      display: block;
      border-radius: 50%;
      margin: 0 auto;
    }
    .userSet {
      position: absolute;
      right: 15px;
      top: 12px;
      font-size: 13px;
      color: rgba(76, 0, 0, 0.7);
      -webkit-user-select:none;
      -moz-user-select:none;
      -ms-user-select:none;
      user-select:none;
    }
    .userName {
      text-align: center;
      color: hsla(0, 0%, 100%, 0.7);
      padding-top: 10px;
      font-size: 14px;
    }
  }
  .user-group {
    margin-bottom: 0.8rem;
    .noFixed {
      height: 60px;
      position: unset;
      .van-tabbar-item__icon {
        font-size: 22px;
        margin-bottom: 7px;
      }
      .van-tabbar-item__info {
        right: -45%;
      }
    }
  }
}
</style>