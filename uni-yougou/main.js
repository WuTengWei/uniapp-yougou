// #ifndef VUE3
import Vue from 'vue'
import App from './App'

// 按需导入 $http 对象
import {
	$http
} from '@escook/request-miniprogram'

// 将按需导入的 $http 挂载到 wx 顶级对象之上，方便全局调用
// 在 uni-app 项目中，可以把 $http 挂载到 uni 顶级对象之上，方便全局调用
uni.$http = $http

// 配置请求跟路径
$http.baseUrl =  'https://api-ugo-web.itheima.net'
// $http.baseUrl = 'https://www.uinav.com'

// 拦截器
// 开始请求拦截器
$http.beforeRequest = function(options) {
	uni.showLoading({
		title: "数据加载中......"
	})
}

// 请求结束拦截器
$http.afterRequest = function() {
	uni.hideLoading()
}

// 自定义header 请求头
// 请求开始之前做一些事情
// $http.beforeRequest = function (options) {
//   if (options.url.indexOf('/home/catitems') !== -1) {
//     options.header = {
//       'X-Test': 'AAA',
//     }
//   }
// }

// 挂载自定义的 $showMsg() 方法：
uni.$showToast = function(title = '数据加载失败！', duration = 1500) {
	uni.showToast({
		title: title,
		duration: duration,
		icon: 'none'
	})
}

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
import App from './App.vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
