<template>
    <div class="movies">
        <ul>
        <li v-for="(movie, i) in movieList" :key="i" style="margin-top: 2rem;">
            "{{movie.title}}" (<em>{{movie.spanishTitle}}</em>), by {{movie.director}}
            <button @click="deleteMovie(movie.id)" class="deleteBtn">X</button>
        </li>
        </ul>
        <div style="margin-top: 4rem;">
          <form>
            <label for=""><strong>Original title</strong></label>&nbsp;&nbsp;
            <input type="text" v-model="newMovie.title">&nbsp;&nbsp;
            <label for=""><strong>Spanish title</strong></label>&nbsp;&nbsp;
            <input type="text" v-model="newMovie.spanishTitle">&nbsp;&nbsp;
            <label for=""><strong>Director</strong></label>&nbsp;&nbsp;
            <input type="text" v-model="newMovie.director">
          </form>
        </div>
        <div style="margin-top: 1.5rem;">
             <button type="submit" @click="saveMovie">Add new movie</button>
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
             movieList: [],
             newMovie: {}
         }
     },
     async created() {
         const res = await movieService.getAll()
         this.movieList = res.data
     },
     methods: {
         async saveMovie() {
             const res = await movieService.addMovie(this.newMovie)
             this.movieList = [...this.movieList, res.data]
             this.newMovie = {}
         },
         async deleteMovie(id) {
             const res = await movieService.deleteMovie(id)
             this.movieList = res.data
         }
     }
}
</script>

<style>

</style>