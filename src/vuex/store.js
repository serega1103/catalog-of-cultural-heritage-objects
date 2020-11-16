import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    heritageObjects: []
  },
  mutations: {
    SET_HERITAGEOBJECTS_TO_STATE: (state, heritageObjects) => {
      state.heritageObjects = heritageObjects;
    }
  },
  actions: {
    GET_HERITAGEOBJECTS_FROM_API({commit}) {
      return axios('http://localhost:3000/heritageObjects', {
        method: "GET"
      })
      .then((heritageObjects ) => {
        commit('SET_HERITAGEOBJECTS_TO_STATE', heritageObjects.data);
        return heritageObjects;
      })
      .catch((error) => {
        console.log(error);
        return error;
      })
    }
  },
  getters: {
    HERITAGEOBJECTS(state) {
      return state.heritageObjects;
    }
  }
});

export default store;
