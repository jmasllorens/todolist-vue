<template>
  <div class="movies">
    <!-- <div><p><Searcher /></p></div> -->
    <h3 style="margin-top: 2rem; margin-bottom: 2.5rem">
      Total of must-see movies: {{ counter }}
    </h3>
    <article
      v-for="(movie, i) in moviesList"
      :key="i"
      style="margin-top: 2rem; margin-bottom: 2rem"
      @click="showMovie(movie.id)"
    >
      <img
        :src="require(`@/assets/${movie.img}.jpg`)"
        style="width: 10%; border-radius: 0.5rem; margin-top: 1rem"
      /><br /><br />
      "{{ movie.title }}" (<em>{{ movie.spanishTitle }}</em
      >), by {{ movie.director }}&nbsp;&nbsp;&nbsp;
      <img
        src="@/assets/delete.png"
        style="width: 2%"
        @click="deleteMovie(movie.id)"
      /><br /><br /><br />
      <hr style="width: 80%" />
    </article>
    <div style="margin-top: 5rem">
      <form>
        <label for=""><strong>Original title</strong></label
        >&nbsp;&nbsp; <input type="text" v-model="newMovie.title" />&nbsp;&nbsp;
        <label for=""><strong>Spanish title</strong></label
        >&nbsp;&nbsp;
        <input type="text" v-model="newMovie.spanishTitle" />&nbsp;&nbsp;
        <label for=""><strong>Director</strong></label
        >&nbsp;&nbsp;
        <input type="text" v-model="newMovie.director" />&nbsp;&nbsp;
        <label for=""><strong>URL local image</strong></label
        >&nbsp;&nbsp; <input type="text" v-model="newMovie.img" />&nbsp;&nbsp;
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
import { movieService } from "../services/movieService";
import Searcher from "../components/Searcher.vue";

export default {
  name: "Movies",
  components: {
    Searcher,
  },
  data() {
    // data: modelo o estado propio de cada uno de los componentes
    return {
      moviesList: [],
      newMovie: {},
    };
  },
  async created() {
    const res = await movieService.getAll();
    this.moviesList = res.data;
  },
  methods: {
    async saveMovie() {
      const res = await movieService.addMovie(this.newMovie);
      this.moviesList = [...this.moviesList, res.data];
      this.newMovie = {};
    },
    async deleteMovie(id) {
      const res = await movieService.deleteMovie(id);
      this.moviesList = res.data;
    },
    async showMovie(id) {
      const res = await movieService.showMovie(id);
      this.$router.push({ name: "MovieDetails", params: { id: id } }); // Esto es igual a: ('/movies/' + id)
    },
  },
  computed: {
    counter() {
      return this.moviesList.length;
    },
  },
};
</script>

<style></style>
