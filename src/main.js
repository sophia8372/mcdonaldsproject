import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

// 1. vue-router
// 1-1. 安裝vue-router插件
Vue.use(VueRouter);

// 1-2. 導入組件
import Goods from "./components/Goods/Goods"
import Ratings from "./components/Ratings/Ratings"
import Seller from "./components/Seller/Seller"

// 1-3. 定義路由
const routes = [
    {
        path: '/',
        // 重定向
        redirect: '/goods'
    },
	{
		path:'/goods',
		component: Goods
	},
	{
		path:'/ratings',
		component: Ratings
	},
	{
		path:'/seller',
		component: Seller
	}
];

// 1-4. 創建 router 實例
const router = new VueRouter({
    routes,
})

new Vue({
  render: h => h(App),
  // 1-5. 創建和掛載
  router: router,
}).$mount('#app')


// 2. axios
const express = require('express');
const app = express();

// 2-1. 讀取json數據
var goods = require('../data/01-商品页(点菜).json');
var ratings = require('../data/02-商品页(评价).json');
var seller = require('../data/03-商品页(商家).json');

// 2-2. 定義路由
var dataRoutes = express.Router();

// 2-3. 編寫接口
dataRoutes.get('/goods', (req,res) => {
    res.json(goods);
});
dataRoutes.get('/ratings', (req,res) => {
    res.json(ratings);
});
dataRoutes.get('/seller', (req,res) => {
    res.json(seller);
});

// 2-4. 中間值
app.use('/api',dataRoutes);