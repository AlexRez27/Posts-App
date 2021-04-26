import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import postDetail from './modules/postDetail'
import userTable from './modules/userTable'
import userInfo from './modules/userInfo'
import { modalModule } from 'vuex-modal'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
  },
  mutations: {
    showPosts(state, posts) {
      state.posts = posts
    },
  },
  actions: {
    async getPosts({ commit }, { pageNumber = 0, limit = 10 }) {
      await axios.get(`https://jsonplaceholder.typicode.com/posts?_start=${pageNumber}&_limit=${limit}`)
        .then(response => {
          commit('showPosts', response.data)
        })
    }
  },
  modules: {
    postDetail,
    userTable,
    modalModule,
    userInfo,
  },
  getters: {
    allPosts(state) {
      return state.posts
    }
  }
})
