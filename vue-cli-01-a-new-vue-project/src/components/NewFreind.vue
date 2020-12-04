<template>
    <form @submit.prevent="submitData">
       
        <div>
            <label>Name</label>
            <input type="text" v-model="enterName"/>
        </div>
        <div>
            <label>phone</label>
            <input type="tel" v-model="enterEmail"/>
        </div>
        <div>
            <label>Email</label>
            <input type="email" v-model="enterPhoneNumber"/>
        </div>
      
        <div>
            <button>Add Contact</button>
        </div>

    </form>
</template>

<script>
export default {
        emits:[
         'add-contact'
        ],

        dat(){
            return{
                enterName:' ',
                enterEmail:' ',
                enterPhoneNumbe: ''
            };
        },
        methods:{

            submitData(){
                this.$emit('add-contact',this.enterName,this.enterEmail,this.enterPhoneNumber)
            }
        }
}
</script>