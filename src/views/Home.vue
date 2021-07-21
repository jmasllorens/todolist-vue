<template>
  <div class="home">
    <Searcher />
    <h3 style="margin-top: 2rem; margin-bottom: 2rem;">{{ $store.state.msg}} - state calling </h3>
    <h3 style="margin-top: 2rem; margin-bottom: 2rem;">{{ $store.getters.getMsg}} - getters calling</h3>
    <h4 style="margin-top: 2rem; margin-bottom: 2rem;">{{ $store.state.title}} {{ $store.state.name}} - state calling</h4>
    <h4 style="margin-top: 2rem; margin-bottom: 2rem;">{{ $store.getters.getFullName}} - getters calling</h4>
    <img alt="Vue logo" src="../assets/vuejs.jpg">
    
  
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
