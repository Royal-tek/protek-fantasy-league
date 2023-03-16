<template>
  <div id="nav">
    <Navbar v-if="navigation"/>
        <!-- Start Preloader Area -->
        <div class="preloader">
            <div class="loader">
                <div class="shadow"></div>
                <div class="box"></div>
            </div>
        </div>
        <!-- End Preloader Area -->
    <router-view/>
  <Footer v-if="navigation"/>
  </div>
  
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  name : 'App',
  data(){
    return {
      navigation : true
    }
  },
  components : {
    Navbar, Footer
  },
  methods : {
    checkNavigation(){
      if(this.$route.name === 'Login' || this.$route.name === 'Register'){
        this.navigation = false
        return
      }
      this.navigation = true
    }
  },
  watch : {
    $route(){
      this.checkNavigation()
    }
  }
}
</script>

<style lang="scss">

</style>
