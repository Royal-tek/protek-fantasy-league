<template>
  <div class="home">
    <!-- Start Main Banner Area -->
    <div class="main-banner-area" :style="`background-image: url(${bgImage})`">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-7 col-md-12">
                        <div class="main-banner-content">
                          
                            <h1 class="wow fadeInUp text-uppercase" data-wow-delay="100ms" data-wow-duration="1000ms">Build Your Dream Team</h1>
                            <p class="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">Build your fantasy team and compete against other players on the game and stand a chance to win amazing prizes.</p>
    
                            <div class="banner-btn wow fadeInUp" data-wow-delay="300ms" data-wow-duration="2000ms">
                                <router-link to="/register" href="pricing.html" class="default-btn"><i class='fa fa-registered'></i> Register now<span></span></router-link>
    
                                
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-5 col-md-12">
                        <div class="main-banner-image wow fadeInUp" data-wow-delay="300ms" data-wow-duration="2000ms">
                            <img src="assets/images/newest4.png" class="img-fluid" alt="image">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Main Banner Area -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data(){
    return{
        bgImage : null,
        
    }
  },
  mounted() {
    this.preloadImage();
  },
  components: {
    
  
  },
  methods : {
    preloadImage() {
      const image = new Image();
      image.src = 'assets/images/newestlanding.jpg';
      image.onload = () => {
        this.bgImage = image.src;
      };
    },
  }


}
</script>
