<template>
  <div class="indent">
    <van-nav-bar title="订单" leftText="返回" >
      <van-icon class="goback" @click="goBack" name="arrow" slot="left" />
    </van-nav-bar>
    <div class="indent-content">
      <div class="searchIdent">
        <van-search background="rgba(242, 242, 242, 0)" class="search-box"    placeholder="商品名称/商品编号/订单号">
      </van-search>
      </div>
      <ul>
        <li class="indentInf" v-for="(item,index) in indentList" :key="index">
          <div class="indent-inf">
            <van-cell :title='"订单编号："+item.indent_number'>
              <van-icon slot="right-icon" name="delete" class="van-cell__right-icon" />
            </van-cell>
            <van-cell >
              <div>
                状 态：<span class="state">{{checkState(item.indent_state)}}</span>
              </div>
              <div>
                总 价：<span class="price">￥{{item.sum_price}}</span> 
              </div>
            </van-cell>
          </div>
          <div class="store-inf" v-for="(goods,index) in item.goodsList " :key=index>
            <van-cell-group> 
              <van-cell :title="goods.store_name" icon="shop" is-link  />
            </van-cell-group>
            <van-card
              :title="goods.goods_title"
              :desc="goods.goods_store_name"  
              num="1"
              :price="goods.goods_newPrice"
              :thumb="goods.goods_show_img"
             >
              <div slot="footer">
                <van-button size="mini" type="danger" @click="show=true">退货</van-button>
                <van-button size="mini" type="primary">确认收货</van-button>
              </div>
            </van-card>
          </div>
          <!-- <div class="operate-button">

          </div> -->
        </li>
      </ul>
    </div>
    <van-popup style="width:300px;height:300px" v-model="show">
      <van-cell-group style="margin-top:10px;">
        <van-field
          v-model="message"
          label="退货理由"
          type="textarea"
          placeholder="请输入留言"
          rows="3"
          autosize
        />
      </van-cell-group>
    </van-popup>
  </div>
</template>

<script>
import { Search, Card, NavBar, Icon, Button, Cell, CellGroup,Popup ,Field  } from "vant";

export default {
  name: "index",
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Search.name]: Search,
    [Card.name]: Card,
    [Button.name]: Button,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Popup.name]: Popup ,
    [Field.name]: Field
  },

  data() {
    return {
      indentList: [
        {
          indent_number: "123123123123",
          // 1为未付款订单、2为已付款、3为已完成、4为退货中
          indent_state: "1",
          sum_price: "148",
          goodsList: [
            {
              goods_newPrice: "148",
              store_name: "哈哈辣条店",
              goods_title: "中卫大西瓜",
              goods_show_img:
                "http://localhost:3000/uploadImag/0.0004445750712878116.png",
              store_id: "12",
              goods_store_name:"中卫压砂瓜15-16斤"
            }
          ]
        }
      ],
      userData:{},
      show:false,
      message:""
    };
  },
  computed: {
  },
  methods: {
    goBack() {
      this.$router.goBack();
    },
    checkState(state) {
      console.log(state);
      if (state == 1) {
        return "未付款";
      }
      if (state == 2) {
        return "已付款";
      }
      if (state == 3) {
        return "已完成";
      }
      if (state == 4) {
        return "退货中";
      }
    },
    getUserIndent(){
       postJSON("/user/getUserIndent", {
        user_id: this.userData.user_id
      }).then(function(res) {
        if (res.body) {
          console.log(res.body);
        }
      });
    }
  },
  mounted: function() {
    this.userData = JSON.parse(sessionStorage.getItem("user"));
    console.log(this.userData);
    this.getUserIndent();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
.indent {
  background: #e8e8ed;
  height: 100%;
  .indentInf {
    // height: 200px;
    background: #fff;
    margin-bottom: 6px;
    border-radius: 10px;
  }
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
        border-radius: 20px;
      }
    }
    .search-box :nth-child(1) {
      border-radius: 50px;
    }
  }
  .van-cell{
    padding: 5px 10px;
    color: #999;
  }
  .van-card{
    margin-top:0;
  }
  .state{
    color: #3985ff;
  }
  .price{
    color: #e4393c;
  }
}
</style>
