// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Components from './components/myGlobalComponent'
import filters from './filters'
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
Vue.use(filters);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})

// document.addEventListener('deviceready', function() {
//     new Vue({
//         el: '#app',
//         router,
//         store,
//         template: '<App/>',
//         components: { App }
//     });
//     // window.plugins.jPushPlugin.init();
//     // window.plugins.jPushPlugin.setDebugMode(true);
//     // window.plugins.jPushPlugin.getRegistrationID(function(registrationid){
//     //      //将获取到的id存入服务端
//     //          alert(registrationid);//这里可能获取不到，因为有网络延迟，可不在此处获取。下面会介绍。
//     //          });
//     // window.navigator.splashscreen.hide();
// }, false);
