<template>
<div>
  <h2 style="margin-bottom: 2.5rem;"><em>{{ movie.spanishTitle }}</em></h2>
    <!-- <img v-bind:src="`../assets/:${movie.img}.jpg`" style="width: 10%; margin-bottom: 1.5rem;"> -->
  <img :src="require(`@/assets/${movie.img}.jpg`)" style="width: 20%; margin-bottom: 1.5rem;" alt class="icon" />
  <h4>ID number: {{ $route.params.id }}</h4>
  <h3>Original title: "{{ movie.title}}"</h3>
  <h3>Director: {{ movie.director }}</h3>
  <h3>Year: {{ movie.year }}</h3>
</div>
</template>

<script>
import { movieService } from "../services/movieService";

export default {
  name: "MovieDetals",
  components: {},
  data() {
    return {
      movie: {}
    };
  },
  created() {
      this.getMovie()
  },
  methods: {
      async getMovie() {
          const res = await movieService.getById(this.$route.params.id)
          this.movie = res.data
      }
  }
};
</script>

<style></style>
