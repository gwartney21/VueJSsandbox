import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

 const url = "https://icanhazdadjoke.com";
 const headers = { Accept: "application/json" };

export default new Vuex.Store({
  state: {
    currentJoke: "DadJoke",
    allJokes: []
  },
  mutations: {
   //syncronus 
   setCurrentJoke(state,payload){
     state.currentJoke = payload;
     state.allJokes.push(payload);
   }
  },
  actions: {
   //Asycn
  async setCurrentJoke(state){
     const joke = await fetch(url,{headers});
     const j = await joke.json();
     state.commit('setCurrentJoke', j.joke);
   }
  },
  modules: {},
  getters: {
    //Be able to get value with out acessing directly
    getCurrentJoke: state => state.currentJoke,
    getAlleJokes: state => state.allJokes
  }
});
