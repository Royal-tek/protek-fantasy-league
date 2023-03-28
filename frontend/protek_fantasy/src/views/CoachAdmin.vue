<template>
    <div id="coach-admin" class="my-5">
        <div class="container table-responsive">
            <table class="table table-bordered table-hover text-center ">
  <thead style="background-color: #279843;">
    <tr style="color: #fff;">
      <th scope="col">#</th>
      <th scope="col">Firstname</th>
      <th scope="col">Lastname</th>
      <th scope="col">Display Name</th>
      <th scope="col">Number</th> 
      <th scope="col">Team</th> 
      <th scope="col">Position</th> 
      <th scope="col">Action</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr  v-for="(player, index) in players" :key="player.id">
      <th scope="row">{{ index+1 }}</th>
      <td>{{ player.firstname }}</td>
      <td>{{ player.lastname }}</td>
      <td>{{ player.displayName }}</td>
      <td>{{ player.number }}</td>
      <td>{{ player.team.team_name }}</td>
      <td>{{ player.position }}</td>
         
      <td>
        <p v-if="player.approved == true">
          <span   class="fa fa-check-circle" style="color : #279843"></span>
        </p>
        <p v-else class="text-center"><a @click.prevent="approvePlayer(player)" style="cursor: pointer;" class="fa fa-check-circle"></a></p>
      </td>

      <td>
        <p v-if="player.approved == true">Approved</p>
        <p v-else >Awaiting Approval</p>
      </td>
      
    </tr>
    
  </tbody>
</table>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name : 'CoachAdmin',
    components: {
        
    },
    data(){
        return {
            players : []
        }
    },
    created(){
        this.getAllPlayers()
    },
    
    methods: {

        getAllPlayers(){
            axios.get('http://localhost:8000/api/teams/get-coach-players', {headers : {"Authorization": "Token "+ localStorage.getItem('token')}})
            .then((response)=>{
                this.players = response.data
            })
            .catch((error)=>{
                console.log(error)
            })
        },
        approvePlayer(player){
          const playerId = player._id
          
          axios.put(`http://localhost:8000/api/player/approve-player/${playerId}`, {
            approved : true
          }, 
          {headers : {"Authorization": "Token "+ localStorage.getItem('token')}}
          )
          .then((response)=>{
            console.log(response);
            this.$swal({
                    icon:'success',
                    title: 'Success',
                    text:'PLAYER APPROVED SUCCESSFULLY',
                    })
            this.getAllPlayers()
          })
          .catch(error =>{
            console.log(error);
          })
        }
    }
}
</script>

<style scoped>
    
</style>