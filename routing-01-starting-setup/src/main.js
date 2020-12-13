import { createApp } from 'vue';

import {createRouter,createWebHistory } from 'vue-router'

import App from './App.vue';

import TeamsList from './components/teams/TeamsList.vue';
import userList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

const router = createRouter({

    history:createWebHistory(),
    routes:[
        {path:'/', redirect:'/teams'},
        {path:'/teams', component:TeamsList, 
        children:[
            {name: 'team-members' , path:'/teams/:teamId', component:TeamMembers},
        ]},
        {path:'/users' , component:userList},
        {path: '/:notFound(.*)',redirect:'/teams'}
    ]
  

});

const app = createApp(App)

app.use(router);

app.mount('#app');
