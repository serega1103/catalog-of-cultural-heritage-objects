import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    heritageObjects: [],
    cart: []
  },
  mutations: {
    SET_HERITAGEOBJECTS_TO_STATE: (state, heritageObjects) => {
      state.heritageObjects = heritageObjects;
    },
    SET_CART: (state, heritageObject) => {
      if (state.cart.length) {
        let isHeritageObjectExists = false;
        state.cart.map(function (item) {
          if (item.title === heritageObject.title) {
            isHeritageObjectExists = true;
            item.quantity++
          }
        })
        if (!isHeritageObjectExists) {
          state.cart.push(heritageObject)
        }
      } else {
        state.cart.push(heritageObject)
      }
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1);
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
    },
    ADD_TO_CART({commit}, heritageObject) {
      commit('SET_CART', heritageObject);
    },
    DELETE_FROM_CART({commit}, index) {
      commit('REMOVE_FROM_CART', index);
    }
  },
  getters: {
    HERITAGEOBJECTS(state) {
      return state.heritageObjects;
    },
    CART(state) {
      return state.cart;
    }
  }
});

export default store;
