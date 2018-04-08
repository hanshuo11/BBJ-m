<template>
  <div class="goods">

    <van-nav-bar  leftText="返回" >
      <van-icon class="goback" @click="goBack" name="arrow" slot="left" />
    </van-nav-bar>

    <van-swipe :autoplay="3000" class="goods-swipe">
      <van-swipe-item v-for="(thumb,index) in goodes.thumb" :key="index">
        <img v-lazy="thumb" >
      </van-swipe-item>
    </van-swipe>

    <van-cell-group>
      <van-cell>
        <div class="goods-title">{{ goodes.title }}</div>
        <div class="goods-price">{{ formatPrice(goodes.price) }}</div>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="10">运费：{{ goodes.fre }}</van-col>
        <van-col span="14">剩余：{{ goodes.remain }}</van-col>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="goods-cell-group" >
      <van-cell title="选择商品属性" isLink @click="showBase=true"></van-cell>
    </van-cell-group>
    
    <van-cell-group class="goods-cell-group">
      <van-cell  icon="shop" to="/store" isLink>
        <template slot="title">
          <span class="van-cell-text">hanshuo的店</span>
          <van-tag type="danger">官方</van-tag>
        </template>
      </van-cell>
      <van-cell value="商品详情" isLink />
    </van-cell-group>

    
    <van-sku
      v-model="showBase"
      :sku="sku"
      :goods="goods"
      :goods-id="goodes.id"
      :hide-stock="sku.hide_stock"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
      
    />
    
    <van-goods-action>
      <van-goods-action-mini-btn icon="cart" to="/floorTabbar/shoppingCart" text="购物车" :info="getGoodsNum" />
      <van-goods-action-mini-btn icon="shop" to="/store" text="店铺" />
      <van-goods-action-big-btn text="加入购物车" @click="showBase=true"/>
      <van-goods-action-big-btn text="立即购买" @click="showBase=true" primary />
    </van-goods-action>
  </div>
</template>

<script>
import {
  Tag,
  Sku,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  NavBar,
  SwipeItem,
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn,
  Dialog
} from "vant";

export default {
  name: "index",
  components: {
    [NavBar.name]: NavBar,
    [Dialog.name]: Dialog,
    [Tag.name]: Tag,
    [Col.name]: Col,
    [Sku.name]: Sku,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionBigBtn.name]: GoodsActionBigBtn,
    [GoodsActionMiniBtn.name]: GoodsActionMiniBtn
  },
  data() {
    return {
      showBase: false,
      goodsNum: "15",
      goodes: {
        id: "2259",
        title: "美国伽力果（约680g/3个）",
        price: 2680,
        fre: "免运费",
        remain: 19,
        thumb: [
          "https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg",
          "https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg"
        ]
      },
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "规格", // skuKeyName：规格类目名称
            v: [
              {
                id: "30349", // skuValueId：规格值 id
                name: "红色", // skuValueName：规格值名称
                imgUrl: "https://img.yzcdn.cn/2.jpg" // 规格类目图片，只有第一个规格类目可以定义图片
              },
              {
                id: "1215",
                name: "蓝色",
                imgUrl: "https://img.yzcdn.cn/2.jpg"
              }
            ],
            k_s: "s1" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 1, // skuId，下单时后端需要
            price: 11100, // 价格（单位分）
            s1: "30349", // 规格类目 k_s 为 s1 的对应规格值 id
            stock_num: 1110 // 当前 sku 组合对应的库存
          },
          {
            id: 1, // skuId，下单时后端需要
            price: 11100, // 价格（单位分）
            s1: "1215", // 规格类目 k_s 为 s1 的对应规格值 id
            // s2: "1215", // 规格类目 k_s 为 s2 的对应规格值 id
            // s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          }
        ],
        price: "100", // 默认价格（单位元）
        stock_num: 21, // 商品总库存
        // collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        hide_stock: false // 是否隐藏剩余库存
      },
      goods: {
        // 商品标题
        title: "测试商品",
        // 默认商品 sku 缩略图
        picture: "https://img.yzcdn.cn/2.jpg"
      }
    };
  },
  computed: {
    getGoodsNum() {
      return this.$store.getters.getGoodsNum.toString();
    }
  },
  methods: {
    goBack() {
      this.$router.goBack();
    },
    formatPrice() {
      return "¥" + (this.goodes.price / 100).toFixed(2);
    },
    onBuyClicked(item) {
      console.log(item);
    },
    onAddCartClicked(item) {
      var data= item.selectedSkuComb;
      data.title = this.goodes.title;
      // console.log(item.selectedSkuComb);
      // console.log(data);
      this.$store.commit("addCart",data);
      console.log(res)
      // if (!res) {
      //   Dialog.alert({
      //     message: "请勿重复添加"
      //   });
      // }
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
.goods {
  padding-bottom: 50px;
  &-swipe {
    img {
      width: 100%;
      height: 10%;
      display: block;
    }
  }
  &-title {
    font-size: 16px;
  }
  &-price {
    color: #f44;
  }
  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px 5px 0;
  }
  &-cell-group {
    margin: 15px 0;
    .van-cell__value {
      color: #999;
    }
  }
  .car {
    font-size: 1.8rem;
  }
}
</style>
