import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/app.scss'
import WindowSizeMixin from "./Mixins/WindowSizeMixin";
import PerfectScrollbar from 'vue2-perfect-scrollbar'

Vue.mixin(WindowSizeMixin);
Vue.use(PerfectScrollbar)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
