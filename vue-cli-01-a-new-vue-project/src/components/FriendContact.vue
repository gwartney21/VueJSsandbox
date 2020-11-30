<template>
    <li>
        <h2>{{freind.name}}</h2>
        <button @click="toggleDetails"> detailsAreVisible ? 'Hide' : 'Show' </button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{freind.phone}}</li>
            <li><strong>Email:</strong>{{freind.email}}</li>
        </ul>
    </li>
</template>

<script>

export default {
    data(){
        return{
            detailsAreVisible: false,
            freind:{
                id: "manuel",
                name: "Manuel Lorenz",
                phone: "0123 45678 90",
                email: "manuel@localhost.com",
            },
        }
    },

    methods:{
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
}
</script>