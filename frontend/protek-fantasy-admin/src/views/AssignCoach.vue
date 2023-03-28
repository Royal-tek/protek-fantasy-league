    <template>
        <div>
        <div>
        <main id="main" class="main">
    
    <div class="pagetitle">
        <h1>COACH</h1>
        
        </div><!-- End Page Title -->
    
    <section class="section dashboard">
        <div class="row">
            <!-- Left side columns -->
        <div class="col-lg-12">
            <div class="row ">
    
                <!-- Reports -->
                <div class="col-12">
                <div class="card">
    
                
                    <div class="card-body">
                    
                    <h3 class="card-title" style="color:#172b3b; font-size: 25px;">Assign Coach</h3>
                        
                    <div class="row align-items-center ">
                        <div class="col-6 ">

                                <input type="text" class="form-control shadow-none" placeholder="Team Name" v-model="team">
                            
                        </div>
                        <div class="col-6 ">
                        
                            <div class="holder">
                                <div class="top">
                                    <p>Select Coach of [ {{ team }} ]</p>
                                </div>
                                <div class="row container" v-for="user in users" :key="user.id">
                                    <div class="col-6 text-capitalize text-center" style="font-weight: bold;">{{ user.firstname }} - {{ user.lastname }}</div>
                                    <div class="col-6 text-center">
                                        <button class="btn btn-primary">Appoint</button>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                    
                    </div>
    
                </div>
                fgf
                </div><!-- End Reports -->
    
    
            </div>
            </div><!-- End Left side columns -->
    
        
        </div>
    
    </section>
    
    
        </main>
        </div>
        </div>
    </template>
    
    <script>
    import axios from 'axios'
    export default {
        name : 'AssignCoach',
        data(){
            return {
                users : [],
                coach : '',
                team : ''
            }
        },
        mounted(){
            this.getAllUsers()
        },
        methods : {
            getAllUsers(){
                axios.get('http://localhost:8000/api/user/all-users')
                .then((response)=>{
                    this.users = response.data
                    console.log(response);
                })
                .catch(error=>{
                    console.log(error);
                })
            }
        }
    }
    </script>
    
    <style lang="scss" scoped>
    .holder{
        width:100%;
        height: 400px;
        display: flex;
        flex-direction: column;
        
        overflow: auto;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        
        .container{
            border-bottom: 1px solid #f1f1f1;
            margin: 10px 0;
            padding: 8px;          
        }
    }
    .top{
        text-align: center;
        font-weight: bold;
        padding: 10px 0;
        border-bottom: 1px solid #111;
    }
    
    
    </style>