import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        msg: 'Vue con Vuex',
        title: 'Dr.',
        name: 'Recordà'
    },
    mutations: {


    },
    actions: {

    },
    getters: {
        getMsg(state) {
            return state.msg
        },
        getFullName(state) {
            return state.title + state.name

        }
    }

})