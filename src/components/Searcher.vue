<template>
  <div class="searcher">
    <h2>Tries</h2>
    <h4>{{ $store.state.msg }}</h4>
    <h5>{{ $store.getters.getFullName}}</h5>
    <h3 style="margin-bottom: 2rem;">Songs</h3>
    <input type="text" v-model="song">&nbsp;&nbsp;
    <button class="btn btn-warning" style="margin-bottom: 2rem;" @click="addSong">Add new song</button>
    <ul>
        <li 
        v-for="(song, i) in $store.state.songs"
        :key="i">
        {{ song }}
        </li>
    </ul>
    </div>
    
</template>
<script>
export default {
  name: 'Searcher',
  data() {
      return {
          song:''
      }
  },
  methods: {
      addSong() {
          this.$store.state.song = this.song
          this.$store.dispatch('addSongAction')
          this.song = ''  // para limpiar el input
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
