import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foreman: '',
    user:''
  },
  mutations: {
    setforeman(state, payload) {
      state.foreman = payload;
    },
    setuser(state, payload) {
      state.user = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
