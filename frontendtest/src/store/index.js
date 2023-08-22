import { createStore } from 'vuex'
import axios from 'axios'

const url = 'https://skateboardecomm.onrender.com/'

export default createStore({
  state: {
    skateboards: null
  },
  getters: {
  },
  mutations: {
    setSkate(state, data){
      state.skateboards = data
    }
  },
  actions: {
    async fetchBoards({commit}){
      const fetchedBoards = await axios.get(`${url}products`)
      commit('setSkate', fetchedBoards.data.results)
      console.log(fetchedBoards.data.results);
    }
  },
  modules: {
  }
})
