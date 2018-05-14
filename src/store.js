import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    admin: ''
  },
  mutations: {
    SET_ADMIN(state, name) {
      state.admin = name
    }
  },
  actions: {

  },
  getters: {
    admin: (state) => state.admin,
    token: (state) => sessionStorage.getItem(state.admin)
    }
})
