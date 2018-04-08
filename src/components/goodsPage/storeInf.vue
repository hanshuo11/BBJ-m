<template>
  <div class="store-inf">
    <van-nav-bar title="店铺详情" leftText="返回" >
      <van-icon class="goback" @click="goBack" name="arrow" slot="left" />
    </van-nav-bar>
    <div class="banner-section">
      <div class="banner-content">
        <span class="store-icon">
          <img :src="storeData.icon">
        </span>
        <span class="store-name">
            <span>{{storeData.name}}</span><br>
          <span class="label-icon">61.7万人关注</span>
        </span>
        <span class="attention">
           <i class="iconfont like">&#xe63b;</i> 关注
        </span>
        <div class="address">店铺地址：北京昌平区蓝天园12号楼5-502</div>
      </div>
    </div>
    <div class="space"></div>
    <van-cell-group>
        <van-cell title="店铺二维码" is-link/>
        <van-cell title="证件信息" is-link />
    </van-cell-group>
     <div class="space"></div>
    <van-cell-group>
        <van-cell title="店铺简介" value="主要经营快时尚商品"/>
        <van-cell title="开店时间" value="2018-02-11" />
        
    </van-cell-group>
  </div>
</template>

<script>
import { NavBar, Icon, Cell, CellGroup } from "vant";

export default {
  name: "index",
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  data() {
    return {
      storeData: {
        storeId: "1234",
        icon:
          "https://img30.360buyimg.com/popshop/jfs/t6454/7/643207412/11412/ed690674/59426bf1Nc3617b08.jpg",
        name: "哒哒哒官方旗舰店"
      }
    };
  },
  methods: {
    goBack() {
      this.$router.goBack();
    }
  },
  mounted: function() {}
};
</script>


<style lang="less" scoped>
.store-inf {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #f8f8f8;
  .space {
      width: 100%;
      height: .8rem;
  }
  .banner-section {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 6rem;
    background: #fff;
    .banner-content {
      position: relative;
      width: 100%;
      height: 5rem;
      //   left: 0;
      //   bottom: 0;
      padding: 0.8rem 0 0.6rem 0.6rem;

      align-items: center;
      .store-icon {
        display: block;
        width: 6em;
        height: 2.3rem;
        float: left;
        margin-right: 0.5rem;
        background: #fff;
        border: 1px solid #bfbfbf;
        text-align: center;
        overflow: hidden;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      .store-name {
        color: #232325;
        font-size: 0.9rem;
        .label-icon {
          display: inline-block;
          width: 5rem;
          height: 1rem;
          text-align: center;
          font-size: 0.8rem;
          line-height: 1rem;
          margin-top: 0.3rem;
          color: #999;
        }
      }
      .attention {
        height: 1.3rem;
        width: 4.3rem;
        padding: 0.2rem 0.8rem;
        background: red;
        border-radius: 4px;
        position: absolute;
        font-size: 0.8rem;
        right: 0.3rem;
        top: 1.4rem;
        color: #fff;
      }
      .address {
        width: 100%;
        height: 2rem;
        margin-top: 0.8rem;
        color: #5a5959;
      }
    }
  }
}
</style>
