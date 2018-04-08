<template>
  <div class="goodesList">
    <van-nav-bar title="商品浏览" leftText="返回" >
      <van-icon class="goback" @click="goBack" name="arrow" slot="left" />
    </van-nav-bar>

    <van-tabs :active="0" @click="handleTabClick" >
        <van-tab v-for="(inf,index) in goodesList" :title="inf.title" :key="index">
            <ul>
              <router-link class="classesSpan" to="/goodsList/goods">
                <li class="goodesInf" v-for="(list,index) in inf.list" :key="index" @click="toGoodes(list.id)">
                  <div class="goodesImg">
                    <img :src="list.imgUrl" alt="">
                  </div>
                  <div class="goodesIntr">
                    <h3>{{list.title}}</h3>
                    <span class="sold">月销{{list.sales}} </span>
                    <span class="sold space">{{list.store}}</span>
                    <div class="line"></div>
                    <div class="price">
                      <i class="iconfont money">&#xe6b7;</i>
                      <span class="num">{{list.price}}</span>
                      <span class="fee">运费：{{list.fre}} </span>
                    </div>
                  </div>
                </li>
              </router-link>
            </ul>
        </van-tab>
    </van-tabs>
    
    
  </div>
</template>

<script>
import { NavBar, Icon, Tab, Tabs } from "vant";

export default {
  name: "index",
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },
  data() {
    return {
      goodesList: [
        {
          title: "综合",
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
          title: "信用",
          list: []
        },
        {
          title: "好评",
          list: []
        }
      ]
    };
  },
  methods: {
    goBack() {
      this.$router.goBack();
    },
    handleTabClick(index) {
      // Toast(index);
      if (this.goodesList[index].title != this.title) {
        console.log(this.goodesList[index].title);
        this.title = this.goodesList[index].title;
      }
    },
    toGoodes(item) {
      console.log(item);
    }
  },
  mounted: function() {
    // this.$store.commit("getQuery");
    // this.$store.dispatch("getQuery").then(res => {
    //   console.log(res.data);
    // });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.goodesList {
  .goodesInf {
    width: 100%;
    height: 7.98rem;
    display: -webkit-box;
    position: relative;
    .goodesImg {
      width: 7.75rem;
      height: 7.75rem;
      position: relative;
      overflow: hidden;
      text-align: center;
      img {
        display: inline-block;
        width: auto;
        max-width: 7.75rem;
        height: 7.75rem;
      }
    }
    .goodesIntr {
      -webkit-box-flex: 1;
      box-flex: 1;
      margin-left: 0.625rem;
      position: relative;
      height: 100%;
      margin-top: -2px;
      padding-right: 0.625rem;
      padding-top: 0.625rem;
      padding-bottom: 0.625rem;
      border-bottom: 1px solid #eee;
      h3 {
        color: #232326;
        font-size: 0.95rem;
        line-height: 1.25rem;
        height: 2.625rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        display: box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: break-word;
      }
      .sold {
        font-size: 0.75rem;
        line-height: 0.75rem;
        color: #999;
        margin-top: 0.57rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .space{
        margin-left:.5rem;
      }
      .line {
        padding-top: 0.57rem;
        height: 1rem;
        overflow: hidden;
      }
      .price {
        .money {
          font-size: 1.2rem;
          color: #f23030;
        }
        .num {
          font-size: 1.2rem;
          color: #f23030;
        }
        .fee {
          font-size: 0.7rem;
          color: #999;
          margin-left: 9px;
        }
      }
    }
  }
}
</style>
