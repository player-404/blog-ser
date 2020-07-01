import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Select, Row, Col } from 'element-ui';

Vue.config.productionTip = true
Vue.use(Row)
  .use(Col);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
