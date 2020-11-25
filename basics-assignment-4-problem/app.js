const app = Vue.createApp({
    data() {
        return{
            value:'',
            visable: true,
            inputBackgroundColor: ''
        }
    },

    methods:{
       togelVis(){
           this.visable = !this.visable;
       }
    },

    computed:{
        paraClasses(){
            return{
                user1:this.value === 'user1',
                user2:this.value === 'user2',
                visable: this.visable,
                hidden: !this.visable
            }
        }
    }

})

app.mount("#assignment");