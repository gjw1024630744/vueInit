import Vue from 'vue'
import App from './App.vue'
import router from './assets/js/router'
import axios from 'axios'

import rem from './assets/js/rem'  //--------- rem
import {post,fetch,patch,put} from './assets/js/http' //---------封装axios请求函数
import api from './assets/js/api' //---------api 接口集引入
import store from './assets/js/store'   //引入状态管理 store
// import Base from './assets/js/baseFun.js'         //---------自定义的公共函数和公共请求方法

//定义全局变量
Vue.prototype.$post=post;   //----------post 请求
Vue.prototype.$get=fetch;   //----------get 请求
Vue.prototype.$patch=patch;   //----------patch 请求
Vue.prototype.$put=put;   //----------put 请求
Vue.prototype.api=api;   //----------api 请求地址集

new Vue({
  router,
  axios,
  store,          //-----全局变量
  render: h => h(App)
}).$mount('#app')
