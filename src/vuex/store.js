import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    heritageObjects: [],
    mapInstance: null,
    mapMarkers: []//,
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
    }//,
    //SET_FETCHING_MAPMARKERS: (state, fetchingMapMarkers) => {
    //  state.fetchingMapMarkers = fetchingMapMarkers;
    //}
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
