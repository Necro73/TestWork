import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: []
  },
  getters: {
    allUsers: (state) => state.users
  },
  mutations: {
    FETCH_USERS(state, users) {
      state.users = users
    }
  },
  actions: {
    fetchUsers({ commit }) {
      fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json())
          .then((json) => {
            commit("FETCH_USERS", json);
          })
          .catch((error) => {
            console.log(error.statusText)
          });
    }
  }
})