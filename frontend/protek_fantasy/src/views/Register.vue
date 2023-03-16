<template>
  <div class="register container-fluid">
    <!-- <div class="container-fluid"> -->
    <div class="row">
      <div class="col-lg-3"></div>

      <div class="col-lg-6 register-part">
        <div class="register-holder">
          <form class="form">
            <div class="first">
              <div>
                <h2>Register</h2>
              </div>

              <div>
                <a href="/">
                  <i class="fa fa-home mb-4"></i>
                </a>
              </div>
            </div>
            <div class="form-group">
              <input
                v-model="firstname"
                type="text"
                class="form-control shadow-none"
                placeholder="Firstname"
              />
            </div>
            <div class="form-group">
              <input
                v-model="lastname"
                type="text"
                class="form-control shadow-none"
                placeholder="Lastname"
              />
            </div>
            <div class="form-group">
              <input
                v-model="email"
                type="text"
                class="form-control shadow-none"
                placeholder="Email"
              />
            </div>

            <div class="form-group">
              <input
                v-model="password"
                type="password"
                class="form-control shadow-none"
                placeholder="Password"
              />
            </div>

            <div class="form-group">
              <input
                v-model="confirm"
                type="password"
                class="form-control shadow-none"
                placeholder="Confirm Password"
              />
            </div>

            <div class="form-group">
              <button :disabled="disabled" @click.prevent="register" class="btn register-btn w-100 shadow-none">
                <span v-if="loading"><img class="img-fluid me-1" style="height: 15px;" src="../../public/assets/images/loading.gif" alt=""></span>
                Submit</button>
            </div>
            <p v-if="error" class="p-3 text-center" style="background-color: #FFCCCB; color: black;">{{ errorMsg }}</p>

            <div class="last row">
                    <div class="col-12" style="text-align: center;">
                        Don't have an account?
                        <b><router-link :to="{name : 'Login'}">Login</router-link></b>
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
  import axios from 'axios'
export default {
  name: "Register",
  data(){
    return{
        firstname : '',
        lastname : '',
        email : '',
        password : '',
        confirm : '',
        error : '',
        errorMsg : '',
        loading : false,
        disabled : false
        }
    },
    methods : {
        register(){
            this.disabled = true
            this.loading = true
            if(this.password !== this.confirm){
                this.error = true
                this.errorMsg = 'Passwords do not match'

                setTimeout(()=>{
                    this.error = false
                    this.errorMsg = ''
                    this.loading = false
                    this.disabled = false
                },2000)
                return
            }
            const formData = {
                firstname : this.firstname,
                lastname : this.lastname,
                email : this.email,
                password : this.password
            }

            axios.post('http://localhost:8000/api/auth/register', formData)
            .then(()=>{
                this.$router.push({name : 'Login'})
            })
            .catch((error)=>{
                this.error = true
                this.errorMsg = error.response.data.error

                setTimeout(()=>{
                    this.error = false
                    this.errorMsg = ''
                    this.disabled = false
                    this.loading = false
                },2000)
            })
        }
    }
};
</script>
  
  <style lang="scss" scoped>
.register {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(3, 41, 17, 0.6)),
    url("../../public/assets/images/landing.jpg");
  background-position: center center;
  background-size: cover;

  height: 100vh;
  //   background-color: red;
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
    height: 50px;
    width: 100%;
    margin: 20px 0;

    .register-btn {
      height: 50px;
      background-color: #279843;
      color: #fff;

      &:hover {
        background-color: #172b3b;
        transition: 0.6s;
      }
    }
    input {
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
  padding: 70px 50px;
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


</style>