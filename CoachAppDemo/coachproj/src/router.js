import { createRouter, createWebHistory} from 'vue-router';


import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/coaches/requests/ContactCoach.vue';
import RequestsReceived from './pages/coaches/requests/RequestRecived.vue';
import notFound from './pages/notFound.vue';

const router = createRouter({
   
    history:createWebHistory(),
    routes:[
        {path:'/', redirect:'/coaches'},

        {path:'/coaches', component: CoachesList},

        {
         path:'/coaches/:id',
         component:CoachDetail,

         children:[
            {path:'contact', component: ContactCoach}
         ]
        },

        {path:'/register', component: CoachRegistration},

        {path:'/requests', component:RequestsReceived},

        {path:'/:notFound(.*)', component:notFound}

    ]
});

export default router;