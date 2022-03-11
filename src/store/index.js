import { createStore } from "vuex";

export default createStore({
  state: {
    parcel:[]
  },
  getters:{
    getParcel(state){
      return state.parcel
    }
  },
  mutations: {
    itemAdd(state,payload){
      state.parcel.push(payload)
    }
  },
  actions: {},
  modules: {},
});
