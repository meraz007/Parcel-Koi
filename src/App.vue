<template>
  <div id="nav">
    <Navbar />
  </div>
  <router-view />
</template>

<script>
import Navbar from './components/NavBar.vue'
export default {
  components:{
    Navbar
  }
}
</script>

<style>

</style>
