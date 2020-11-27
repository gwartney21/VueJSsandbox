function getRandomValue(min,max){
    return  Math.floor(Math.random() * (max - min) + min);
}


const app =  Vue.createApp({
    data(){
        return{
            PlayerHeath: 100,
            MonserHeath: 100,
            currentRound: 0,
            winner: null,
            logMessages:[]
        }
    },

    methods:{
        startGame(){
            this.PlayerHeath = 100;
            this.MonserHeath = 100;
            this.winner = null;
            this.currentRound = 0;
            this.logMessages = [];
        },

        addLogMessage(who,what, value){
            this.logMessages.unshift({
                actionBy:who,
                actionType:what,
                actionValue: value
            });
        },

        attackMonster(){
            this.currentRound++;
           
            const attackValue  = getRandomValue(5,12);
            this.addLogMessage('player','attack',attackValue);
            this.MonserHeath -= attackValue;
            this.attackPlayer();
            if(this.PlayerHeath < 0){

            }
        },

        attackPlayer(){
       
            const attackValue  = getRandomValue(8,15);
            this.addLogMessage('monsterr','attack',attackValue);
            this.PlayerHeath -= attackValue;
        },

        specailAttack(){
            this.currentRound++;
            const attackValue = getRandomValue(10,25);
            this.MonserHeath -= attackValue;
            this.addLogMessage('player','attack',attackValue);
            this.attackPlayer();

        },

        healPlayer(){
            this.currentRound++
            const healValue = getRandomValue(8,20);
            if(this.PlayerHeath + healValue > 100){
                this.PlayerHeath = 100;
            }else{
                this.PlayerHeath +=healValue;
            }
           this.addLogMessage('player','heal',healValue);
           this.attackPlayer();
        },
        surrender(){
            this.winner = 'monster';
        }
    },

    computed:{
        monsterBartStyles(){
            if(this.MonserHeath <0){

                return {width: '0%'};
            }
            return{
            
                width: this.MonserHeath + '%'
            };
        },

        playerBartStyles(){

            if(this.PlayerHeath <0){
                
                return {width: '0%'};
            }
            return {
                width: this.PlayerHeath + '%'
            };
        }, 

        mayUseSpecialAttack(){
            return this.currentRound % 3 !==0;
        }
    },

    watch:{
        PlayerHeath(value){
            if(value <=0 && this.MonserHeath <=0){
                this.winner = 'draw';
            }else if(value <=0){
                this.winner = 'monster';
            }
        },
        MonserHeath(value){
            if(value <=0 && this.PlayerHeath <=0){
                this.winner = 'draw';
            }else if (value <=0){
                this.winner = 'player';
             }

            }
    }
})

app.mount("#game");