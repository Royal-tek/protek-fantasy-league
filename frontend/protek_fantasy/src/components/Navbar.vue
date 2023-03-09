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
                                    <router-link to="/" href="index-2.html#" class="nav-link active">Home</router-link>
                                </li>

                                <li class="nav-item">
                                    <a href="about.html" class="nav-link">About</a>
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

                                        <li class="nav-item">
                                            <a href="schedules.html" class="nav-link">Schedules</a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="venue.html" class="nav-link">Venue</a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="events-details.html" class="nav-link">Events Details</a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a href="index-2.html#" class="nav-link">
                                        Speakers 
                                        <i class="bx bx-chevron-down"></i>
                                    </a>

                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="speakers.html" class="nav-link">Speakers</a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="speakers-details.html" class="nav-link">Speakers Details</a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a href="index-2.html#" class="nav-link">
                                        Pages 
                                        <i class="bx bx-chevron-down"></i>
                                    </a>

                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="index-2.html#" class="nav-link">
                                                Products 
                                                <i class='bx bx-chevron-right'></i>
                                            </a>
        
                                            <ul class="dropdown-menu">
                                                <li class="nav-item">
                                                    <a href="products-grid.html" class="nav-link">Products Grid</a>
                                                </li>
        
                                                <li class="nav-item">
                                                    <a href="cart.html" class="nav-link">Cart</a>
                                                </li>
        
                                                <li class="nav-item">
                                                    <a href="checkout.html" class="nav-link">Checkout</a>
                                                </li>
        
                                                <li class="nav-item">
                                                    <a href="products-details.html" class="nav-link">Products Details</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li class="nav-item">
                                            <a href="pricing.html" class="nav-link">Pricing</a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="gallery.html" class="nav-link">Gallery</a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="faq.html" class="nav-link">FAQ</a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="sponsors.html" class="nav-link">Sponsors</a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="index-2.html#" class="nav-link">
                                                Account 
                                                <i class='bx bx-chevron-right'></i>
                                            </a>
        
                                            <ul class="dropdown-menu">
                                                <li class="nav-item">
                                                    <a href="login.html" class="nav-link">Login</a>
                                                </li>
        
                                                <li class="nav-item">
                                                    <a href="register.html" class="nav-link">Register</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li class="nav-item">
                                            <a href="privacy-policy.html" class="nav-link">Privacy Policy</a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="terms-of-service.html" class="nav-link">Terms of Service</a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="error-404.html" class="nav-link">404 Error</a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="coming-soon.html" class="nav-link">Coming Soon</a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
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
                                </li>
    
                                <li class="nav-item">
                                    <a href="contact.html" class="nav-link">Contact</a>
                                </li>

                                <li class="nav-item" v-show="mobile">
                                    <router-link to="/login" class="nav-link" style="color:#279843; font-weight:bold !important">Login</router-link>
                                </li>
                            </ul>

                            <div class="others-options d-flex align-items-center">

                                <div class="option-item">
                                    <router-link to="/login" class="default-btn"><i class='bx bx-arrow-to-right'></i>Login<span></span></router-link>
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
            windownWidth : ''
        }
    },
    created() {
      window.addEventListener("resize", this.checkScreen);
      this.checkScreen();
    },
    methods: {
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

</style>