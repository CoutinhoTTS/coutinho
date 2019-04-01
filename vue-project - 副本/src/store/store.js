import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  show: false,
  Sshow: false
}
const mutations = {
  show (state) {
    state.show = true
  },
  hide (state) {
    state.show = false
  },
  Ssize (state) {
    state.Sshow = true
  },
  Hsize (state) {
    state.Sshow = false
  }
}
const actions = {
  hideFooter (context) {
    context.commit('hide')
  },
  showFooter (context) {
    context.commit('show')
  },
  hideSize (context) {
    context.commit('Hsize')
  },
  showSize (context) {
    context.commit('Ssize')
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})
