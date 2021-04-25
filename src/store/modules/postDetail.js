import axios from 'axios'
export default {
    actions: {
        getPostDetail({ commit }, postId) {
            axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
                .then(response => {
                    commit('showComments', response.data)
                })
        }
    },
    state: {
        postInfo: [],
        comments: []
    },
    getters: {
        allDetails(state) {
            // return state.contactInfo
            return state.postInfo
        },
        allComments(state) {
            // return state.contactInfo
            return state.comments
        }
    },
    mutations: {
        showDetails(state, obj) {
            state.postInfo = []
            for (const key in obj) {
                const newPost = {
                    name: key,
                    value: obj[key],
                }
                state.postInfo.push(newPost)
            }
        },
        showComments(state, comments) {
            state.comments = comments
        }
    }
}