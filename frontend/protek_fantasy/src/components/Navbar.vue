<template>
  <div id="navbar">
            <!-- Start Navbar Area -->
            <div class="navbar-area">
            <div class="main-responsive-nav">
                <div class="container">
                    <div class="main-responsive-menu">
                        <div class="logo">
                            <router-link to="/">
                                <img src="pflogo.png" alt="logo">
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="main-navbar">
                <div class="container">
                    <nav class="navbar navbar-expand-md navbar-light">
                        <router-link to="/" class="navbar-brand">
                            <img src="pflogo.png" class="img-fluid" style="height:60px" alt="logo">
                        </router-link>

                        <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul class="navbar-nav m-auto">
                                <li class="nav-item">
                                    <router-link to="/" class="nav-link active">Home</router-link>
                                </li>

                                <li class="nav-item">
                                    <router-link :to="{name : 'About'}" class="nav-link">About</router-link>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link">
                                        Events 
                                        <i class="fa fa-caret-down"></i>
                                    </a>

                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="events.html" class="nav-link">Events</a>
                                        </li>

                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a  class="nav-link">
                                        Coach Admin 
                                        <i class="fa fa-caret-down"></i>
                                    </a>

                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <router-link :to="{name : 'CoachAdmin'}" class="nav-link">Manage Players</router-link>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link">
                                        Team 
                                        <i class="fa fa-caret-down"></i>
                                    </a>

                                    <ul class="dropdown-menu">
                                        
                                        <li class="nav-item">
                                            <router-link :to="{name : 'PickTeam'}"  class="nav-link">Pick Team</router-link>
                                        </li>

                                        <li class="nav-item">
                                            <a href="gallery.html" class="nav-link">My Team</a>
                                        </li>

                            

                                        <li class="nav-item">
                                            <a href="sponsors.html" class="nav-link">Sponsor</a>
                                        </li>


                                    
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link">
                                        Profile 
                                        <i class="fa fa-caret-down"></i>
                                    </a>

                                    <ul class="dropdown-menu">
                                        
                                        <li class="nav-item">
                                            <router-link :to="{name : 'PickTeam'}"  class="nav-link">Approve Account</router-link>
                                        </li>

                                        <li class="nav-item">
                                            <a href="gallery.html" class="nav-link">My Team</a>
                                        </li>

                            

                                        <li class="nav-item">
                                            <a href="sponsors.html" class="nav-link">Sponsor</a>
                                        </li>


                                    
                                    </ul>
                                </li>

    
                                <li class="nav-item">
                                    <a href="contact.html" class="nav-link">Contact</a>
                                </li>

                                <li class="nav-item" v-if="!token" v-show="mobile">
                                    <router-link :to="{name : 'Login'}" class="nav-link" style="color:#279843; font-weight:bold !important">Login</router-link>
                                </li>
                                <li class="nav-item" v-if="token" v-show="mobile">
                                    <router-link :to="{name : 'Login'}" class="nav-link" style="color:#279843; font-weight:bold !important">Logout</router-link>
                                </li>
                                
                            </ul>

                            <div class="others-options d-flex align-items-center">

                                <div class="option-item"  v-if="!token">
                                    <router-link :to="{name : 'Login'}" class="default-btn"><i class='fa fa-arrow-right'></i>Login<span></span></router-link>
                                </div>
                                <div class="option-item" v-if="token">
                                    

                                    <a class="logout"><i @click="logout" class="fa fa-power-off logout" ></i></a>
                                    
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

          
            
        </div>
        <!-- End Navbar Area -->

        
  </div>
</template>

<script>
import jwt_decode from 'jwt-decode'
export default {
    name : 'Navbar',
    data (){
        return{
            mobile:false,
            windownWidth : '',
            token : null
        }
    },
        created() {
        window.addEventListener("resize", this.checkScreen);
        this.checkScreen();
        this.getToken();
        this.checkToken();
        },

    methods: {
        checkToken(){
            if(this.token){
                const decoded = jwt_decode(this.token)
                const currentTime = Date.now() / 1000
                if (decoded.exp < currentTime){
                    this.logout()
                }
            }
        },
        getToken(){
            this.token = localStorage.getItem('token')
        },
        logout(){

            localStorage.removeItem('token')
            window.location = '/'
        },
        checkScreen() {
        this.windownWidth = window.innerWidth;
        if (this.windownWidth <= 1197) {
          this.mobile = true;
          return;
        }
        this.mobile = false;
        this.mobileNav = false;
        return;
      }
      
    }
}
</script>

<style>
.logout{
    color: #279843;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
}

/* Style the button that triggers the dropdown */
.dropbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

/* Style the dropdown content (hidden by default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  z-index: 1;
}

/* Style the links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change the background color of the dropdown links on hover */
.dropdown-content a:hover {
  background-color: #ddd;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}


</style>