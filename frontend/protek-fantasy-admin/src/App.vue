<template>
  <div class="nk-body bg-lighter npc-default has-sidebar">
    <div class="nk-app-root">
        <div class="nk-main ">
          <sideBar/>
          <div class="nk-wrap ">
          <Header/>
          
          <router-view/>
    </div>
    </div>
    </div>
  </div>
  
</template>

<script>
import sideBar from './components/SideBar.vue'
import Header from './components/Header.vue'
export default {
  name : 'App',
  components : {
    sideBar, Header
  }

}
</script>

<style lang="scss">

</style>
