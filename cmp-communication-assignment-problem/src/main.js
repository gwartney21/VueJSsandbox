<<<<<<< Updated upstream
import { createApp } from 'vue';

import App from './App.vue';

import ActiveUser from "./components/ActiveUser.vue";
import UserData from "./components/UserData.vue";

const app = createApp(App)


app.component('Show-Users', ActiveUser);
app.component('Add-User', UserData);


app.mount("#app")
=======
import { createApp } from 'vue'

createApp({}).mount('#app')
>>>>>>> Stashed changes
