import { createApp } from 'vue';

import App from './app.vue'

import BaseCard from './ui/BaseCard.vue'
import BaseButton from './ui/BaseButton.vue'
import BaseDialog from './ui/BaseDialog.vue'

const app = createApp(App)

app.component('base-card',BaseCard);
app.component('base-button',BaseButton);
app.component('base-dialog', BaseDialog)

app.mount('#app');
