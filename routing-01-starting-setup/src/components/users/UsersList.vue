<template>
  <button @click="savedChanges"> Save form</button>
  <button @click="confirmInput"> Confirm </button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },

  data(){
    return{
      changesSaved:false
    }
  },
  inject: ['users'],
  methods:{
    confirmInput(){
      this.$router.push('/teams');
    },

    savedChanges(){
      this.changesSaved = true;
    }
  },

  beforeRoutedLeave(to,from,next){
    console.log('User list cmp before leave');
    if(this.changesSaved){
      next();
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>