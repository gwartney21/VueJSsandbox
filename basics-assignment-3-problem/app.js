const app = Vue.createApp({
    data() {
        return { 
            number:0,
        }

    },

    methods:{
        addNumber(num) {
            this.number = this.number + num;
        }
    
  },

  computed: {
    
     result() {
       if(this.number < 37){
           return "value is not there yet";
       }else if(this.number == 37){
           return this.number;
       }else{
           return "To much";
       }
    },

    watch:{
        resutl(){
            const that = this;
            setTimeout(function(){
                that.number = 0;
            },5000)
        }
    }


}
});
app.mount("#assignment");
