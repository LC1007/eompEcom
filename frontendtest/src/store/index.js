import { createStore } from 'vuex'
import axios from 'axios'

const url = 'https://skatehub.onrender.com/'

export default createStore({
  state: {
    skateboards: null,
    postResponse: null,
    loading: null
  },
  getters: {
  },
  mutations: {
    setSkate(state, data){
      state.skateboards = data
    },
    setPostResponse(state, response) {
      state.postResponse = response;
    }
  },
  actions: {
    async fetchBoards({commit}){
      const fetchedBoards = await axios.get(`${url}products`)
      commit('setSkate', fetchedBoards.data.results)
    },

    async submitContent({commit}, formData){
      
      try {
        const response = await axios.post(`${url}users`, formData)
        commit('setPostResponse', response.data);
        console.log(response.data);
        
      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {
  }
})
