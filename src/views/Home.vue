<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/vuejs.jpg" style="margin-bottom: 2rem;">
    <Searcher />
    <h5 style="margin-top: 2rem;">{{ $store.state.msg}} - state calling </h5>
    <h5 style="margin-top: 1rem;">{{ $store.getters.getMsg}} - getters calling</h5>
    <h5 style="margin-top: 1rem;">{{ $store.state.title}} {{ $store.state.name}} - state calling</h5>
    <h5 style="margin-top: 1rem;">{{ $store.getters.getFullName}} - getters calling</h5>
  </div>
   
</template>

<script>
// @ is an alias to /src
import Searcher from '../components/Searcher.vue'

export default {
     name: 'Home',
     components: {

         Searcher

     },
}



</script>
