//Create view app
//Sets global values for the html to acess
const app =  Vue.createApp({
    data(){
        return{
            CourseGoal:'Finish course learn vue',
            ViewLink: "https://v3.vuejs.org/guide/instance.html#creating-an-application-instance",
            LearnView: "Learn view",
            MasterView: "MasterView",
            // HtmlExample: "<h2>this will be read as html</h2>"

            };
         },
        
        methods:{
            outputGoal(){
                const randomNumber = Math.random();
                if(randomNumber < 0.5){
                    return this.MasterView;
                }else{
                    return this.LearnView;
                }
            }
            
        }
});

app.mount('#user-goal');