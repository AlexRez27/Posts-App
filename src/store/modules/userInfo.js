import axios from "axios";

export default {
    actions: {
        getUserInfo({ commit }, userId) {
            axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
                .then(response => {
                    commit("showUserInfo", response.data.company);
                });
        }
    },
    state:{
        Info:[]
    },
    mutations:{
        showUserInfo(state, userInfo) {
            state.Info = userInfo;
        }
    },
    getters:{
        allInfo(state) {
            return state.Info;
        },
    }
};