const mutations = {
  savaUserInfo: (state, info) => {
    state.userInfo = info;
  },
  setSelected: (state, selected) => {
    state.selected = selected;
  },
  setMsgPoint: (state, data) => {
    state.messageStore[data.key] = data.value;
  }
};
export default mutations
