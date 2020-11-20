const app = Vue.createApp({
    data() {
        return { 
            Name: "Alex",
            age: 26,
            imgSrc: "https://source.unsplash.com/user/erondu/1600x900",
            placeHolder: "text place holder"
        }

    },

    methods:{
        CalculateAge() {
            return this.age + 5;
        }
  }
});
app.mount("#assignment");