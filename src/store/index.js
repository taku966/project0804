import {createStore} from 'vuex'

export default createStore({
    state: {
        entitles: {
            value: "初期値"
        }
    },
    getters: {
        entitles: (state) => state.entitles,
    },
    mutations: {
        update(state, newEntitle){
            state.entitles = newEntitle;
        }
    },
    actions: {},
    modules: {}
})
