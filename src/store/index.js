import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: '',
    des:'',
    img: '',
    type: '',
  },
  mutations: {
    setname (state, name) {
      state.name = name
    },
    setdes (state, des) {
      state.des = des
    },
    setimg(state, img){
        state.img = img
    },
    settype(state, type){
      state.type = type
    }
  },
  actions: {
    changeCity (mtx, city) {
      mtx.commit('changeCity', city)
    }
  }
})