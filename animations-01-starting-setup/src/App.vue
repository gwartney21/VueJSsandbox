<template>
  <div class="container">
    <div class="block" :class="{animate: animatedBlock}"></div>
    <button @click="animateBlock">Animate</button>
  </div>

  <div class="container">
  
     <!-- css:false stops css transitions -->
    <transition name="para" @before-enter="beforeEnter" @before-leave="beforeLeave" @enter="enter" @after-enter="afterLeave"
    :csss="false">
    <p v-if="paraIsVisible">This is only somtimes vis</p>
    </transition>
    <button @click="toggleParagraph">Toggle Pagraph</button>
  </div>

 <div class="container">
   <!-- You can have transistions as the it will only be added to the real dom 1 at a time -->
   <transition name="fade-button" mode="out-in">
   <button @click="showUsers" v-if="!usersAreVisable">Show Users</button>
   <button @click="hideUsers" v-else>Hide Users</button>
   </transition>
 </div>

  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>


  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>

</template>  

<script>
export default {
  data() {
    return {
    dialogIsVisible: false,
    animatedBlock:false,
    paraIsVisible: false,
    usersAreVisable: false,

     };
  },
  methods: {

    afterLeave(el,done){
      console.log('after end')
      let round = 1;
      const interval = setInterval(function(){
        el.style.opacity = 1- round * 0.1;
        round++;
        if(round > 10){
          clearInterval(interval);
          done();
        }
      },20)
    },

    beforeEnter(el){
      console.log('beforeEnter');
      //sets opactiy using js
      el.style.opacity = 0;
    },

    beforeLeave(){
      console.log('beforeLeave')
    },
    enter(el,done){
      console.log('enter')
      //exectue every x secs
      let round = 1;
      const interval = setInterval(function(){
        el.style.opacity = round * 0.1;
        round++;
        if(round > 10){
          clearInterval(interval);
          done();
        }
      },20)
    },
    afterEnter(){
      console.log('after enter')
    },
    showUsers(){
      this.usersAreVisable = true;
    },

    hideUsers(){
      this.usersAreVisable = false;
    },
    animateBlock(){
      this.animatedBlock = true;
    },
    toggleParagraph(){
      this.paraIsVisible = !this.paraIsVisible;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,

button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {

  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /* transform: translateX(-50px); */
  animation: slide-fade 0.3s ease-out forwards;
}

.fade-button-enter-from,
.fade-button-leave-to{
  opacity: 0;
}

.fade-button-enter-to
.fade-button-leave-from{
  opacity: 1;
}

.fade-button-enter-active{
  transition:  opactiy o.3s ease-out;
}

.fade-button-leave-active{
  transition:opacity 0.3s ease-in;
}


@keyframes slide-fade {
  0%{
    transform: translateX(0) scale(1);
  }

  70%{
    transform: translateX(-120px) scale(1.1);
  }

  100%{
    transform: translateX(-150px) scale(1);
  }
}

/* 
contorols transitions with vue and css 
You will want to use this for when the element is being 
removed from the dom
*/
/* 
.para-enter-from{
  opacity: 0;
  transform: translateY(-30px);
}

.para-enter-active{
  transition: all 0.3s ease-out;
}

.para-enter-to{
  opacity: 1;
  transform: translateY(0);
}

.para-leave-to{
  opacity: 0;
  transform: translateY(-30px);
}

.para-leave-from{
  opacity: 1;
  transform: translateY(0);
}

.para-leave-active{
  transition: all 0.3s ease-in;
} */


</style>