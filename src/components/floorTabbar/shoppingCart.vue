<template>
  <div>
     <van-nav-bar title="购物车" leftText="返回" >
       <van-icon class="goback" @click="goBack" name="arrow" slot="left" />
     </van-nav-bar>

     <!-- 购物车清单 -->
    <van-checkbox-group class="card-goods" v-model="checkedGoods">
      <van-checkbox
        class="card-goods__item"
        v-for="item in goods"
        :key="item.id"
        :name="item.id"
      >
        <van-card
          :title="item.title"
          :desc="item.desc+' 规格：'+item.num"
          :price="formatPrice(item.price)"
          :thumb="item.thumb"
        />
        <div @click.stop>
           <van-stepper v-model="item.num" />
           <span class="deleteGoods" @click="deleteGoods(item.id)">删除</span>
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
      checkedGoods: []
    };
  },
  computed: {
    submitBarText() {
      const count = this.checkedGoods.length;
      return "结算" + (count ? `(${count})` : "");
    },
    totalPrice() {
      return this.goods.reduce(
        (total, item) =>
          total +(this.checkedGoods.indexOf(item.id) !== -1? item.price * item.num: 0),0
          );
    },
    goods(){
      return this.$store.state.cartGoods;
    }
  },
  methods: {
    goBack() {
      this.$router.goBack();
    },
    formatPrice(price) {
      return (price / 100).toFixed(2);
    },
    onSubmit() {
      console.log(this.totalPrice / 100);
    },
    deleteGoods(id) {
      let gId = id;
      let index = this.checkedGoods.indexOf(gId);
      console.log("坐标：" + index);
      for (let i = 0; i < this.goods.length; i++) {
        if (this.goods[i].id == gId) {
          this.goods.splice(i, 1);
        }
      }
      this.checkedGoods.splice(index, 1);
    }
  },
  mounted:function(){
    // console.log(this.$store.state.carGoods);
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