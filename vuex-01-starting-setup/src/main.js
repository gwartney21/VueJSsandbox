import { createApp } from 'vue';
import {createStore} from 'vuex';


import App from './App.vue';

const store = createStore({
    //sets app wide data
    state(){
        return{
            counter:0
        }
    },
    
    // This wil lallow you tuse async code
    actions:{
        increment(context){
            setTimeout(function(){
                context.commit('increment');
            },2000);
        }
    },
    //Allows you to call method in one place
    mutations:{
        increment(state){
            state.counter +=2;
        },

        increase(state, payload){
            state.counter = state.counter + payload.value;
        }
    },

    getters:{
        finalCounter(state){
            return state.counter * 2;
        }
    }
});

const app = createApp(App);

app.use(store);

app.mount('#app');