import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/index'

// userPage
import Login from '@/components/userPage/login'
import UserIndex from '@/components/userPage/userIndex'
import userIndent from '@/components/userPage/userIndent'
import UserSet from '@/components/userPage/userSet'

// goodsPage
import Goods from '@/components/goodsPage/goods'
import Store from '@/components/goodsPage/store'
import GoodsList from '@/components/goodsPage/goodsList'
import StoreInf from '@/components/goodsPage/storeInf'

//floorTabbar
import Classes from '@/components/floorTabbar/classes'
import ShoppingCart from '@/components/floorTabbar/shoppingCart'
//goodsList

Vue.use(Router)
    // Vue.use(Checkbox).use(CheckboxGroup)
Router.prototype.goBack = function() {
    this.isBack = true
    window.history.go(-1)
}

export default new Router({
    routes: [{
            path: '/',
            name: 'index',
            component: Index
        }, {
            path: '/goodsList/goods',
            name: 'goods',
            component: Goods
        }, {
            path: '/login',
            name: 'login',
            component: Login
        }, {
            path: '/userIndex',
            name: 'userIndex',
            component: UserIndex
        }, {
            path: '/userIndex/set',
            name: 'userSet',
            component: UserSet
        },{
            path: '/userIndent',
            name: 'userIndent',
            component: userIndent
        },
        {
            path: '/floorTabbar/classes',
            name: 'classes',
            component: Classes
        },
        {
            path: '/floorTabbar/shoppingCart',
            name: 'shoppingCart',
            component: ShoppingCart

        }, {
            path: '/goodsList',
            name: 'goodsList',
            component: GoodsList
        },{
            path: '/store',
            name: 'Store',
            component: Store
        },{
            path: '/store/storeInf',
            name: 'storeInf',
            component: StoreInf
        }


    ]
})