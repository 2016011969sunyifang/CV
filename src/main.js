import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false

Vue.use(VueLazyload, {

  loading: '/img/vlazy.svg',


});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
