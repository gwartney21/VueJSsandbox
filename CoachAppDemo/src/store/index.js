import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index.js';
import requestsModule from '../pages/requests/index.js';

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests:requestsModule
  },
  state() {
    return {
      userId: 'c3'
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    }
  }
});

export default store;