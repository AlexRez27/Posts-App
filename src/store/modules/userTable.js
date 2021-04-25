import axios from 'axios'

export default {
    actions:{
       async getUsers({ commit }) {
           await axios.get(`https://jsonplaceholder.typicode.com/users`)
                .then(response => {
                    commit('showUsers', response.data)
                })
        }
    },
    state:{
        users:[]
    },
    mutations:{
        showUsers(state, users) {
            state.users = users
        }
    },
    getters:{
        allUsers(state) {
            return state.users
        },
    }
}