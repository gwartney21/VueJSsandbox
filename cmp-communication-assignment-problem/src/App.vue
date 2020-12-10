<<<<<<< Updated upstream

// Task 1: 
// Add two components to the app: 
// An ActiveUser component and an UserData component
// ActiveUser should output a username (h2) and age (h3)
// UserData should output two input fields => for name and age
// Optional: Add styling of your choice

// Task 2: Output both components side-by-side in your main App template

// Task 3: Add user data and ensure it contains a name and age
// User data should be output in ActiveUser
// It should be updated via the UserData component

<template>

        <Show-Users
        :username="user.name"
        :age="user.age">
        </Show-Users>
        <Add-User></Add-User>

</template>

<script>

import ActiveUser from "./components/ActiveUser.vue";
import UserData from "./components/UserData.vue";


export default {

    components:{ActiveUser,UserData},

    data(){

       return{
               user:[
                   {
                       name: 'alex',
                       age:"27"
                   }
               ],
            }
        },

        methods:{
            addUser(userName,age){
                const newUser = {
                    username: userName,
                    age:age
                }
                this.UserData.push(newUser);
             },
        }
}
</script>
=======
<template>
    <section>
    <header>
    <h2>UserName</h2>
    <h3>Age</h3>
    </section>
</template>

<script>
export default {
    
}
</script>
// Task 1: 
// Add two components to the app: 
// An ActiveUser component and an UserData component
// ActiveUser should output a username (h2) and age (h3)
// UserData should output two input fields => for name and age
// Optional: Add styling of your choice

// Task 2: Output both components side-by-side in your main App template

// Task 3: Add user data and ensure it contains a name and age
// User data should be output in ActiveUser
// It should be updated via the UserData component
>>>>>>> Stashed changes
