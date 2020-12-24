

import mutations from './store/coaches/mutations.js'
import actions from './store/coaches/actions.js'
import getters from './store/coaches/getters.js'

export default{
    //Sets the various state to manage
    namespaced:true,
    state(){
        return{
            coaches:
            [
                {
                  id: 'c1',
                  firstName: 'Maximilian',
                  lastName: 'Schwarzmüller',
                  areas: ['frontend', 'backend', 'career'],
                  description:
                    "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                  hourlyRate: 30
                },
                {
                  id: 'c2',
                  firstName: 'Julie',
                  lastName: 'Jones',
                  areas: ['frontend', 'career'],
                  description:
                    'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                  hourlyRate: 30
                }
              ]
        }
    },
    mutations:mutations,
    actions:actions,
    getters:getters
}