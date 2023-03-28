<template>
  <div id="pickteam">
    <captain v-if="showCaptain" :selectedPlayers="selectedPlayers" v-on:close-btn="showCaptain=false" v-on:init-captain="initCaptain(captain)"/>
    <h3 class="text-center text-uppercase py-5" style="background-color: #f1f1f1;">Select players</h3>

    <div class="container-fluid my-3">
        <div class="row">
            <div class="col-lg-4">
                <h5 class="text-center text-uppercase my-3">Choose your formation</h5>
                <div  class="select-formation d-flex">
                    <input :disabled="formations.disable" type="number" class="form-control shadow-none" placeholder="Defenders" v-model="formations.defenders.defendersValue" @keyup.enter="generateFormation">
                    <input :disabled="formations.disable" type="number" class="form-control shadow-none" placeholder="Midfielders" v-model="formations.midfielders.midfieldersValue" @keyup.enter="generateFormation">
                    <input :disabled="formations.disable" type="number" class="form-control shadow-none" placeholder="Attackers" v-model="formations.attackers.attackersValue" @keyup.enter="generateFormation">
                </div>
                <div class="submit-formation">
                    <button :disabled="formations.disable" class="btn" style="background-color: #279843; color: #fff;" @click.prevent="generateFormation">Generate Formation</button>
                    <button v-show="formations.showEdit" class="btn" style="background-color: #279843; color: #fff;" @click.prevent="editFormation">Edit Formation</button>
                </div>
                <div v-show="formations.error" class="my-3">
                    <p v-if="formations.errorMsg" class="py-3 formationError text-center" >{{ formations.errorMsg }}</p>
                </div>

                <div class="player-select-holder" v-if="formations.selectFormation">
                    <div class="position-holder">
                        <p class="me-2 text-white">POSITION:</p>
                        <select class="form-select shadow-none" v-model="selectedPosition" @change="filterPosition(selectedPosition)">
                            <option value = ''> Filter by Position</option>
                            <option value="all">All</option>
                            <option value="goalkeeper">GoalKeepers</option>
                            <option value="defender">Defenders</option>
                            <option value="midfielder">Midfielders</option>
                            <option value="attacker">Attackers</option>
                        </select>
                    </div>

                    <div class="player-search">
                        <input type="search" class="form-control shadow-none" placeholder="Search for player by name, team or position">
                    </div>

                    <div class="player-list-holder">
                        <div class="player-list text-capitalize" v-for="player in unselectedPlayers" :key="player.id" @click="selectPlayer(player)" 
                        :class="selectedPlayers.midfielders.includes(player) || selectedPlayers.defenders.includes(player) || selectedPlayers.attackers.includes(player) || selectedPlayers.goalkeepers.includes(player)
                         ? 'picked' : 'unpicked'"                        
                  >

                            <span><b>{{ player.position }}</b></span>
                            <span>{{ player.firstname }} {{ player.lastname }} ({{ player.team.team_name }})</span>
                            
                            <span>
                                <i class="fa fa-plus"></i>
                            </span>
                        </div>
                    </div>

                    
                </div>
                <div class="my-5">
                    <button class="btn" style="background-color: #279843; color: #fff; margin: 0 auto; display: block;" v-if="formations.selectFormation" @click="submitTeam">Save Team</button>
                </div>
            </div>
            <div class="col-lg-8">
                <div class="field-area">
                    
                    <div v-show="formations.selectFormation">
                        <!-- GOAL KEEPER ROW -->
                    <div class="row keeper-row">
                        <div class="col text-center pos">
                            <div class="player mt-3 pt-2"  :class="formations.goalkeeper ? 'sel': 'unselected'">
                            
                                
                                <div class="player-img mb-1" >
                                    <span class="remove-player" @click="removePlayer(index, 'gk')">
                                        <i class="fa fa-times"></i>
                                    </span>
                                    <img src="../../public/black.png" alt="" @click="filterPosition('goalkeeper')">
                                </div>
                                <div class="player-info">
                                    
                                    <span>{{ formations.goalkeeper ? formations.goalkeeper.firstname:'Name' }}</span>
                                </div>
                                <div class="player-team">
                                    <span>{{ formations.goalkeeper ?  formations.goalkeeper.team.team_name: 'Team' }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- DEFENDERS ROW -->
                    <div class="row  player-row">
                        <div class="col text-center pos"  v-for=" (player, index) in formations.defenders.defendersValue" :key="player.id">
                            <div class="player mt-3 pt-2" :class="formations.defenders.players[index] ? 'sel': 'unselected'">    
                                <div class="player-img mb-1" >
                                    <span class="remove-player" @click="removePlayer(index, 'def')">
                                        <i class="fa fa-times"></i>
                                    </span>
                                    <img src="../../public/black.png" alt="" @click="filterPosition('defender')">
                                </div>
                                <div class="player-info">
                                    
                                    <span>{{ formations.defenders.players[index] ? formations.defenders.players[index].name : 'Name'}}</span>
                                </div>
                                <div class="player-team">
                                    <span>{{ formations.defenders.players[index] ? formations.defenders.players[index].team.team_name : 'Team'}}</span>
                                </div>
                            </div>
                           
                            

                        </div>
                    </div>

                    <!-- MIDFIELDERS ROW -->
                    <div class="row  player-row">
                        <div class="col text-center pos"  v-for="(player, index) in formations.midfielders.midfieldersValue" :key="player.id">
                            <div class="player mt-3 pt-2" :class="formations.midfielders.players[index] ? 'sel': 'unselected'">    
                                <div class="player-img mb-1" @click="filterPosition('midfielder')">
                                    <span class="remove-player" @click="removePlayer(index, 'mid')">
                                        <i class="fa fa-times"></i>
                                    </span>
                                    <img src="../../public/black.png" alt="">
                                </div>
                                <div class="player-info">
                                    <span>{{ formations.midfielders.players[index] ? formations.midfielders.players[index].name : 'Name'}}</span>
                                </div>
                                <div class="player-team">
                                    <span>{{ formations.midfielders.players[index] ? formations.midfielders.players[index].team.team_name : 'Team'}}</span>
                                </div>
                            </div>
                            
                            

                        </div>
                    </div>

                    <!-- ATTACKERS ROW -->
                    <div class="row player-row">
                        <div class="col text-center pos"  v-for=" (player, index) in formations.attackers.attackersValue" :key="player.id">
                            <div class="player mt-3 pt-2" :class="formations.attackers.players[index] ? 'sel': 'unselected'">    
                                <div class="player-img mb-1" @click="filterPosition('attacker')">
                                    <span class="remove-player" @click="removePlayer(index, 'att')">
                                        <i class="fa fa-times"></i>
                                    </span>
                                    <img src="../../public/black.png" alt="">
                                </div>
                                <div class="player-info">
                                    <span>{{ formations.attackers.players[index] ? formations.attackers.players[index].name : 'Name'}}</span>
                                </div>
                                <div class="player-team">
                                    <span>{{ formations.attackers.players[index] ? formations.attackers.players[index].team.team_name : 'Team'}}</span>
                                </div>
                            </div>

                            

                        </div>
                    </div>

                </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import captain from '../components/Captain.vue'
export default {
    data(){
        return{
            showCaptain : false,
            team_error : false,
            newselectedPlayers : [],
            singlePlayer :  {},
            unselectedPlayers : [],
            selectedPlayers : {
                captain : '',
                goalkeepers : [],
                defenders : [],
                midfielders : [],
                attackers : []
            },
            selectedPosition : '',
            players:[],
            formations : {
                selectFormation : false,
                goalkeeper : '',
                defenders : {
                    players : [],
                    defendersValue : null,
                },
                midfielders : {
                    players : [],
                    midfieldersValue : null,
                },
                attackers : {
                    players : [],
                    attackersValue : null,
                },
                error : null,
                errorMsg : '',
                disable : false,
                showEdit : false
            },


        }
    },
    components : {
        captain
    },
    mounted(){
        setTimeout(()=>{
            this.unselectedPlayers = this.players
        },3000)
        this.getPlayers()
    },
    methods : {
        removePlayer(index, position){
            const combinedArray = [
                        ...this.selectedPlayers.defenders,
                        ...this.selectedPlayers.midfielders,
                        ...this.selectedPlayers.attackers,
                        ...this.selectedPlayers.goalkeepers
                    ]

                    const countPlayers = (value, arr) =>
                    arr.filter((x) => x.team.team_name === value).length;

                    combinedArray.forEach((player)=>{
                        if (countPlayers(player.team.team_name, combinedArray) > 3){
                            this.team_error = true
                            this.formations.error = true
                            this.formations.errorMsg = 'You have more than 3 players from a team'
                        setTimeout(()=>{
                            this.formations.error = false
                            this.formations.errorMsg = ''
                        },3000) 
                        
                        }else{
                            this.team_error = false
                        }
                        
                    })


            this.newselectedPlayers.splice(index, 1)
            if(position === 'mid'){
                this.formations.midfielders.players.splice(index, 1)
                this.selectedPlayers.midfielders.splice(index, 1)
            }
            if(position === 'def'){
                this.formations.defenders.players.splice(index, 1)
                this.selectedPlayers.defenders.splice(index, 1)
            }
            if(position === 'att'){
                this.formations.attackers.players.splice(index, 1)
                this.selectedPlayers.attackers.splice(index, 1)
            }
            if(position === 'gk'){
                this.formations.goalkeeper = ''
                this.selectedPlayers.goalkeepers.splice(index, 1) 

            }
        },
        getPlayers(){
            axios.get('http://localhost:8000/api/player/get-all-players')
            .then((response)=>{
                this.players = response.data
                console.log(response.data);
            })
            .catch((error)=>{
                console.log(error)
            })
        },
        generateFormation(){
            if(isNaN(this.formations.defenders.defendersValue)  ||  isNaN(this.formations.midfielders.midfieldersValue) || isNaN(this.formations.attackers.attackersValue)){
                this.formations.error = true
                this.formations.errorMsg = 'Can only input numbers'
                setTimeout(()=>{
                    this.formations.error = null
                    this.formations.errorMsg = ''
                },3000)
            }
            else{
                if(this.formations.defenders.defendersValue == null || this.formations.midfielders.midfieldersValue == null || this.formations.attackers.attackersValue == null ){
                    this.formations.error = true
                    this.formations.errorMsg = 'No field can be left empty'
                setTimeout(()=>{
                    this.formations.error = null
                    this.formations.errorMsg = ''
                },3000)
                }else{
                    const totalFormation = this.formations.defenders.defendersValue + this.formations.midfielders.midfieldersValue + this.formations.attackers.attackersValue 
                    if(totalFormation > 10 ){
                        this.formations.error = true
                        this.formations.errorMsg = 'Formation cannot be More than 10'
                    setTimeout(()=>{
                        this.formations.error = null
                        this.formations.errorMsg = ''
                    },3000)
                    }else{
                        if(totalFormation < 10 ){
                        this.formations.error = true
                        this.formations.errorMsg = 'Formation cannot be Less than 10'
                    setTimeout(()=>{
                        this.formations.error = null
                        this.formations.errorMsg = ''
                    },3000)
                    }else{
                        if(this.formations.defenders.defendersValue > 5 || this.formations.midfielders.midfieldersValue > 5 || this.formations.attackers.attackersValue > 5){
                            this.formations.error = true
                        this.formations.errorMsg = 'A particular row cannot contain more than 5 players '
                    setTimeout(()=>{
                        this.formations.error = null
                        this.formations.errorMsg = ''
                    },3000)
                        }else{
                            this.formations.selectFormation = true
                            this.formations.disable = true
                            this.formations.showEdit = true
                        }
                    }
                    }
                }
            }
        },
        editFormation(){
            this.formations.selectFormation = false
            this.formations.disable = false
            this.formations.showEdit = false
        },
        selectPlayer(player){
            const combinedArray = [
                        ...this.selectedPlayers.defenders,
                        ...this.selectedPlayers.midfielders,
                        ...this.selectedPlayers.attackers,
                        ...this.selectedPlayers.goalkeepers
                    ]

                    const countPlayers = (value, arr) =>
                    arr.filter((x) => x.team.team_name === value).length;

                    combinedArray.forEach((player)=>{
                        if (countPlayers(player.team.team_name, combinedArray) > 3){
                            this.team_error = true
                            this.formations.error = true
                            this.formations.errorMsg = 'Cannot pick more than 3 players from a team'
                        setTimeout(()=>{
                            this.formations.error = false
                            this.formations.errorMsg = ''
                        },3000) 
                        
                        }else{
                            this.team_error = false
                        }
                        
                    })
            
            // const validatePlayer = this.newselectedPlayers.filter((item) => item.team.team_name ===  player.team.team_name)
            // console.log(validatePlayer.length);

            if(this.selectedPlayers.defenders.includes(player) || this.selectedPlayers.midfielders.includes(player) || this.selectedPlayers.attackers.includes(player) || this.selectedPlayers.goalkeepers.includes(player) ){
                    this.formations.error = true
                    this.formations.errorMsg = 'Player is already in your team'
                setTimeout(()=>{
                    this.formations.error = false
                    this.formations.errorMsg = ''
                },3000)
            }
            else{
                if(player.position === 'goalkeeper'){
                   
                        this.formations.goalkeeper = player
                        this.selectedPlayers.goalkeepers.push(player)
                        this.singlePlayer.team = player.team
                        this.newselectedPlayers.push(this.singlePlayer)
                    }

                    

                
                if(player.position === 'defender'){
                    
                        if(this.formations.defenders.players.length >= this.formations.defenders.defendersValue){
                        this.formations.error = true
                        this.formations.errorMsg = 'Max amount of defender position in team already'
                        
                setTimeout(()=>{
                    this.formations.error = false
                    this.formations.errorMsg = ''
                },3000)
                    }
                    else{
                        this.formations.defenders.players.push({
                            name : player.firstname,
                            team : player.team
                        })

                        this.selectedPlayers.defenders.push(player)
                        this.singlePlayer.team = player.team
                    this.newselectedPlayers.push(this.singlePlayer)
                        
                    }
                }
                    
                    

                if(player.position === 'midfielder'){
                    
                        if(this.formations.midfielders.players.length >= this.formations.midfielders.midfieldersValue){
                        this.formations.error = true
                        this.formations.errorMsg = 'Max amount of midfielders position in team already'
                        
                setTimeout(()=>{
                    this.formations.error = false
                    this.formations.errorMsg = ''
                },3000)
                    }
                    else{
                        this.formations.midfielders.players.push({
                            name : player.firstname,
                            team : player.team
                        })
                        this.selectedPlayers.midfielders.push(player)
                        this.singlePlayer.team = player.team
                        this.newselectedPlayers.push(this.singlePlayer)
                        
                    }
                }
                    

                    

                if(player.position === 'attacker'){
                    
                    
                        if(this.formations.attackers.players.length >= this.formations.attackers.attackersValue){
                        this.formations.error = true
                        this.formations.errorMsg = 'Max amount of attackers position in team already'
                        
                setTimeout(()=>{
                    this.formations.error = false
                    this.formations.errorMsg = ''
                },3000)
                    }
                    else{
                        this.formations.attackers.players.push({
                            name : player.firstname,
                            team : player.team
                        })
                        this.selectedPlayers.attackers.push(player)
                        this.singlePlayer.team = player.team
                    this.newselectedPlayers.push(this.singlePlayer)
                        
                    }
                }

            
                    
                    
                    

            }},
        

            filterPosition(position){
            
            if(position == 'all') { 
                return this.unselectedPlayers = this.players
            }
            
                const result = this.players.filter((player)=>{
                    return player.position == position
                })

            this.unselectedPlayers = result
            

        },


        submitTeam(){
            let combinedArray = [
                ...this.selectedPlayers.defenders,
                ...this.selectedPlayers.midfielders,
                ...this.selectedPlayers.attackers,
                ...this.selectedPlayers.goalkeepers
                
            ]
            
            if(this.team_error){
                            this.formations.error = true
                            this.formations.errorMsg = 'Cannot pick more than 3 players from a team'
                        setTimeout(()=>{
                            
                            this.formations.error = false
                            this.formations.errorMsg = ''

                        }, 2000)
                        
        }
        else{
            
            if(combinedArray.length < 11){
                this.formations.error = true
                this.formations.errorMsg = `Team selection not complete, ${11 - combinedArray.length} player(s) left`
                setTimeout(()=>{
                    this.formations.error = false
                    this.formations.errorMsg = ``
                }, 2000)
                return
            }

            

            this.showCaptain = true;
        }
        },

        initCaptain(captain){
                this.showCaptain = false
                this.selectedPlayers.captain = captain;

                axios.post('http://localhost:8000/api/user-team/create-team', 
                {
                    players : {
                        goalkeeper : this.selectedPlayers.goalkeepers,
                        defenders : this.selectedPlayers.defenders,
                        midfielders : this.selectedPlayers.midfielders,
                        attackers : this.selectedPlayers.attackers,
                        captain : this.selectedPlayers.captain
                    }
                }, {headers : {"Authorization": "Token "+localStorage.getItem('token')}})
                .then((response)=>{
                    this.$swal({
                    icon:'success',
                    title: 'Success',
                    text:response.data.message,
                    }).then((result)=>{
                        if(result.isConfirmed) this.$router.push('/')
                    })
                    
                    console.log(response);
                })
                .catch((error)=>{
                    this.$swal({
                    icon:'error',
                    title: 'Failed',
                    text:error.response.data.error,
                    })
                    console.log(error);
                })
        }
    
        


        },
        

}
</script>

<style lang="scss" scoped>
        .player-row{
            padding: 15px 0 !important;
            width: 100% !important;
        }
    .field-area{
        
        width:100%;
        height:900px;
        background-image: url('../../public/assets/images/field.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: initial;
    }
    
    .player{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        flex-direction: column;
        color: black;
        
        .player-img{
            position: relative;
            cursor: pointer;
            img{
                height: 60px;
            }
        }

        .player-info{
            background-color: #279843;
            width: 120px;
            margin: 0 auto;
            text-align: center;
            color: #fff;
            padding: 5px;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
        }

        .player-team{
            background-color: #279843;
            width: 120px;
            margin: 0 auto;
            text-align: center;
            color: #fff;
            padding: 5px;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
            background-color: #35572aa6;

        }

    
    }

    @media (max-width:700px){
        .field-area{
            background-position: center;
        }
        .player-info{
            width: 100px !important;
            padding: 3px !important;
        }
        .player-team{
            width:100px !important;
            padding: 3px !important;
        }
        .player-img{
            img{
                height: 50px !important;
            }
        }
        .remove-player{
            width: 18px;
            height: 23px;
        }
        
    }
    .remove-player{
        position: absolute;
        right: -10px;
        color: #fff;
        top: -10px;
        width: 20px;
        border: 2px solid #ff5e5e;
        background: #ff5e5e;
        padding: 3px;
        font-size: 14px;
        height: 28px;
        z-index: 1;
        // cursor: not-allowed;
        border-radius: 3px;
        
    }
    .select-formation{
        input:focus{
            border-color: #279843;
        }
    }
    .submit-formation{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;

        button{
            margin: 20px;
        }
    }
    .formationError{
        background-color: #f08181;
        color: #fff;
    }
    .unselected{
        opacity: 0.5;
    }
    .sel{
        opacity: 0;
    }
    @media (max-width:1300px){

        .submit-formation{
            margin: 30px 0;
            button{
                font-size: 15px;
                padding: 8px 10px !important;
            }
        }
        .player-info{
            width: 70px !important;
            margin: 0 !important;
            padding: 0 !important;
        }
        .player-team{
            width: 70px !important;
            margin: 0  !important;
            padding: 0 !important;
        }
        .player-img{
            width: 30px;
        }
        .player-row{
            margin: 30px 0 !important;
            width: 100% !important;
        }
        .player{
            margin: 0 !important;
            padding: 0 !important;
        }
        .pos{
            width:30px !important;
        }
        .keeper-row{
            padding: 20px 0;
        }
    }
    .player-select-holder{
        width: 100%;
        height: 400px;
        display: flex;
        flex-direction: column;
        box-shadow: -1px -6px 79px -20px rgba(101, 99, 99, 0.75);
        // background-color: red;
    }
    .position-holder{
        background-color: #279843;
        padding: 10px;
        display: flex;

        width: 100%;
    }
    .player-search{
        border-bottom: 1px solid black !important;
        padding: 10px;
        border: none;
        width: 100%;
        input{
            width: 100%;
            border-radius: 0 !important;
        }
        input:focus{
            border-color: #279843;
        }
    }
    .player-list{
        cursor: pointer;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #279843;
    
        i{
            background-color: #279843;
            padding: 5px;
            color: #fff;
            border-radius: 100%;
        }
    }
    .player-list-holder{
        overflow: auto;
        height: 100%;

    }
    .picked {
  opacity: 0.5;
  pointer-events: none;
}
.unpicked {
  opacity: 1;
}
.unselected {
  opacity: 0.5;
}
.sel {
  opacity: 1;
}
</style>