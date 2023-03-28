    <template>
        <div class="register container-fluid">
        <!-- <div class="container-fluid"> -->
            <!-- Button trigger modal -->

<!-- Modal -->
<div class="boxModal wow fadeInUp" data-wow-delay="300ms" data-wow-duration="2000ms" v-if="isShowModal">
    <div class="modal-content">
        <div class="modal-head">
            <div class="text-center mt-3">
                <h4 class="text-uppercase">A few things to note before becoming a player</h4>
            </div><hr>
        </div>
        <div class="modal-body">
            <ol>
                
                <li>Your display name should be a name people are familiar with because that is the name that will be shown to users during team selection. </li>
                <li>Display Image is optional but is necessary so as to enable yourself to be selected by users who do not kknow you by name. </li>
                <li>A player can only belong to one team, so be careful so as to aviod errors when selecting your team.</li>
                <li>When a player registers, the request is sent to his selected coach, so make sure you select the right coach to aviod issues, and when you select the coach also inform him so as to enable him to verify you, only after this would yo be displayed to users.</li>
            </ol>
        </div>
        <div class="modal-footer">
            <div class="row">
                <div class="container">
                
                <div class="col-12">
                    <button class="btn btn-success understand-btn" @click="removeModal">Understood</button>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>


        <div class="row">
            <div class="col-lg-3"></div>
    
            <div class="col-lg-6 register-part">
            <div class="register-holder">
                <form class="form" enctype="multipart/form-data">
                <div class="first">
                    <div>
                    <h2>Become A Player</h2>
                    </div>
    
                    <div>
                    <a href="/">
                        <i class="fa fa-home mb-4"></i>
                    </a>
                    </div>
                </div>
                <div class="form-group">
                    <input
                    v-model="player.firstname"
                    type="text"
                    class="form-control shadow-none"
                    placeholder="Firstname"
                    />
                </div>
                <div class="form-group">
                    <input
                    v-model="player.lastname"
                    type="text"
                    class="form-control shadow-none"
                    placeholder="Lastname"
                    />
                </div>
                <div class="form-group">
                    <input
                    v-model="player.displayName"
                    type="text"
                    class="form-control shadow-none"
                    placeholder="Display Name"
                    
                    />
                </div>
    
                <div class="form-group">
                    <input
                    v-model="player.number"
                    type="number"
                    class="form-control shadow-none"
                    placeholder="Number"
                    />
                </div>

                
    
                <div class="form-group">
                    <select class="form-select shadow-none" v-model="player.team">
                        <option value="">Select Team</option>
                        <option v-for="team in teams" :key="team.id" :value="team._id">{{ team.team_name }}</option>
                    </select>
                </div>

                

                <div class="form-group">
                    <select class="form-select shadow-none" v-model="player.position">
                        <option value="">Select Position</option>
                        <option value="attacker">Attacker</option>
                        <option value="midfielder">Midfielder</option>
                        <option value="defender">Defender</option>
                        <option value="goalkeeper">Goalkeeper</option>
                    </select>
                </div>
                



                <div class="form-group" style="margin:0 0 50px">
                    
                    <label for="" style=" width:100%">
                    <input
                    @change="addImage"                  
                    type="file"
                    class="form-control shadow-none "
                    accept="image/*"
                    />
                </label>
                </div>
    
                <div class="form-group">
                    <button :disabled="disabled" @click.prevent="playerReg" class="btn register-btn w-100 shadow-none">
                    <span v-if="loading"><img class="img-fluid me-1" style="height: 15px;" src="../../public/assets/images/loading.gif" alt=""></span>
                    Submit</button>
                </div>
                <p v-if="error" class="p-3 text-center" style="background-color: #FFCCCB; color: black;">{{ errorMsg }}</p>
    
                </form>
            </div>
            </div>
        </div>
        <!-- </div> -->
        </div>
    </template>
        
        <script>
        import axios from 'axios'
    export default {
        name: "PlayerRegister",
        data(){
            return {
                player : {
                    firstname : '',
                    lastname : '',
                    displayName : '',
                    coach : '',
                    team : '',
                    number : '',
                    position : '',
                    imageUrl : null,
                },
            
                teams : [],
                isShowModal : true,
                error : null,
                errorMsg : '',
                disabled : false,
                loading : false
                
            }
        },
        created (){
            this.getTeams()
        },
        methods : {
            addImage(event){
                this.player.imageUrl = event.target.files[0]
                
            },
            
            getTeams(){
                axios.get('http://localhost:8000/api/teams/get-teams')
                .then((response)=>{
                    this.teams = response.data
                    console.log(response.data)
                })
                .catch((err)=>{
                    console.log(err)
                })
            },
            playerReg(){
                this.loading = true
                this.disabled = true

                if(this.player.firstname == '' || this.player.lastname == '' || this.player.displayName == '' || this.player.team == ''  || this.player.number == '' || this.player.position == ''){
                    this.error = true
                    this.errorMsg = 'That field cannot be left blank'
                    setTimeout(()=>{
                        this.error = false
                        this.errorMsg = ''
                        this.loading = false
                        this.disabled = false
                    },2000)
                    return
                }
                const fd = new FormData()
                fd.append('firstname', this.player.firstname)
                fd.append('lastname', this.player.lastname)
                fd.append('displayName', this.player.displayName)
                fd.append('position', this.player.position)
                fd.append('number', this.player.number)
                fd.append('team', this.player.team)
                fd.append('imageUrl', this.player.imageUrl)

                
                axios.post('http://localhost:8000/api/player/create-player', fd)
                .then((response)=>{
                        this.$swal({
                    icon:'success',
                    title: 'Success',
                    text:'PLAYER CREATED SUCCESSFULLY',
                    })
                    this.player.firstname = ''
                    this.player.lastname = ''
                    this.player.displayName = ''
                    this.player.position = ''
                    this.player.number = ''
                    this.player.team = ''
                    this.player.imageUrl = null
                    setTimeout(()=>{
                        this.error = false
                        this.errorMsg = ''
                        this.loading = false
                        this.disabled = false
                    },2000)
                    console.log(response);
                })
                .catch((error)=>{
                    this.$swal({
                    icon:'error',
                    title: 'Failed',
                    text:error.response.data.error,
                    })
                    setTimeout(()=>{
                        this.error = false
                        this.errorMsg = ''
                        this.loading = false
                        this.disabled = false
                    },2000)
                })

            },
            removeModal(){
                this.isShowModal = false
            }
        },  
    };
    </script>
        
        <style lang="scss" scoped>
    .register {
        background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(3, 41, 17, 0.6)),
        url("../../public/assets/images/landing.jpg");
        background-position: center center;
        background-size: cover;
        height: 100vh;
        width: 100%;
    }
    .register-part {
        height: 100vh;
        flex-direction: column;
    
        .register-holder {
        width: 70%;
        margin: 0 auto;
        height: 100vh;
        display: flex;
        justify-content: center;
        flex-direction: column;
        }
    
        @media (max-width: 900px) {
        .register-holder {
            width: 100% !important;
        }
        }
        .form-group {
        height: 40px;
        width: 100%;
        margin: 15px 0;
        // padding: 20px 0;
    
        .register-btn {
            height: 40px;
            background-color: #279843;
            color: #fff;
    
            &:hover {
            background-color: #172b3b;
            transition: 0.6s;
            }
        }
        select{
            height: inherit;
            &:focus {
            border-color: #279843;
            }
            option:hover{
                background-color: #279843 !important;
            }
        }
        input{
            padding: 20px;
            width: 100%;
    
            height: inherit !important;
    
            &:focus {
            &::placeholder {
                color: transparent !important;
                transition: 1s;
            }
            background-color: transparent;
            }
    
            &:focus {
            border-color: #279843;
            }
        }
       
        }
    }
    
    .form {
        padding: 50px 50px;
        background-color: #fff;
        box-shadow: 0 0 10px rgba(51, 51, 51, 0.1);
        border: 1px solid #eeeeee;
        color: #172b3b;
        border-radius: 10px;
    }
    
    .image-part {
        background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(7, 62, 27, 0.6)),
        url("../../public/assets/images/landing.jpg");
        background-position: center center;
        background-size: cover;
    }
    .first {
        display: flex;
        align-items: center;
        justify-content: space-between;
    
        i {
        color: #279843;
        font-size: 20px;
    
        &:hover {
            color: #172b3b;
            transition: 0.6s;
        }
        }
    }
    .boxModal{
        width:100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(1, 113, 35, 0.5);
        // opacity: .9;

        .modal-content{
            width: 70%;
            padding: 30px;
            border-radius: 10px;
            background-color: #fff;
            overflow: auto;
            opacity: 1;
            z-index: 100000000000;

            .modal-body{
                li+li{
                    margin: 10px 0;
                }
            }
        }
    }

    @media (max-width:900px){
        .modal-content{
            // height: 100vh;
            width:100% !important;
            padding: 30px 10px !important;
        }

        .form{
            height: 90%;
        }
    }
    
    </style>