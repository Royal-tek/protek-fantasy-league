<template>
   <div class="captain-modal" @click="closeModal">
    <div class="modal-content" id="modal-content">
      <div class="top">
        <div class="close-btn flex-center" @click="$emit('close-btn')"><i class="fa fa-times"></i></div>
      </div>

    <div class="body">
        <h3 class="text-center">Select Captain</h3>
        <h6 class="text-center">Select captain from the players below</h6>
        
        <div class="players scroll my-5">
            <div class="row" v-for="player in selectedPlayers.goalkeepers" :key="player.id" :class="captain == player ? 'madeCap' : null">
                <div class="col-3 gk" style="font-weight: bold;"> - GK - </div>
                <div class="col-6"  style="font-weight: bold;"> - {{ player.displayName }} - </div>
                <div class="col-3">
                    <span @click="captain=player" v-if="player==captain"> - <i style="font-size: 18px !important;" class="fa fa-check"></i> - </span>
                    <span @click="captain=player" v-else> - &copy; - </span>
                </div>
            </div>
            <div class="row" v-for="player in selectedPlayers.defenders" :key="player.id" :class="captain == player ? 'madeCap' : null">
                <div class="col-3 def" style="font-weight: bold;"> - DEF - </div>
                <div class="col-6 text-capitalize " style="font-weight: bold;"> - {{ player.displayName }} - </div>
                <div class="col-3">
                    <span @click="captain=player" v-if="player==captain"> - <i style="font-size: 18px !important;" class="fa fa-check"></i> - </span>
                    <span @click="captain=player" v-else> - &copy; - </span>
                </div>
            </div>
            <div class="row" v-for="player in selectedPlayers.midfielders" :key="player.id" :class="captain == player ? 'madeCap' : null">
                <div class="col-3 mid" style="font-weight: bold;"> - MID - </div>
                <div class="col-6 text-capitalize " style="font-weight: bold;"> - {{ player.displayName }} - </div>
                <div class="col-3">
                    <span @click="captain=player" v-if="player==captain"> - <i style="font-size: 18px !important;" class="fa fa-check"></i> - </span>
                    <span @click="captain=player" v-else> - &copy; - </span>
                </div>
            </div>
            <div class="row" v-for="player in selectedPlayers.attackers" :key="player.id" :class="captain == player ? 'madeCap' : null">
                <div class="col-3 att" style="font-weight: bold;"> - ATT - </div>
                <div class="col-6 text-capitalize " style="font-weight: bold;"> - {{ player.displayName }} - </div>
                <div class="col-3">
                    <span @click="captain=player" v-if="player==captain"> - <i style="font-size: 18px !important;" class="fa fa-check"></i> - </span>
                    <span @click="captain=player" v-else> - &copy; - </span>
                </div>
            </div>
          
        </div>
    </div>


        <div class="" >
            <button  :disabled="!captain" @click.prevent="submitCaptain(captain)" class="btn register-btn w-100 shadow-none">
                    <span v-if="loading"><img class="img-fluid me-1" style="height: 15px;" src="../../public/assets/images/loading.gif" alt=""></span>
                    Submit</button>
        </div>
        <p class="text-muted text-center">{{ message }}</p>
        <p class="text-muted text-center mt-3">To select captain, click on the ( C ) icon on the right.</p>
     
    </div>
  </div>
</template>

<script>
export default {
    name : 'captainModal',
    props : {
        selectedPlayers : Object
    },
    data(){
        return {
            loading : false,
            disabled : true,
            captain : '',
            message : ''
        }
    },
    methods:{
        submitCaptain(captain){
            
            this.loading = true
            this.message = "Captain selected successfully"
            this.$emit('init-captain', captain)
            setTimeout(()=>{
                this.loading = false
                this.message = ''
            },2000)
        }
    }

}
</script>

<style scoped lang="scss">
.captain-modal {
    height: 100%;
    width: 100%;
    position: fixed;
    background: rgba(0,0,0,0.5);
    z-index: 100000000000000000;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
.modal-content {
      height: 100%;
      width: 700px;
      background: #fff;
      z-index: 1000000000000000000000000;
      color: #262626;
      padding: 20px;
      box-shadow: 0 0 6px 6px #00000035;
    }

    .scroll{
        width: 100%;
        height: 400px;
        overflow: auto;
    }
    .players > div{
        color: #111;
        text-align: center;   
        padding: 8px 0;
        
        
        span{
            font-size: 26px !important;
            cursor: pointer;
            font-weight: bold;
            &:hover{
                color: #279843;
            }
        }
    }
    .att{
        color: skyblue;
    }
    .mid{
        color: yellowgreen;
    }
    .def{
        color: red;
    }
    .gk{
        color: purple;
    }
    .madeCap{
        background: rgba(0,0,0,0.5);
        // color: #fff !important;
        pointer-events: none;
        
    }
    .register-btn {
            height: 40px;
            background-color: #279843;
            color: #fff;
    
            &:hover {
            background-color: #172b3b;
            transition: 0.6s;
            }
        }

</style>