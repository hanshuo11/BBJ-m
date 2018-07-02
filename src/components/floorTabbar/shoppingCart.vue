<template>
  <div>
     <van-nav-bar title="购物车" leftText="返回" >
       <van-icon class="goback" @click="goBack" name="arrow" slot="left" />
     </van-nav-bar>

     <!-- 购物车清单 -->
    <van-checkbox-group class="card-goods" v-model="checkedGoods">
      <van-checkbox
        class="card-goods__item"
        v-for="item in goodsList"
        :key="item.goods_id"
        :name="item.goods_id"
      >
        <van-card
          :title="item.goods_store_name"
          :price="formatPrice(item.goods_newPrice)"
          :thumb="item.goods_show_img"
        />
        <div @click.stop>
           <van-stepper v-model="item.num" />
           <span class="deleteGoods" @click="deleteGoods(item.goods_id)">删除</span>
        </div>
        
      </van-checkbox>
    </van-checkbox-group>
    <van-submit-bar
      :price="totalPrice"
      :disabled="!checkedGoods.length"
      :button-text="submitBarText"
      @submit="onSubmit"
    />
  </div>
</template>

<script>
import {
  Checkbox,
  CheckboxGroup,
  Card,
  SubmitBar,
  Tag,
  NavBar,
  Icon,
  Stepper
} from "vant";
export default {
  components: {
    [NavBar.name]: NavBar,
    [Tag.name]: Tag,
    [Icon.name]: Icon,
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [SubmitBar.name]: SubmitBar,
    [CheckboxGroup.name]: CheckboxGroup,
    [Stepper.name]: Stepper
  },
  data() {
    return {
      checkedGoods: [],
      goodsList: []
    };
  },
  computed: {
    submitBarText() {
      const count = this.checkedGoods.length;
      return "结算" + (count ? `(${count})` : "");
    },
    totalPrice() {
      var _this = this;
      return this.goodsList.reduce(function(total, item) {
        return (
          total +
          (_this.checkedGoods.indexOf(item.goods_id) !== -1
            ? item.goods_newPrice * item.num * 100
            : 0)
        );
      }, 0);
    }
  },
  methods: {
    goBack() {
      this.$router.goBack();
    },
    formatPrice(price) {
      // console.log(price)
      return (price / 1).toFixed(2);
    },
    onSubmit() {
      var _this = this;
      var userData = JSON.parse(sessionStorage.getItem("user"));
      // console.log(this.checkedGoods);
      postJSON("/user/buyGoods", {
        sum_price: _this.totalPrice / 100,
        goodsList: _this.checkedGoods,
        indent_number: _this.indent_number(),
        user_id: userData.user_id
      }).then(function(res) {
        if (res.body) {
          var arrlength=_this.checkedGoods.length;
          for(var i=0;i<arrlength;i++ ){
            _this.deleteGoods(_this.checkedGoods[i]);
          }
        }
      });
    },
    deleteGoods(id) {
      let gId = id;
      let index = this.checkedGoods.indexOf(gId);
      for (let i = 0; i < this.goodsList.length; i++) {
        if (this.goodsList[i].goods_id == gId) {
          this.goodsList.splice(i, 1);
        }
      }
      this.checkedGoods.splice(index, 1);
    },
    indent_number() {
      var outTradeNo = ""; //订单号
      for (var i = 0; i < 5; i++) {
        outTradeNo += Math.floor(Math.random() * 10);
      }
      outTradeNo = Date.parse(new Date()) + outTradeNo; //时间戳，用来生成订单号。
      return outTradeNo;
    }
  },
  mounted: function() {
    this.goodsList = this.$store.state.cartGoods;
  }
};
</script>

<style lang="less">
.card-goods {
  padding: 10px 0;
  background-color: #fff;

  &__item {
    position: relative;
    background-color: #fafafa;
    .van-checkbox__input {
      top: 50%;
      left: 15px;
      margin-top: -10px;
      position: absolute;
    }
    .van-checkbox__label {
      margin: 0;
      width: 100%;
      padding-left: 35px;
      box-sizing: border-box;
    }
    .van-card__price {
      color: #f44;
    }
  }
  .card-goods__item {
    .van-stepper {
      position: absolute;
      bottom: 2.2rem;
      right: 0.2rem;
    }
    .van-checkbox--round {
      position: absolute;
      top: 2.2rem;
      left: 0.8rem;
    }
  }

  .deleteGoods {
    font-size: 0.8rem;
    display: inline-block;
    position: absolute;
    bottom: 0.8rem;
    right: 0.4rem;
    color: #999;
  }
}
</style>