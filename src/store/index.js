import Vue from 'vue'
import Vuex from 'vuex'
import photoModule from './photoModule'
import postModule from './postModule'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    photoModule,
    postModule,
  }
})
