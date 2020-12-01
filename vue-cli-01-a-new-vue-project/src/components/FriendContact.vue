<template>

    <li>

        <h2>{{name}} {{ isFavirote ? '(Favorite)' : '' }}</h2>

        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show'}}</button>

        <button @click="toggleFaviroite">Toggle Favorite</button>

        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{phoneNumber}}</li>
            <li><strong>Email:</strong>{{emailAddress}}</li>
        </ul>
        
    </li>

</template>

<script>

export default {
    props:[
        'name',
        'phoneNumber',
        'emailAddress',
        'isfavorite',
        'id'
    ],

    emits:[
        'toggle-favoritefunction'
    ],

    data(){
        return{
            detailsAreVisible: false,
        }
    },

    methods:{
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        toggleFaviroite(){
            this.$emit('toggle-favorite', this.id);
        }
    }
}
</script>