<template>
  <div class="content">
  
    <div class="top-search">
      <van-search background="rgba(242, 242, 242, 0)" class="search-box" v-model="searchKey" :showAction="true" @search="onSearch" placeholder="搜索">
        <div class="login" slot="action" @click="onLogin">
          <router-link class="loginFont" v-show="!loginFlag" to="login">
            登录
          </router-link>
          <i class="iconfont userIcon" v-show="loginFlag" @click="userPage">&#xe62f;</i>
        </div>
      </van-search>
    </div>
  
    <div class="swipe">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in swipeImg" :key="index">
          <img class="swipeImg" v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
  
    <div class="middle">
      <nav class="classes">
        <router-link class="classesSpan" to="#">
          <img width="30" height="30" src="https://m.360buyimg.com/mobilecms/jfs/t7846/320/4222860241/6672/45054a8/59e445f1Na5df6723.png">
          <div>同城超市</div>
        </router-link>
        <router-link class="classesSpan" to="#">
          <img width="30" height="30" src="https://m.360buyimg.com/mobilecms/jfs/t5656/351/153181074/12227/e35aa8d/591d9456Naa85e195.png">
          <div>同城服饰</div>
        </router-link>
        <router-link class="classesSpan" to="#">
          <img width="30" height="30" src="https://m.360buyimg.com/mobilecms/jfs/t5842/205/151189300/13247/a6de2d/591d94edNc42fb94d.png">
          <div>物流查询</div>
        </router-link>
        <router-link class="classesSpan" to="#">
          <img width="30" height="30" src="https://m.360buyimg.com/mobilecms/jfs/t5872/340/146804759/11154/f4ae1409/591d94c4N79a488cc.png">
          <div>领券</div>
        </router-link>
        <router-link class="classesSpan" to="#">
          <img width="30" height="30" src="https://m.360buyimg.com/mobilecms/jfs/t5824/248/156712927/7215/1ad6be5f/591d94c6Nc4711ad2.png">
          <div>同城秒杀</div>
        </router-link>
      </nav>
  
      <div class="seckill-floor">
        <div class="title">
          <span class="titleFont">同城秒杀</span>
          <span class="titleTime">{{seckill_now}}点场</span>
          <span class="time">
            <span>{{hours}}</span>
            <span>:</span>
            <span>{{minutes}}</span>
            <span>:</span>
            <span>{{seconds}}</span>
          </span>
        </div>
  
        <div class="seckill">
          <div class="seckillContent">
            <ul class="recommend">
              <li class="recommendList" v-for="(inf, index) in seckillInf" :key="index">
                <div>
                  <img :src="'https://img12.360buyimg.com/cms/s276x276_'+inf.imagePath">
                </div>
                <div>
                  <span class="price">¥&nbsp;<span>{{inf.d}}</span></span>
                  <span class="oldPrice">¥&nbsp;{{inf.p}}<hr></span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
  
      <div class="floor-module">
        <!-- <span class="title-img">
                <img src="https://m.360buyimg.com/mobilecms/jfs/t4270/297/570405700/13314/a46c9b82/58b64705Nce641d00.jpg!q70.jpg" alt="">
            </span> -->
        <div class="container">
          <div class="twoModule bdr-bottom">
            <div class="cl-50 bdr-r">
              <span class="title">3C数码</span>
              <p class="introduce">抢手机神券 立减2018元</p>
              <div class="show-img">
                <img src="https://m.360buyimg.com/mobilecms/s240x240_jfs/t19144/287/350032203/12794/f9bddb74/5a6ef6a4Nc6c37bf2.jpg!q70.jpg" alt="">
                <img src="https://m.360buyimg.com/mobilecms/s240x240_jfs/t16129/4/1939819632/14466/12dfc3a3/5a6ef6a8Nb2a10cb0.jpg!q70.jpg" alt="">
              </div>
            </div>
            <div class="cl-50">
              <span class="title">同城家电</span>
              <p class="introduce">囤年货，家电满减狂欢</p>
              <div class="show-img">
                <img src="https://m.360buyimg.com/n1/jfs/t18802/353/307705956/35351/a47594ed/5a6ad672N683e4d8c.jpg!q70.jpg" alt="">
                <img src="https://m.360buyimg.com/mobilecms/s240x240_jfs/t17899/40/321308974/29274/8b5bd7b1/5a6ad67bNf7f3e9b1.jpg!q70.jpg" alt="">
              </div>
            </div>
          </div>
          <div class="twoModule bdr-bottom">
            <div class="cl-50 bdr-r">
              <span class="title">同城超市</span>
              <p class="introduce">好货部分满99-50</p>
              <div class="show-img">
                <img src="https://m.360buyimg.com/mobilecms/s240x240_jfs/t19342/258/304004264/67365/44e5176a/5a6af654N34482a46.jpg!q70.jpg" alt="">
                <img src="https://m.360buyimg.com/n1/jfs/t17089/242/322799966/82113/df0a4e03/5a6af64aN08087c0f.jpg!q70.jpg" alt="">
              </div>
            </div>
            <div class="cl-50">
              <span class="title">爱家</span>
              <p class="introduce">家具建材 领券199减100</p>
              <div class="show-img">
                <img src="https://m.360buyimg.com/mobilecms/s240x240_jfs/t15211/36/363877971/47743/b6607b0f/5a2a6d49Nc1a009d3.jpg!q70.jpg" alt="">
                <img src="https://m.360buyimg.com/mobilecms/s240x240_jfs/t13321/10/1818685253/46712/e6acfa6f/5a2a6d4dNeae9cdbc.jpg!q70.jpg" alt="">
              </div>
            </div>
          </div>
          <div class="fourModule bdr-bottom">
            <div class="cl-25 bdr-r">
              <span class="title">服饰</span>
              <p class="introduce">时尚搭配</p>
              <div class="show-img">
                <img src="https://m.360buyimg.com/mobilecms/s240x240_jfs/t14920/211/2100229970/51820/494540a2/5a6ed244N0d668bb0.jpg!q70.jpg" alt="">
              </div>
            </div>
            <div class="cl-25 bdr-r">
              <span class="title">零食</span>
              <p class="introduce">限时折扣</p>
              <div class="show-img">
                <img src="https://m.360buyimg.com/mobilecms/s240x240_jfs/t14473/103/2042876100/41836/766c1953/5a697f47Nc952ed7f.jpg!q70.jpg" alt="">
              </div>
            </div>
            <div class="cl-25 bdr-r">
              <span class="title">美妆</span>
              <p class="introduce">低至五折</p>
              <div class="show-img">
                <img src="https://m.360buyimg.com/mobilecms/s240x240_jfs/t14734/169/2137159604/16014/3cd1a49f/5a72835aN398a3268.jpg!q70.jpg" alt="">
              </div>
            </div>
            <div class="cl-25 bdr-r">
              <span class="title">洗护</span>
              <p class="introduce">买二送一</p>
              <div class="show-img">
                <img src="https://m.360buyimg.com/n1/jfs/t9496/273/1464951772/22953/872f5685/59c1d701N8d7388e6.jpg!q70.jpg" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="love-floor">
        <div class="floor-title">
          <span class="text"> 
            <i class="iconfont">&#xe63b;</i>
            猜你喜欢
          </span>
        </div>
        <ul class="love-list">
          <li class="similar-li" v-for="(inf,index) in loveList" :key="index">
            <div class="similar-product">
              <div class="similar-img">
                <img :src="inf.similarImg">
              </div>
              <div class="title">
                <span>[为你推荐]{{inf.introduce}}</span>
              </div>
              <span class="price">¥ {{inf.price}}</span>
            </div>
          </li>
  
        </ul>
      </div>
  
    </div>
  
    <div class="floorTabbar">
      <van-tabbar v-model="active">
        <van-tabbar-item icon="home">首页</van-tabbar-item>
        <van-tabbar-item icon="wap-nav" to="/floorTabbar/classes">分类</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart" to="/floorTabbar/shoppingCart">购物车</van-tabbar-item>
      </van-tabbar>
    </div>
  
  </div>
