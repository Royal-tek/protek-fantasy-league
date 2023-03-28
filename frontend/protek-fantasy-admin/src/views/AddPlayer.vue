<template>
  <div>
    <div>
    <main id="main" class="main">

<div class="pagetitle">
    <h1>PLAYERS</h1>
    
  </div><!-- End Page Title -->

<section class="section dashboard">
    <div class="row">
        <!-- Left side columns -->
    <div class="col-lg-12">
        <div class="row">

          <!-- Reports -->
          <div class="col-12">
            <div class="card">

            
              <div class="card-body">
                
                <h3 class="card-title text-center" style="color:#172b3b; font-size: 25px;">Add Player</h3>
                
                <div class="register-holder">
                <form class="form" enctype="multipart/form-data">
                  
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
                        <option ></option>
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
                    <button  @click.prevent="playerReg" class="btn register-btn w-100 shadow-none">
                    <!-- <span v-if="loading"><img class="img-fluid me-1" style="height: 15px;" src="../../public/assets/images/loading.gif" alt=""></span> -->
                    Submit</button>
                </div>
                <!-- <p v-if="error" class="p-3 text-center" style="background-color: #FFCCCB; color: black;">{{ errorMsg }}</p> -->
    
                </form>
            </div>
                
                
              </div>

            </div>
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
export default {
    name : 'AddPlayer',
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
      }
    }
}
</script>

<style lang="scss" scoped>


.register-holder{
  width: 70%;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 30px;
  height: 600px;

  .form-group{
    height: 50px;

    input{
      height: inherit;
    }
  }
}
.form-group {
        height: 40px;
        width: 100%;
        margin: 15px 0;
        // padding: 20px 0;
    
        .register-btn {
            height: 40px;
            background-color: #172b3b;
            color: #fff;
    
            &:hover {
            background-color: #021729;
            transition: 0.6s;
            }
        }
        select{
            height: inherit;
            &:focus {
            border-color: #172b3b;
            }
            option:hover{
                background-color: #172b3b !important;
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
            border-color: #172b3b;
            }
        }
       
        }
    
</style>