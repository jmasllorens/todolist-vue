<template>
<div>
  <h2>ID number: {{ $route.params.id }}</h2>
  <h2>Original title: "{{ movie.title}}"</h2>
  <h2>Spanish title: <em>{{ movie.spanishTitle }}</em></h2>
  <h2>Director: {{ movie.director }}</h2>
  <h2>Year: {{ movie.year }}</h2>
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
