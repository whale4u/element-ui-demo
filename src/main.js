import Vue from 'vue';
import ElementUI from 'element-ui';
import router from './router'   //引入router
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import axios from 'axios'


Vue.prototype.$axios = axios
// axios.defaults.baseURL = '/api'
axios.defaults.baseURL = '/'
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')