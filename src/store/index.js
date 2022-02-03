import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {_id: 0.3384013680564564, title: 'Buy milk', selected: false},
      {_id: 0.3384013680567534, title: 'Buy bread', selected: false},
      {_id: 0.3384013680105042, title: 'Buy candy', selected: false},
    ]
  },
  mutations: {
    ADD_TODOS (state, payload) {
          console.log(payload)
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
