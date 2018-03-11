import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getter from './getters'

Vue.use(Vuex);
const state = {
  selected: 0,
  userInfo: null,
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getter
});
