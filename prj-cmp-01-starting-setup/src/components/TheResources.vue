<<<<<<< Updated upstream
<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode">Stored Resources</base-button>
        <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode">Add Resource</base-button>
    </base-card>

    <keep-alive>
     <component :is="selectedTab"></component>
    </keep-alive>

</template>

<script>

import storedResources from './StoredResources.vue'

import AddResource from './AddResources.vue'


export default {

    components:{
        storedResources,
        AddResource
    },

    provide(){
        return{
            resources:this.storedResources,
            addResource: this.addResource
        }
    },
 
    data(){
        return{
            selectedTab:'stored-resources',
                storedResources:[
                    {
                    id:'offical-guide',
                    title:' offical guide',
                    description: 'the offical doucmentation',
                    link:'https://vuejs.org'

                    }
                ],
            };

        },
         computed:{
            storedResButtonMode(){
                return this.selectedTab === 'stored-resources' ? null : 'flat';
            },
            addResButtonMode(){
                return this.selectedTab === 'add-resource' ? null : 'flat'
            }
        },
        methods:{
            setSelectedTab(tab){
                this.selectedTab = tab;
            },
            addResource(title,description,url){
                const newResource = {
                    id: new Date().toISOString(),
                    title:title,
                    description:description,
                    link:url
                };
                this.storedResources.push(newResource);
               
                this.selectedTab ='stored-resources';
            },
            removeResources(){
                
            }
        },

       
    }
</script>
=======
<template>
    <base-card>
        <base-button @click="selectedTab('store-resources')">Store Resources</base-button>

        <base-button @click="selectedTab('add-resources')"> Add resources </base-button>
    </base-card>

    <component :is="selectedTab"></component> 

</template>

<script>

import addResources from '.src/components/TheResources.vue'
export default {
  components: { addResources},

provide(){
    return{
        resources: this.storedResources
    };
},
   data(){
       return{
           selectedTab:'stored-resources',
           storedResources:[
                {
                    id:'offical-guide',
                    title:' offical guide',
                    description: 'the offical doucmentation',
                    link:'https://vuejs.org'

                }
            ]
       }
    },

    methods:{
        setSlectedTab(Tab){
            this.selectedTab = Tab
        }
    }
}
</script>
>>>>>>> Stashed changes
