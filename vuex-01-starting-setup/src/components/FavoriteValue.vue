<template>
    <h1>{{counter}}</h1>
    <p>Do somethign here...</p>
</template>

<script>
export default {
computed:{
    counter(){
      return this.$store.getters.finalCounter
    }
  },
}
</script>