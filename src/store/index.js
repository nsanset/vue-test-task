import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    ADD_TODOS (state, payload) {
      state.todos.push(payload)
    },
    DONE_TODOS (state, payload) {
      state.todos.splice(payload, 1)
    }
  },
  actions: {
    addTasks ({ commit }, payload) {
      commit('ADD_TODOS', payload)
    },
    doneTodos ({ commit }, payload) {
      commit('DONE_TODOS', payload)
    }
  },
  modules: {
  }
})