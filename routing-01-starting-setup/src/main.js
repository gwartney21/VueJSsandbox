import { createApp } from 'vue';

import {createRouter,createWebHistory } from 'vue-router'

import App from './App.vue';

import TeamsList from './components/teams/TeamsList.vue';
import userList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UserFooter from './components/users/userFooter.vue';
const router = createRouter({

    history:createWebHistory(),
    routes:[
        {path:'/', redirect:'/teams'},
        {path:'/teams', components:{default:TeamsList, footer:TeamsFooter}, 
        //allows you to acess $router.metta to check if the 
        meta:{needsAuth:true},
        children:[
            {name: 'team-members' , path:'/teams/:teamId', component:TeamMembers},
        ]},
        {path:'/users' , components:{default:userList, footer:UserFooter},
        //You can allso call this directly on the users component
        beforeEnter(to,from,next){
            //same as before each however this wil only affect the one route
            next();
         }
       },
        {path: '/:notFound(.*)',redirect:'/teams'}
    ],

    //Controls the scroll from top or bottom
    scrollBehavior(to,from,savedPostion){
        if(savedPostion){
            return savedPostion;
        }
        return{
            left:0,top:0
        };
    }

});


router.beforeEach((to,from,next)=>{
    //will allow you to control the route by calling next
   //and passing in true false ect 
   if(to.meta.needsAuth){
       console.log("needs auth");
   }else{
     next();
   }
   
})

//after routed send some data 
router.afterEach((to,from)=>{
    console.log(to,from);
})
const app = createApp(App)

app.use(router);

app.mount('#app');
