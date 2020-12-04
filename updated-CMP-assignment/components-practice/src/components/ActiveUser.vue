<template>
    <div>
        <h1>{{username}}</h1>
        <h2>{{userage}}</h2>
    </div>
</template>

<script>
export default {
    name: 'ActiveUser',
    props: {
    username: {
      type: String,
      required: true
    },
    userage: {
      type: Number,
      required: true
    }
  }
}
</script>