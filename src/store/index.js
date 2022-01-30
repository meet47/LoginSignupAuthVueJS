import { createStore } from 'vuex'
import axios from 'axios'
import router from '../router/index'

namespaced: true
export default createStore({
  state: {
    status: '',
    user: {}
  },
  mutations: {
    auth_request(state) {
      state.status = 'Loading';
    },
    auth_success(state, user) {
      state.status = 'Success'
      state.user = user
    },
    auth_error(state) {
      state.status = 'Error'
    },
  },
  actions: {
    async signup({ commit }, user) {
      commit('auth_request');
      const result = await axios.post('http://localhost:3000/user', user).catch(err => {
        commit('auth_error')
      });
      if (result.status == 201) {
        commit('auth_success', user)
        router.push("/home");
      }
    },

    async login({ commit }, user) {
      commit('auth_request')
      let result = await axios.get(`http://localhost:3000/user?email=${user.email}&password=${user.password}`).catch(err => {
        commit('auth_error', err)
      })
      if (result.status == 200 && result.data.length > 0) {
        commit('auth_success', user)
        router.push("/home");
      }
    },

  },

  modules: {
  }
})
