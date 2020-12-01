<template>

    <li>

        <h2>{{name}} {{ friendIsFavorite ? '(Favorite)' : '' }}</h2>

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
        'is-favorite'
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
            this.$emit('toggle-favorite');
        }
    }
}
</script>