<template>
  <div class="movies">
      <h3 style="margin-top: 2rem; margin-bottom: 4rem;">Total of must-see movies: {{counter}}</h3>
    <ul>
      <li
        v-for="(movie, i) in moviesList"
        :key="i"
        style="margin-top: 2rem"
        @click="showMovie(movie.id)"
      >
        "{{ movie.title }}" (<em>{{ movie.spanishTitle }}</em
        >), by {{ movie.director }}
        <button @click="deleteMovie(movie.id)" class="deleteBtn">x</button>
      </li>
    </ul>
    <div style="margin-top: 5rem">
      <form>
        <label for=""><strong>Original title</strong></label
        >&nbsp;&nbsp; <input type="text" v-model="newMovie.title" />&nbsp;&nbsp;
        <label for=""><strong>Spanish title</strong></label
        >&nbsp;&nbsp;
        <input type="text" v-model="newMovie.spanishTitle" />&nbsp;&nbsp;
        <label for=""><strong>Director</strong></label
        >&nbsp;&nbsp;
        <input type="text" v-model="newMovie.director" />
      </form>
    </div>
    <div style="margin-top: 1.5rem">
      <button type="submit" @click="saveMovie" class="submitBtn">
        Add new movie
      </button>
    </div>
  </div>
</template>

<script>

import { movieService} from '../services/movieService'

export default {
     name: 'Movies',
     components: {

     },
     data() {
         return {
             moviesList: [],
             newMovie: {}
         }
     },
     async created() {
         const res = await movieService.getAll()
         this.moviesList = res.data
     },
     methods: {
         async saveMovie() {
             const res = await movieService.addMovie(this.newMovie)
             this.moviesList = [...this.moviesList, res.data]
             this.newMovie = {}
         },
         async deleteMovie(id) {
             const res = await movieService.deleteMovie(id)
             this.moviesList = res.data
         },
         async showMovie(id) {
             const res = await movieService.showMovie(id)
             this.$router.push({name: 'MovieDetails', params: {id:id}}) // Esto es igual a: ('/movies/' + id)
         }      
     },
     computed: {
         counter() {
             return this.moviesList.length
         }
     }
}
</script>

<style></style>
