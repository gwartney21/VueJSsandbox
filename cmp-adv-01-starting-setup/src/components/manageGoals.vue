
<template>
    <div>
        <h2>Manage Goals</h2>
        <input type="text" ref="goal">
        <button @click="setGoal">Set Goal</button>
        <error-alert v-if="inputIsInvalid">
            <h2>Input is invalid!</h2>
            <p>Please enter at least a few charecters...</p>
        </error-alert>
    </div>
</template>

<script>
import errorAlert from './errorAlert.vue';

export default {
    
  components: { errorAlert },

    methods:{
        data(){
            return{
                inputIsInvalid:false
            };
        },
        
        setGoal(){
            const enteredValue = this.$refs.goal.value;
            if(enteredValue == ''){
                 this.inputIsInvalid = true;
            }
        }
    }
}
</script>