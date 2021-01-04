export default {
  registerCoach(state, payload) {
    state.coaches.push(payload);
  },
  //Sets the coaches loaded from database
  setCoaches(state,payload){
    state.coaches = payload
  },
  setFetchTimestamp(state){
    state.lastFetch = new Date().getTime();
  }
};