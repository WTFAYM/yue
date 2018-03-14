const mutations = {
  savaUserInfo: (state, info) => {
    state.userInfo = info;
  },
  setSelected: (state, selected) => {
    state.selected = selected;
  }
};
export default mutations
