import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    sidebar_collapse: false,
    tagsListLen: null,
    MSG_CODE_OK: 0,
    apiBase: '/tst-api'
  },
  mutations: {
    // 监听navMenu 导航菜单的隐藏显示
    changeCollapse(state, bool) {
      state.sidebar_collapse = bool;
    },
    monitorTagsList(state, num) {
      state.tagsListLen = num
    }
  },
  actions: {},
  modules: {},
})
