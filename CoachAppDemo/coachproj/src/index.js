import {createStore } from 'vuex';

import coachesModule from './storeInfo.js';

const store = createStore({
    modules:{
        coaches:coachesModule
    }
})

export default store;
