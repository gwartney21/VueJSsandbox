import { createApp } from 'vue'

import App from './App.vue'

import router from './router.js'

import store from './index.js'

const app = createApp(App);

console.log(app.version); 
app.use(router);
app.use(store);
app.mount('#app');
