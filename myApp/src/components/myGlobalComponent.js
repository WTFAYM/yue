import Header from './Header.vue'
import Footer from './footer.vue'
import Swipe from './swipe.vue'
import statuBar from './statuBar.vue'
import detailHeader from './detailHeader.vue'

export default {
  install(Vue) {
    Vue.component('appHeader', Header);
    Vue.component('appFooter', Footer);
    Vue.component('appSwipe', Swipe);
    Vue.component('statuBar', statuBar);
    Vue.component('detailHeader', detailHeader);
  }
};
