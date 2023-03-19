<template>
  <div id="nav">
    <Header/>
    <sideBar/>
  </div>
  <router-view/>
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
