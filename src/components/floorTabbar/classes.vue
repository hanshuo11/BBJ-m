<template>
  <div class="classes">
    <van-nav-bar title="热门分类" leftText="返回" >
      <van-icon class="goback" @click="goBack" name="arrow" slot="left" />
    </van-nav-bar>
    <div class="classesCon">
      <ul class="list">
        
        <li class="listC bdr-bottom" v-for="(inf,index) in classesInf" :key="index">
          <router-link class="classesSpan" to="/goodsList">
            <img :src="inf.img">
            <span>{{inf.title}}</span>
          </router-link>
        </li>
        
      </ul>
    </div>
    
    
  </div>
</template>

<script>
import {
  Tag,
  NavBar,
  Icon
} from "vant";

export default {
  name: "index",
  components: {   
    [NavBar.name]: NavBar,
    [Tag.name]: Tag,
    [Icon.name]: Icon
  },
  data() {
    return {
      classesInf:[
        {
          img:"//img13.360buyimg.com/focus/jfs/t12352/319/549091054/4783/cea2850e/5a0e797dN12ac35a9.jpg",
          title:"数码3C"
        },
        {
          img:"//img13.360buyimg.com/focus/jfs/t12352/319/549091054/4783/cea2850e/5a0e797dN12ac35a9.jpg",
          title:"数码3C"
        },
        {
          img:"//img13.360buyimg.com/focus/jfs/t12352/319/549091054/4783/cea2850e/5a0e797dN12ac35a9.jpg",
          title:"数码3C"
        },
        {
          img:"//img13.360buyimg.com/focus/jfs/t12352/319/549091054/4783/cea2850e/5a0e797dN12ac35a9.jpg",
          title:"数码3C"
        },
        {
          img:"//img13.360buyimg.com/focus/jfs/t12352/319/549091054/4783/cea2850e/5a0e797dN12ac35a9.jpg",
          title:"数码3C"
        },
        {
          img:"//img13.360buyimg.com/focus/jfs/t12352/319/549091054/4783/cea2850e/5a0e797dN12ac35a9.jpg",
          title:"数码3C"
        }
      ]
    };
  },
  methods: {
    goBack(){
      console.log(1);
      this.$router.goBack()
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
.classes {
  .classesCon{
    width:100%;
    height: 39rem;
    background: #fff;
    a{
      COLOR:#666;
    }
    .list{
      width: 100%;
      height:100%;
      .listC{
        width:33.33%;
        height: 7.6rem;
        float: left;
        text-align: center;
        background: #fff;
        img{
          width:6rem;
          height:6rem;
        }
        span{
          display: block;
          font-size: 0.9rem;
        }
      }
    }
  }
}
</style>
