// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import util from './common/util'
// import ajax from './common/ajax'
import store from './vuex/store'
import { Lazyload } from 'vant'
// import { Dialog } from 'vant';

// Vue.use(Dialog);
Vue.use(Lazyload);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})