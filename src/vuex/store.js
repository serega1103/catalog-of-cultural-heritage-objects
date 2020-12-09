import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    heritageObjects: null,
    mapInstance: null
  },
  mutations: {
    SET_HERITAGEOBJECTS_TO_STATE: (state, heritageObjects) => {
      state.heritageObjects = heritageObjects;
    },
    // APPEND_HERITAGEOBJECT_TO_STATE: (state, heritageObject) => {
    //   state.heritageObjects.push(heritageObject);
    // },
    // REMOVE_HERITAGEOBJECT_FROM_STATE: (state, id) => {
    //   state.heritageObjects = state.heritageObjects.splice(id, 1);
    // },
    // UPDATE_HERITAGEOBJECT_IN_STATE: (state, updatedHeritageObject) => {
    //   state.heritageObjects = state.heritageObjects.filter();
    //   const index = state.heritageObjects.findIndex(heritageObject => heritageObject.id === updatedHeritageObject.id);
    //     if(index !== -1) {
    //         state.tasks.splice(index, 1, updatedHeritageObject);
    //     }
    // },
    SET_MAP_INSTANCE: (state, mapInstance) => {
      state.mapInstance = mapInstance;
    }
  },
  actions: {
    GET_HERITAGEOBJECTS_FROM_DB({commit}) {
      return axios('http://127.0.0.1:3000/test/1', {
        method: "GET"
      })
      .then((heritageObjects) => {
        commit('SET_HERITAGEOBJECTS_TO_STATE', heritageObjects.data);
        return heritageObjects;
      })
      .catch((error) => {
        console.log(error);
        return error;
      })
    },
    APPEND_HERITAGEOBJECT_TO_DB({dispatch}) {
      return axios('http://127.0.0.1:3000/test/', {
        method: "POST",
        data: {
          name: "",
          description: ""
        }
      })
      .then((heritageObject) => {
        dispatch('GET_HERITAGEOBJECTS_FROM_DB')
        return heritageObject.data;
      })
      .catch((error) => {
        console.log(error);
        return error;
      })
    },
    REMOVE_HERITAGEOBJECT_FROM_DB({dispatch}, id) {
      return axios('http://127.0.0.1:3000/test/' + id, {
        method: "DELETE"
      })
      .then((heritageObject) => {
        dispatch('GET_HERITAGEOBJECTS_FROM_DB')
        return heritageObject;
      })
      .catch((error) => {
        console.log(error);
        return error;
      })
    },
    EDIT_HERITAGEOBJECT_IN_DB({dispatch}, heritageObject) {
      return axios('http://127.0.0.1:3000/test/' + heritageObject._id, {
        method: "PATCH",
        data: {
          name: heritageObject.name,
          description: heritageObject.description
        }
      })
      .then((heritageObjects) => {
        dispatch('GET_HERITAGEOBJECTS_FROM_DB')
        return heritageObjects;
      })
      .catch((error) => {
        console.log(error);
        return error;
      })
    }


    // GET_HERITAGEOBJECTS_FROM_DB({commit}) {
    //   return axios('http://127.0.0.1:3000/test/1', {
    //     method: "GET"
    //   })
    //   .then((heritageObjects) => {
    //     commit('SET_HERITAGEOBJECTS_TO_STATE', heritageObjects.data);
    //     return heritageObjects;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     return error;
    //   })
    // },
    // APPEND_HERITAGEOBJECT_TO_DB({commit}) {
    //   return axios('http://127.0.0.1:3000/test/', {
    //     method: "POST",
    //     data: { name: "", description: "" }
    //   })
    //   .then((heritageObject) => {
    //     commit('APPEND_HERITAGEOBJECT_TO_STATE', heritageObject.ops.data);
    //     return heritageObject;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     return error;
    //   })
    // },
    // REMOVE_HERITAGEOBJECT_FROM_DB({commit}, id) {
    //   return axios('http://127.0.0.1:3000/test/' + id, {
    //     method: "DELETE"
    //   })
    //   .then((heritageObject) => {
    //     commit('REMOVE_HERITAGEOBJECT_FROM_STATE', id);
    //     return heritageObject;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     return error;
    //   })
    // },
    // EDIT_HERITAGEOBJECT_IN_DB({commit}, heritageObject) {
    //   var updatedHeritageObject = heritageObject;
    //   updatedHeritageObject
    //   return axios('http://127.0.0.1:3000/test/' + heritageObject._id, {
    //     method: "PATCH",
    //     data: { name: heritageObject.name, description: heritageObject.description }
    //   })
    //   .then((heritageObjects) => {
    //     commit('UPDATE_HERITAGEOBJECT_IN_STATE', heritageObjects.data);
    //     return heritageObjects;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     return error;
    //   })
    // }
  },
  getters: {
    HERITAGEOBJECTS(state) {
      return state.heritageObjects;
    },
    HERITAGEOBJECT: (state) => (id) => {
      return state.heritageObjects.find(heritageObject => heritageObject._id === id)
    },
    MAPMARKERS(state) {
      return state.mapMarkers;
    }
  }
});

export default store;
