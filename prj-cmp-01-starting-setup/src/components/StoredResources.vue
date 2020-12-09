<template>
    <ul>
        <li>
    <learning-resources
        v-for="resource in resources" 
        :key="resource.id"
        :title="resource.title"
        :description="resource.description"
        :link="resource.link"
    >
    </learning-resources>
        </li>
    </ul>
</template>

<script>
import LearningResources from './LearningResources.vue'

export default {
    components:{
       LearningResources
    },

    props:['resources']
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>