</template>

<script>
import { Search, Swipe, SwipeItem, Tabbar, TabbarItem } from "vant";

export default {
  name: "index",
  components: {
    [Search.name]: Search,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data() {
    return {
      seckill_now: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
      searchKey: "",
      active: 0,
      swipeImg: [
        "https://m.360buyimg.com/mobilecms/s1125x549_jfs/t12985/248/517565276/115964/ad8c255b/5a0d336dNd939a71e.jpg!q70.jpg",
        "https://img1.360buyimg.com/da/jfs/t12229/78/515061519/249229/ea73df4a/5a0d4724N3345c5fd.jpg",
        "https://m.360buyimg.com/mobilecms/s1125x549_jfs/t12985/248/517565276/115964/ad8c255b/5a0d336dNd939a71e.jpg!q70.jpg",
        "https://m.360buyimg.com/mobilecms/s1125x549_jfs/t11731/210/1988376159/47894/42dba539/5a0d3455N7c7de4c9.jpg!q70.jpg"
      ],
      loginFlag: false,
      seckillInf: [
        // {
        //   img:
        //     "https://m.360buyimg.com//mobilecms/s276x276_jfs/t3214/55/1079586122/175953/1cf3691c/57c6915cN4805e756.jpg!q70.jpg",
        //   price: "39.90",
        //   oldPrice: "50"
        // },
        // {
        //   img:
        //     "https://m.360buyimg.com/mobilecms/s220x220_jfs/t13993/134/2196136987/200722/86bab915/5a607496N3c142877.jpg!q70.jpg",
        //   price: "39.90",
        //   oldPrice: "50"
        // },
        // {
        //   img:
        //     "https://m.360buyimg.com//mobilecms/s276x276_jfs/t3214/55/1079586122/175953/1cf3691c/57c6915cN4805e756.jpg!q70.jpg",
        //   price: "39.90",
        //   oldPrice: "50"
        // },
        // {
        //   img:
        //     "https://m.360buyimg.com//mobilecms/s276x276_jfs/t3214/55/1079586122/175953/1cf3691c/57c6915cN4805e756.jpg!q70.jpg",
        //   price: "39.90",
        //   oldPrice: "50"
        // },
        // {
        //   img:
        //     "https://m.360buyimg.com//mobilecms/s276x276_jfs/t3214/55/1079586122/175953/1cf3691c/57c6915cN4805e756.jpg!q70.jpg",
        //   price: "39.90",
        //   oldPrice: "50"
        // },
        // {
        //   img:
        //     "https://m.360buyimg.com//mobilecms/s276x276_jfs/t3214/55/1079586122/175953/1cf3691c/57c6915cN4805e756.jpg!q70.jpg",
        //   price: "39.90",
        //   oldPrice: "50"
        // },
        // {
        //   img:
        //     "https://m.360buyimg.com//mobilecms/s276x276_jfs/t3214/55/1079586122/175953/1cf3691c/57c6915cN4805e756.jpg!q70.jpg",
        //   price: "39.90",
        //   oldPrice: "50"
        // },
        // {
        //   img:
        //     "https://m.360buyimg.com//mobilecms/s276x276_jfs/t3214/55/1079586122/175953/1cf3691c/57c6915cN4805e756.jpg!q70.jpg",
        //   price: "39.90",
        //   oldPrice: "50"
        // }
      ],
      loveList: [
        {
          similarImg:
            "//m.360buyimg.com//mobilecms/s370x370_jfs/t12172/209/2628173235/243621/eca65b18/5a449a24N2d946646.jpg!q70.jpg",
          introduce:
            "神舟战神sk1300 i7-7700hq+1060 6g吃鸡神器,赠送鼠标键盘三件套！！！！！",
          price: "6999"
        },
        {
          similarImg:
            "//m.360buyimg.com//mobilecms/s370x370_jfs/t12172/209/2628173235/243621/eca65b18/5a449a24N2d946646.jpg!q70.jpg",
          introduce:
            "神舟战神sk1300 i7-7700hq+1060 6g吃鸡神器,赠送鼠标键盘三件套！！！！！",
          price: "6999"
        },
        {
          similarImg:
            "//m.360buyimg.com//mobilecms/s370x370_jfs/t12172/209/2628173235/243621/eca65b18/5a449a24N2d946646.jpg!q70.jpg",
          introduce:
            "神舟战神sk1300 i7-7700hq+1060 6g吃鸡神器,赠送鼠标键盘三件套！！！！！",
          price: "6999"
        },
        {
          similarImg:
            "//m.360buyimg.com//mobilecms/s370x370_jfs/t12172/209/2628173235/243621/eca65b18/5a449a24N2d946646.jpg!q70.jpg",
          introduce:
            "神舟战神sk1300 i7-7700hq+1060 6g吃鸡神器,赠送鼠标键盘三件套！！！！！",
          price: "6999"
        }
      ]
    };
  },
  computed:{
    cartNum(){
      return this.$store.state.cartGoods;
    }
  },
  methods: {
    onSearch() {},
    onCancel() {},
    onLogin() {},
    userPage() {
      let vm = this;
      vm.$router.push("/userIndex");
    },
    checkTime(i) {
      //将0-9的数字前面加上0，例1变为01
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    },
    countdown() {
      let vm = this;
      setInterval(function() {
        vm.seckill_now = new Date().getHours();
        let nHour = new Date().getHours() + 1;
        let time = new Date(2018, 12, 6, nHour, 0, 0) - new Date(); //计算剩余的毫秒数
        let hours = parseInt((time / 1000 / 60 / 60) % 24, 10); //计算剩余的小时
        let minutes = parseInt((time / 1000 / 60) % 60, 10); //计算剩余的分钟
        let seconds = parseInt((time / 1000) % 60, 10); //计算剩余的秒数
        vm.hours = vm.checkTime(hours);
        vm.minutes = vm.checkTime(minutes);
        vm.seconds = vm.checkTime(seconds);
      }, 1000);
    },
    // floorTabbar
    goClasses() {
      // let vm = this;
      // vm.$router.push("/floorTabbar/classes");
      console.log(123);
    }
  },
  created: function() {
    let vm = this;
    // this.$store.commit("getQuery");
    // this.$store.dispatch("getQuery").then(res => {
    //   console.log(res.data);
    // });
    fetchGet("https://api.m.jd.com/?functionId=nineNine&body={%22pageNum%22:%221%22,%22pageSize%22:%2210%22}&client=nc&clientVersion=1.0.0&_=1520421251586").then(function(res){
      console.log(JSON.parse(res.text));
      let data=JSON.parse(res.text);
      vm.seckillInf=data.nineList
    })
    vm.countdown();
    if (getCookie("yuyu")) {
      vm.loginFlag = true;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.content {
  width: 100%;
  margin-bottom: 45px;
  background: #f5f5f5;
  // 导航栏
  .top-search {
    width: 100%;
    background: linear-gradient(#000, rgba(0, 0, 0, 0));
    z-index: 100;
    position: fixed;
    top: 0px;
    left: 0px;
    .search-box {
      .van-search__input-wrap {
        width: 84%;
        height: 27px;
        padding: 5px 24px 8px 35px;
      }
      .van-search__action {
        width: 16%;
        .login {
          // padding: 0 10px;
          text-align: center;
          .loginFont {
            color: #fff;
            font-size: 1rem;
          }
          .userIcon {
            color: #fff;
            font-size: 1.25rem;
          }
        }
      }
    }
    .search-box :nth-child(1) {
      border-radius: 50px;
    }
  }
  // 轮播图
  .swipe {
    width: 100%;
    .swipeImg {
      width: 100%;
      height: 186px;
      display: block;
      overflow: hidden;
    }
  }
  // 商品浏览
  .middle {
    width: 100%;
    .classes {
      width: 100%;
      height: 70px;
      padding: 10px 0;
      background: #fff;
      .classesSpan {
        width: 20%;
        float: left;
        font-size: 12px;
        text-decoration: none;
        color: #666;
        text-align: center;
        display: block;
        padding-bottom: 10px;
      }
    }
    // 商品秒杀
    .seckill-floor {
      width: 100%;
      height: 170px;
      background: #bbb;
      .title {
        width: 100%;
        height: 30px;
        background: #fff;
        .titleFont {
          font-size: 14px;
          font-weight: bold;
          font-style: italic;
          color: #f23030;
          padding-left: 10px;
          line-height: 27px;
        }
        .titleTime {
          padding-left: 5px;
          color: #232326;
          font-size: 13px;
          font-weight: bold;
        }
        .time {
          position: absolute;
          right: 6px;
          line-height: 27px;
          color: #232326;
          font-size: 14px;
        }
      }
      .seckill {
        width: 100%;
        height: 140px;
        background: #fff;
        overflow: auto;
        position: relative;
        .seckillContent {
          min-width: 1050px;
          height: 100%;
          position: absolute;
          // overflow: hidden;
          .recommend {
            .recommendList {
              width: 120px;
              background: #fff;
              text-align: center;
              float: left;
              img {
                width: 100px;
                height: 86px;
              }
              .price {
                color: red;
                font-weight: bold;
                font-size: 15px;
                display: block;
              }
              .oldPrice {
                color: #686868;
                font-size: 14px;
                line-height: 12px;
                margin: 4px 0px 11px 0px;
                text-align: center;
                padding: 0 2px;
                display: inline-block;
                position: relative;
                hr {
                  position: absolute;
                  left: 0;
                  top: 6px;
                  width: 200%;
                  height: 2px;
                  background-color: #686868;
                  transform: scale(0.5, 0.5);
                  -webkit-transform: scale(0.5, 0.5);
                  transform-origin: left top;
                  -webkit-transform-origin: left top;
                  overflow: hidden;
                }
              }
            }
          }
        }
      }
    }
    // 分类表
    .floor-module {
      width: 100%;
      .title-img {
        display: block;
        text-align: center;
        img {
          width: 50%;
        }
      }
      .container {
        width: 100%;
        height: 100%;
        background: #fff;

        .bdr-r {
          border-right: 1px solid #f5f5f5;
        }
        .introduce {
          font-size: 0.75rem;
          line-height: 1.0313rem;
          height: 0.9375rem;
          color: #ff5959;
        }
        .show-img {
          width: 100%;
          img {
            width: 4.0625rem;
            height: 4.0625rem;
            float: left;
            margin: 0.3438rem 0.4375rem 0;
          }
        }
        .twoModule {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
          .cl-50 {
            width: 50%;
            height: 7.5rem;
            float: left;
            padding-left: 3%;
            .title {
              display: inline-block;
              padding-top: 0.4rem;
            }
          }
        }
        .fourModule {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
          .cl-25 {
            width: 25%;
            height: 7.5rem;
            float: left;
            padding: 0.4063rem 0 0.3125rem 0.625rem;
            .title {
              display: inline-block;
              padding-top: 0.4rem;
            }
          }
        }
      }
    }
    // 好货推荐
    .love-floor {
      background-color: #f0f2f5;
      overflow: hidden;
      //  height: 200px;
      .floor-title {
        width: 100%;
        text-align: center;
        font-size: 15px;
        margin: 14px 5px;
        .text {
          color: #bbb;
          .iconfont {
            color: rgb(255, 102, 97);
          }
        }
      }
      .love-list {
        width: 100%;
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
          position: relative;
          .similar-product {
            background-color: white;
            padding-bottom: 6px;
            font-size: 0;
            img {
              width: 11.5rem;
              height: 11.5rem;
            }
            .title {
              background: #fff;
              span {
                height: 33px;
                font-size: 13px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                word-break: break-word;
                color: #666666;
                margin-top: 5px;
                line-height: 17px;
                margin-bottom: 3px;
                padding: 0 8px;
              }
            }
            .price {
              color: #f23030;
              display: inline-block;
              padding: 5px 0px 8px 8px;
              font-size: 18px;
            }
          }
        }
      }
    }
  }
  // 底部floor
  .van-tabbar {
    height: 40px;
    box-shadow: 0 0 10px 0 rgba(155, 143, 143, 0.6);
    .van-tabbar-item__icon {
      font-size: 15px;
    }
  }
}
</style>
