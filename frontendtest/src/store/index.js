import { createStore } from 'vuex'
import axios from 'axios'

const url = 'https://skatehub.onrender.com/'

export default createStore({
  state: {
    skateboards: null,
    postResponse: null,
    selectedProduct: null,
    users: null
  },
  getters: {
    getProduct(state){
      return state.selectedProduct
    }
  },
  mutations: {
    setSkate(state, data){
      state.skateboards = data
    },
    setPostResponse(state, response) {
      state.postResponse = response;
    },
    setDelete(state, data){
      state.skateboards = data
    },
    setSelectedProduct(state, data){
      state.selectedProduct = data
    },
    setUsers(state, data){
      state.users = data
    }
  },
  actions: {
    async fetchBoards({commit}){
      const fetchedBoards = await axios.get(`${url}products`)
      commit('setSkate', fetchedBoards.data.results)
    },

    async fetchUsers({commit}){
      const fetchedUsers = await axios.get(`${url}users`)
      commit('setUsers', fetchedUsers.data.results)
    },

    async submitContent({commit}, formData){
      
      try {
        const response = await axios.post(`${url}users`, formData)
        commit('setPostResponse', response.data);
        console.log(response.data);
        
      } catch (error) {
        console.log(error);
      }
    },

    async submitProb({commit}, probData){
      try {
        const response = await axios.post(`${url}product`, probData)
        commit('setSkateboard', response.data)
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },

    async delProduct({commit}, skateID){
      const response = await axios.delete(`${url}product/${skateID}`)
      location.reload()
      commit('setDelete', response)
    },

    async fetchProduct({commit}, skateID){
      try {
        const response = await axios.get(`${url}product/${skateID}`)
        commit('setSelectedProduct', response.data.result[0])
        return response.data.results
      } catch (error) {
        console.error(error);
      }
    }
  },
  modules: {
  }
})
