import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import toast from 'components/common/toast/index'

Vue.config.productionTip = false;

//安装toast
Vue.use(toast)

Vue.prototype.$bus = new Vue();
new Vue({
  render: h => h(App),
  router,
  store,
  toast
}).$mount('#app')
