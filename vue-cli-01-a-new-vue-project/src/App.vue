<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <freind-contact></freind-contact>
    </ul>
  </section>
</template>

<script>

export default {
  data() {
    return {
  
FriendContact: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 45678 90",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0987 654421 21",
          email: "julie@localhost.com",
        },
      ],
    };
  },
};
</script>

<styl