<template>

    <section>
        <h3>{{username}}</h3>
        <h2>{{age}}</h2>
    </section>

</template>

<script>

export default {
   props:['username','age']
}
</script>
