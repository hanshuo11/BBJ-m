<template>
  <div class="store">
    <van-nav-bar title="店铺" leftText="返回" >
      <van-icon class="goback" @click="goBack" name="arrow" slot="left" />
    </van-nav-bar>
    <div class="banner-section">
      <img src="https://img11.360buyimg.com/jshopm/jfs/t1198/177/246925151/74805/ab73d78b/550ffd76Nf0a0bb07.png" class="banner-img">
      <div class="banner-content">
        <span class="store-icon">
          <img :src="storeData.icon">
        </span>
        <span class="store-name">
          <router-link to="/store/storeInf">
            <span>{{storeData.name}} <i class="iconfont">&#xe6ab;</i></span><br>
          </router-link>
          <span class="label-icon">同城实体</span>
        </span>
      </div>
    </div>

    <van-tabs :active="0" @click="handleTabClick" >
        <van-tab v-for="(inf,index) in storeData.goodesList" :title="inf.title" :key="index">
            <ul class="store-list">
              <router-link class="classesSpan" to="/goodsList/goods">
                <li class="similar-li" v-for="(list,index) in inf.list" :key="index" @click="toGoodes(list.id)">
                  <div class="similar-product">
                    <div class="similar-img">
                      <img :src="list.imgUrl">
                    </div>   
                    <span class="similar-title">{{list.title}}</span>
                    <div class="price">
                      <i class="iconfont money">&#xe6b7;</i><span class="num">{{list.price}}</span>
                    </div>
                  </div>
                  
                </li>
              </router-link>
            </ul>
        </van-tab>
    </van-tabs>
    
    <div class="floorTabbar">
      <van-tabbar>
        <van-tabbar-item to="/goodsList">全部商品</van-tabbar-item>
        <van-tabbar-item>商品分类</van-tabbar-item>
        <van-tabbar-item to="store/storeInf">店铺详情</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
import { NavBar, Icon, Tab, Tabs, Tabbar, TabbarItem } from "vant";

export default {
  name: "index",
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data() {
    return {
      storeData: {
        storeId: "1234",
        icon:
          "https://img30.360buyimg.com/popshop/jfs/t6454/7/643207412/11412/ed690674/59426bf1Nc3617b08.jpg",
        name: "哒哒哒官方旗舰店",
        goodesList: [
          {
            title: "推荐",
            list: [
              {
                id: "123",
                title:
                  "臻味 坚果礼盒 原料进口坚果果干 年货休闲零食大礼包 不忘初心1680g/盒",
                imgUrl:
                  "https://m.360buyimg.com/mobilecms/s357x357_jfs/t14581/105/2211676405/269003/4301a86b/5a7a8b29N7fdd27bf.jpg!q50.jpg",
                price: "89.00",
                store: "百草味旗舰店",
                sales: "6万笔",
                fre: "免费"
              },
              {
                id: "456",
                title: "三只松鼠 坚果炒货 休闲零食 开心果225g/袋",
                imgUrl:
                  "//img.alicdn.com/bao/uploaded/i1/880734502/TB2sXyuqFXXXXbxXpXXXXXXXXXX_!!880734502.jpg_400x400Q50s50.jpg_.webp",
                price: "39.00",
                store: "三只松鼠旗舰店",
                sales: "3万笔",
                fre: "免费"
              },
              {
                id: "789",
                title: "洽洽 年货坚果炒货 五香味 香瓜子308g/袋",
                imgUrl:
                  "https://m.360buyimg.com/mobilecms/s357x357_jfs/t14281/61/824785556/474495/2cb01128/5a3a3de7Nf6b6fe58.jpg!q50.jpg",
                price: "55.00",
                store: "洽洽旗舰店",
                sales: "4万笔",
                fre: "免费"
              },
              {
                id: "112233",
                title: "三只松鼠 坚果炒货 零食奶油味 夏威夷果265g/袋",
                imgUrl:
                  "https://m.360buyimg.com/mobilecms/s357x357_jfs/t5704/354/3536189279/266628/4efd8c14/593e4964N1b9e4b12.jpg!q50.jpg",
                price: "69.00",
                store: "三只松鼠旗舰店",
                sales: "1万笔",
                fre: "免费"
              },
              {
                id: "445566",
                title: "三只松鼠坚果炒货每日坚果碧根果120g",
                imgUrl:
                  "https://m.360buyimg.com/mobilecms/s357x357_jfs/t5794/252/3491686282/230788/65f00f04/593e4cf6N3f4d50ec.jpg!q50.jpg",
                price: "48.00",
                store: "三只松鼠旗舰店",
                sales: "3万笔",
                fre: "免费"
              }
            ]
          },
          {
            title: "销量",
            list: []
          },
          {
            title: "新品",
            list: []
          }
        ]
      },
      title: "推荐"
    };
  },
  methods: {
    goBack() {
      this.$router.goBack();
    },
    toGoodes(item) {
      console.log(item);
    },
    handleTabClick(index) {
      // Toast(index);
      if (this.storeData.goodesList[index].title != this.title) {
        console.log(this.storeData.goodesList[index].title);
        this.title = this.storeData.goodesList[index].title;
      }
    }
  },
  mounted: function() {}
};
</script>


<style lang="less" scoped>
.store {
  .banner-section {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 6.68rem;
    background: #ccc;
    .banner-content {
      position: absolute;
      width: 100%;
      height: 3rem;
      left: 0;
      bottom: 0;
      padding: 0 0.6rem 0.6rem;
      align-items: center;
      .store-icon {
        display: block;
        width: 7em;
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
        color: #fff;
        font-size: 0.9rem;
        a {
          color: #fff;
        }
        .label-icon {
          display: inline-block;
          width: 4rem;
          height: 1rem;
          background: red;
          text-align: center;
          font-size: 0.8rem;
          line-height: 1rem;
          margin-top: 0.3rem;
          border-radius: 4px;
        }
      }
    }
  }
  .store-list {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #f0f2f5;
    margin-bottom: 45px;
    .similar-li:nth-child(2n + 1) {
      padding-right: 2px;
    }
    .similar-li:nth-child(2n) {
      padding-left: 2px;
    }
    .similar-li {
      float: left;
      width: 50%;
      box-sizing: border-box;
      padding-bottom: 4px;
      padding-top: 2px;
      position: relative;
      .similar-product {
        background-color: white;
        padding-bottom: 6px;
        height: 100%;
        img {
          width: 11rem;
          height: 11rem;
          display: block;
          margin: 0 auto;
        }
        .similar-title {
          width: 100%;
          height: 2.48rem;
          line-height: 1.11rem;
          padding: 0.3rem;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          color: #000;
          font-size: 0.9rem;
        }
        .price {
          color: red;
          font-weight: 600;
        }
      }
    }
  }

  .floorTabbar {
    .van-tabbar-item {
      color: #232325;
      font-size: 15px;
      font-weight: 500;
    }
  }
}
</style>
