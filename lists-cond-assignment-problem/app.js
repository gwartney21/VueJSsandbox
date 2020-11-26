const app = Vue.createApp({
    data(){
        return{
            EnterValue:'',
            tasks:[]
        }
    },

    methods:{
        addTask(){
            this.tasks.push(this.EnterValue)
        }
    }
})

app.mount("#assignment")