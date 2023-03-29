import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    jwt_token: "",
    id: "",
    gender: 1,
  },
  getters: {
    getState(state){
      return state;
    },
  },
  mutations: {
    setToken(state,payload) {
      state.isLogin = payload.isLogin;
      state.jwt_token = payload.jwt_token;
      state.id = payload.id;
    },
    isLoginTrue(state) {
      state.isLogin = true;
    },
    isLoginFalse(state) {
      state.isLogin = false;
    },
  },
  actions: {
    setAuth(context, options) {
      context.commit('setToken', {
        jwt_token: options.jwt_token,
        isLogin: options.isLogin,
        id: options.id,
      })
    }
  },
  modules: {
  }
});
