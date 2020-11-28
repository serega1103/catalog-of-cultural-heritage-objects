import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    heritageObjects: [],
    mapInstance: null,
    mapMarkers: [],
    form: {}//,
    //fetchingMapMarkers: null
  },
  mutations: {
    SET_HERITAGEOBJECTS_TO_STATE: (state, heritageObjects) => {
      state.heritageObjects = heritageObjects;
    },
    SET_MAP_INSTANCE: (state, mapInstance) => {
      state.mapInstance = mapInstance;
    },
    SET_MAPMARKERS_TO_STATE: (state, mapMarkers) => {
      state.mapMarkers = mapMarkers;
    },
    SET_FORM_TO_STATE: (state, { key, value }) => {
      state.form[key] = value;
    },
    //,
    //SET_FETCHING_MAPMARKERS: (state, fetchingMapMarkers) => {
    //  state.fetchingMapMarkers = fetchingMapMarkers;
    //}
  },
  actions: {
    GET_HERITAGEOBJECTS_FROM_API({commit}) {
      return axios('http://127.0.0.1:3000/heritageObjects/', {
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
    GET_MAPMARKERS_FROM_API({commit}) {
      return axios('http://localhost:3000/mapMarkers', {
        method: "GET"
      })
      .then((mapMarkers ) => {
        commit('SET_MAPMARKERS_TO_STATE', mapMarkers.data);
        return mapMarkers;
      })
      .catch((error) => {
        console.log(error);
        return error;
      })
    },
    async CREATE_ITEM(context) {
      const response = await fetch('http://localhost:5000/api/heritageobjects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(context.state.form)
      });
      const responseJson = await response.json();
      console.log('response', responseJson);
    }
  },
  getters: {
    HERITAGEOBJECTS(state) {
      return state.heritageObjects;
    },
    MAPMARKERS(state) {
      return state.mapMarkers;
    }
  }
});

export default store;
