<template>
    
  <div class="login container-fluid">
    <!-- <div class="container-fluid"> -->
    <div class="row">
        <div class="col-lg-3"></div>

        <div class="col-lg-6 login-part">
            <div class="login-holder">
           
            <form class="form">

                    
                <div class="first">
                    <div>
                        <h2>Login</h2>
                    </div>

                    <div>
                        <a href="/">
                            <i class="fa fa-home mb-4"></i>
                        </a>
                    </div>

                </div>
                <div class="form-group">
                    <input type="text" class="form-control shadow-none" placeholder="Email" v-model="email">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control shadow-none" placeholder="Password" v-model="password">
                </div>
                <div class="form-group">
                    <button :disabled="checkDisabled"  @click.prevent="login" class="btn login-btn shadow-none w-100">
                        <span v-if="checkLoading"><img class="img-fluid me-1" style="height: 15px;" src="../../public/assets/images/loading.gif" alt=""></span>
                        Submit</button>
                </div>
                <p v-if="checkError"  class="p-3 text-center" style="background-color: #FFCCCB; color: black;">{{ $store.state.errorMsg }}</p>
                <div class="last row">
                    <div class="col-6" style="text-align: left;">
                        Don't have an account?
                        <b><router-link :to="{name : 'Register'}">Register</router-link></b>
                    </div>

                    <div class="col-6" style="text-align: right;">
                        <a href="">Forgot Password</a>
                    </div>
                    
                </div>
            </form>
            </div>
        </div>

     
    </div>
  <!-- </div> -->
</div>
</template>

<script>
// import axios from 'axios'
export default {
  name: "Login",
  data(){
    return {
        email : '',
        password : '',
        
    }
  },
  computed :{
    checkError(){
        return this.$store.state.error
    },
    checkLoading(){
        return this.$store.state.loading
    },
    checkDisabled(){
        return this.$store.state.disabled
    }
  },

    methods : {
    async login(){
        this.$store.state.disabled = true
        this.$store.state.loading = true

        if(this.email == '' || this.password == ''){
            this.$store.state.error = true
            this.$store.state.errorMsg = 'No field can be left blank'
            

            setTimeout(()=>{
                this.$store.state.error = false
                this.$store.state.errorMsg = ''
                this.$store.state.disabled = false
                this.$store.state.loading = false
            },1000)
                return
            }

    try {
        await this.$store.dispatch('userLogin',{
            email : this.email,
            password : this.password
        })
    } catch (error) {
        console.log(error)
    }

        
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
    background: linear-gradient(rgba(0,0,0,0.7), rgba(3, 41, 17, 0.6)), url('../../public/assets/images/landing.jpg');
    background-position: center center;
    background-size: cover;
    
  height: 100vh;
//   background-color: red;
  width: 100%;
}
.login-part{
    height: 100vh;
    
    flex-direction: column;

    .login-holder{
        width: 70%;
        margin: 0 auto;
        height: 100vh;
        // background-color: green;
        
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    @media (max-width:900px){
        .login-holder{
            width: 100% !important;
        }
    }
    .form-group{
        height: 50px;
        width: 100%;
        margin: 20px 0;
        
        .login-btn{
            height: 50px;
            background-color: #279843;
            color: #fff;

            &:hover{
                background-color: #172b3b;
                transition: 1s;
            }
        }
        input{
            padding: 20px;
            width: 100%;
            
            height: inherit !important;

            &:focus{
                &::placeholder{
                    color: transparent !important;
                    transition: 1s;
                }
                background-color: transparent;
            }

            &:focus{
                border-color: #279843;
            }
        }
    }
}
.form{
    padding: 70px 50px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(51, 51, 51, 0.1);
    border: 1px solid #eeeeee;
    color: #172b3b;
    border-radius: 10px;

}

.image-part{
    background: linear-gradient(rgba(0,0,0,0.7), rgba(7, 62, 27, 0.6)), url('../../public/assets/images/landing.jpg');
    background-position: center center;
    background-size: cover;
    

}
.first{
    display: flex;
    align-items: center;
    justify-content: space-between;

    i{
        color: #279843;
        font-size: 20px;

        &:hover{
            color: #172b3b;
            transition: 0.6s;
        }
    }
}

// .last{
//     margin: 30px 0 0 !important;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;

// }
// @media (max-width:700px){
//     .last{
//         font-size: 10px;
//     }
// }

</style>