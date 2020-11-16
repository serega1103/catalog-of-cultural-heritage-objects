import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let store = new Vuex.Store({ options: {
  state: {
    chobjects: []
  },
  mutations: {},
  actions: {},
  getters: {
    CHOBJECTS(state) {
      return state.chobjects;
    }
  }
}});

export default store;
