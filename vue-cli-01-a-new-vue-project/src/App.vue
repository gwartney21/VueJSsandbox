<template>
  <section>
    <header>
    <h1>My Friends</h1>
    </header>

    <new-freind @add-contact="addContact"></new-freind>
    <ul>
      <freind-contact
      v-for="friend in Friends"
      :key="friend.id"
      :id="friend.id"
      :name="friend.name"
      :phoneNumber="friend.phone"
      :emailAddress="friend.email"
      :isfavorite=" friend.isfavorite"
      @toggle-favorite="toggleFavortieStatus"
      @delete="deleteContact"
      ></freind-contact>
    </ul>
  </section>
</template>

<script>
import FriendContactVue from "./components/FriendContact.vue"
import NewFreind from "./components/NewFreind.vue"


export default{

  components:{NewFreind,FriendContactVue},

  data() {

  return {
  
Friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 45678 90",
          email: "manuel@localhost.com",
          isfavorite: true
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0987 654421 21",
          email: "julie@localhost.com",
          isfavorite: false
        },
      ],
    }

  },

    methods: { 
      toggleFavortieStatus(freindId){
        const identifiedFreind = this.Friends.find(
            (freind) => freind.id === freindId
          );
          identifiedFreind.isfavorite = !identifiedFreind.isfavorite;
      },

      addContact(name,phone,email){
        const newFreindContact = {
          id: new Date().toISOString(),
          name: name,
          phone: phone, 
          email: email,
          isfavorite: false
        };
        this.Friends.push(newFreindContact)
      },
      deleteContact(friendId){
        this.Friends = this.Friends.filter((friend)=> friend.id !==friendId);
      }
    
    }
};
</script>
