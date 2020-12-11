import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MyServerHttp from '@/plugins/http.js'

import '@/assets/css/reset.css'

// 使用vue插件
Vue.use(MyServerHttp);
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
