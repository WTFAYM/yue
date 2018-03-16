// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Components from './components/myGlobalComponent'
import touch from 'vue-directive-touch'
import VueTouchRipple from 'vue-touch-ripple'
import 'vue-touch-ripple/dist/vue-touch-ripple.css'
import store from './store/index'
import axios from 'axios'

Vue.prototype.$axios = axios;

Vue.use(VueTouchRipple);
Vue.use(MintUI);
Vue.use(touch);
Vue.use(Components);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
