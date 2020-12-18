<template>
    <button @click="addOne">add1 </button>
</template>

<script>
export default {
    methods:{
        addOne(){
            //Commit name of mutation to call
            this.$store.commit('increase', {value:10});
        }
    }
}
</script>