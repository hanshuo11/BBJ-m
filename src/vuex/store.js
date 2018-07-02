import Vuex from 'vuex'
import Vue from 'vue'
import { setTimeout } from 'timers';
Vue.use(Vuex)

const state = {
    cartGoods: [
        {
            goods_id: 1,
            goods_store_name: "进口香蕉",
            desc: "黑色",
            goods_newPrice: "200",
            num: 1,
            goods_show_img:
                "https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg"
        },
        // {
        //     goods_id: 2,
        //     goods_store_name: "陕西蜜梨",
        //     desc: "约600g",
        //     goods_newPrice: 690,
        //     num: 1,
        //     goods_show_img:
        //         "https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg",
        // },
        // {
        //     goods_id: 3,
        //     goods_store_name: "美国伽力果",
        //     desc: "约680g/3个",
        //     goods_newPrice: 2680,
        //     num: 1,
        //     goods_show_img:
        //         "https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg"
        // }
    ],
    searchKey: "",
    goods_id: ""
}

const mutations = {
    addCart: function (state, data) {
        console.log(data);
        var arr = [...state.cartGoods];
        arr.map(item => {
            if (item.goods_id == data.goods_id) return false;
        })
        state.cartGoods.push(data);
        console.log(state.cartGoods);
    },
    deleteGoods: function (state, index) {
        state.carGoods.splice(index, 1);
    },
    setSearchKey: function (state, key) {
        state.searchKey = key;
    },
    setGoodsID: function (state, id) {
        state.goods_id = id;
    },
    // getQueryB: function (state) {
    //     console.log(123123123123123);
    // }
}

const actions = {
    // getQuery({ commit, state }) {
    //     return new Promise((resolve, reject) => {
    //         commit("getQueryA");
    //         setTimeout(() => {
    //             resolve(state);
    //         }, 0)

    //     })
    // }
}


const getters = {
    getGoodsNum: state => {
        return state.cartGoods.length;
    }

}








export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})