<template>
 <base-dialog :show="!!error" title="An error has occured" @close="handelError">
   <p>{{ error }}</p>
 </base-dialog>
 <section>
   <base-card>
     <header>
       <h2>Requests Recived</h2>
     </header>
     <base-spinner v-if="isLoading"></base-spinner>
     <ul v-else-if="hasRequests">
       <request-item v-for="req in receivedRequests" :key="req.id" :email="req.userEmail" :message="req.message"></request-item>
     </ul>
     <h3 v-else >You have not recived any requests</h3>
   </base-card>
 </section>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue'
// import BaseBadge from '../../components/ui/BaseBadge.vue';
export default{
  components:{
    RequestItem,
  },
  data(){
    return{
      isloading: false,
      error:null
    }
  },
  computed:{
    receivedRequests(){
      return this.$store.getters['requests/requests'];
    },
    hasRequests(){
      return this.$store.getters['requests/hasRequests']
    }
  },
  created(){
    this.loadRequests();
  },
  methods:{
    async loadRequests(){
   
      this.isloading = true;
      try{
        await this.$store.dispatch('requests/fetRequests');
      }catch(error){
        this.error = error.message || 'something failed';
      }
      
      this.isloading = false;
    },

    handleError(){
      this.error = null;
    }

  }
}
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>

