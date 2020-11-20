//The application instance is used to register 
//'globals' that can then be used by components within that application

Vue.createApp({
    data() {
      return {
        goals: [],
        enteredValue: ''
      };
    },
    methods: {
      addGoal() {
        this.goals.push(this.enteredValue);
        this.enteredValue = '';
      }
    }
    //bind the data to the div app
  }).mount('#app');

// const buttonEL = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// buttonEL.addEventListener('click',function(){
//     const enteredValue = inputEl.value;
//     const listItemEl = document.createElement('li');
//     listItemEl.textContent = enteredValue;
//     listEl.appendChild(listItemEl);
//     inputEl.value =' ';
// })