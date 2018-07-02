<template>
  <div id="app">
      <router-view/>    
  </div>
</template>

<script>

export default {
  name: "app",
  data() {
    return {};
  },
  methods: {},
  created: function() {
    if (getCookie("yuyu")) {
      this.loginFlag = true;
    }
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: 'iconfont';  /* project id 481089 */
  src: url('//at.alicdn.com/t/font_481089_n1xyap3ilw9ltyb9.eot');
  src: url('//at.alicdn.com/t/font_481089_n1xyap3ilw9ltyb9.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_481089_n1xyap3ilw9ltyb9.woff') format('woff'),
  url('//at.alicdn.com/t/font_481089_n1xyap3ilw9ltyb9.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_481089_n1xyap3ilw9ltyb9.svg#iconfont') format('svg');
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .iconfont {
    font-family: "iconfont" !important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
  .goback {
    font-size: 18px;
    transform: rotate(180deg);
    color: #333;
    vertical-align: middle;
  }
  .van-nav-bar {
    height: 42px;
  }
  .bdr-bottom {
    border-bottom: 1px solid #f5f5f5;
  }
  .store {
    .van-tabs__nav--line {
      height: 35px;
      .van-tabs__nav-bar {
        height: 0;
      }
      .van-tab{
        line-height: 36px;
      }
    }
  }
}
</style>
