import { createApp } from 'vue';

import App from './App.vue';

import FriendContact from './components/FriendContact.vue';
import NewFriend from './components/NewFreind.vue';

const app = createApp(App)

app.component('freind-contact', FriendContact);
app.component('new-friend', NewFriend);

app.mount('#app');

