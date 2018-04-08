import Vuex from 'vuex'
import Vue from 'vue'
import { setTimeout } from 'timers';
Vue.use(Vuex)

const state = {
    cartGoods: [
        {
            id: 1,
            title: "进口香蕉",
            desc: "黑色",
            price: 200,
            num: 1,
            thumb:
                "https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg"
        },
        {
            id: 2,
            title: "陕西蜜梨",
            desc: "约600g",
            price: 690,
            num: 1,
            thumb:
                "https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg"
        },
        {
            id: 3,
            title: "美国伽力果",
            desc: "约680g/3个",
            price: 2680,
            num: 1,
            thumb:
                "https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg"
        }
    ]
}

const mutations = {
    addCart: function (state, data) {
        var arr=[...state.cartGoods];
        arr.map(item=>{
            if (item.id == data.id) return false;
        })
        state.carGoods=[...state.carGoods,data];
        // for(var i=0;i<state.carGoods.length;i++){
        //     console.log(123)
        // }
        // state.carGoods.forEach(function(item){

        //     // if (item.id == data.id) return false;
        //     // state.carGoods.push(data);
        // });
    },
    deleteGoods: function (state, index) {
        state.carGoods.splice(index, 1);
    }
    // getQueryA: function (state) {
    //     return postJSON("/index", { s: "hanshuo" }).then(function (res) {
    //         state.data = res.body;
    //     })
    // },
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