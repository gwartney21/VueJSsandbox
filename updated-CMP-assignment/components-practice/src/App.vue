<template>
<div>
 
 
  <Active-User :username="user.name" :userage="user.age"></Active-User>

  <Add-User @set-data="setUserData"></Add-User>

</div>

</template>

<script>


export default {


   data() {
    return {
      user: {
        name: "Max Schwarzmüller",
        age: 31,
      },
    };
  },
  methods: {
    setUserData(name, age) {
      this.user = {
        name: name,
        age: +age
      };
    }
  }
}
</script>

