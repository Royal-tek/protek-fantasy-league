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
                                    <a href="index-2.html#" class="nav-link">
                                        Events 
                                        <i class="bx bx-chevron-down"></i>
                                    </a>

                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="events.html" class="nav-link">Events</a>
                                        </li>

                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a href="index-2.html#" class="nav-link">
                                        Coach Admin 
                                        <i class="bx bx-chevron-down"></i>
                                    </a>

                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="speakers.html" class="nav-link">Manage Players</a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link">
                                        Team 
                                        <i class="bx bx-chevron-down"></i>
                                    </a>

                                    <ul class="dropdown-menu">
                                        
                                        <li class="nav-item">
                                            <router-link :to="{name : 'PickTeam'}" href="pricing.html" class="nav-link">Pick Team</router-link>
                                        </li>

                                        <li class="nav-item">
                                            <a href="gallery.html" class="nav-link">My Team</a>
                                        </li>

                            

                                        <li class="nav-item">
                                            <a href="sponsors.html" class="nav-link">Sponsor</a>
                                        </li>


                                    
                                    </ul>
                                </li>

                                <!-- <li class="nav-item">
                                    <a href="index-2.html#" class="nav-link">
                                        Blog 
                                        <i class="bx bx-chevron-down"></i>
                                    </a>

                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="blog.html" class="nav-link">Blog</a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="blog-style-two.html" class="nav-link">Blog Style Two</a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="blog-right-sidebar.html" class="nav-link">Blog Right Sidebar</a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="blog-details.html" class="nav-link">Blog Details</a>
                                        </li>
                                    </ul>
                                </li> -->
    
                                <li class="nav-item">
                                    <a href="contact.html" class="nav-link">Contact</a>
                                </li>

                                <li class="nav-item" v-show="mobile">
                                    <router-link :to="{name : 'Login'}" class="nav-link" style="color:#279843; font-weight:bold !important">Login</router-link>
                                </li>
                                
                            </ul>

                            <div class="others-options d-flex align-items-center">

                                <div class="option-item"  v-if="!token">
                                    <router-link :to="{name : 'Login'}" class="default-btn"><i class='bx bx-arrow-to-right'></i>Login<span></span></router-link>
                                </div>
                                <div class="option-item" v-if="token">
                                    <i @click="logout" class="fa fa-power-off logout" ></i>
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
        },

    methods: {
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

</style>