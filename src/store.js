import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    msg: "Vue con Vuex",
    title: "Dr.",
    name: "Recordà",
    songs: [
      "Cansament brutal",
      "Àngels ferotges",
      "Mel i coratge",
      "Realitat vs ficcions",
      "Humor sapiens",
    ],
    song: null,
    songsNumber: 5,
  },
  mutations: {
    addSong(state) {
      state.songs = [state.song, ...state.songs];
    },
  },
  actions: {
    addSongAction(context) {
      context.commit("addSong");
    },
  },
  getters: {
    getMsg(state) {
      return state.msg;
    },
    getFullName(state) {
      return state.title + " " + state.name; // o también: `${state.title} ${state.name}`
    },
    getSongsNumber(state) {
      return state.songs.length;
    },
  },
});
