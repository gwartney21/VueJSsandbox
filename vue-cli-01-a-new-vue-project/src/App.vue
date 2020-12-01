<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <freind-contact
      v-for="friend in Friends"
      :key="friend.id"
      :name="friend.name"
      :phoneNumber="friend.phone"
      :emailAddress="friend.email"
      :is-favorite=" friend.isFavirote"
      @toggle-favorite="toggleFavortieStatus"

      ></freind-contact>
    </ul>
  </section>
</template>

<script>

export default {
  data() {

  return {
  
Friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 45678 90",
          email: "manuel@localhost.com",
          isFavirote: false
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0987 654421 21",
          email: "julie@localhost.com",
          isFavirote: false
        },
      ],
    }

  },

    methods: { 
      toggleFavortieStatus(){
        alert("this works")
      }
    
    }
};
</script>
