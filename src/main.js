import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

// 1. 安裝vue-router插件
Vue.use(VueRouter);

// 2. 導入組件
import Goods from "./components/Goods/Goods"
import Ratings from "./components/Ratings/Ratings"
import Seller from "./components/Seller/Seller"

// 3. 定義路由
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

// 4. 創建 router 實例
const router = new VueRouter({
    routes,
})

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')