import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const lyricsSongs = () => {
    return [{
        title: "Àngels ferotges",
        line1: "ritme i acció, tot emoció",
        line2: "agitació sense control",
        line1Chorus: "érem àngels tan ferotges que solíem fer bullir la sang",
    }, {
        title: "Mel i coratge",
        line1: "",
        line2: "",
        line1Chorus: "",
    }]
}  


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
      "Centaures i caputxetes",
      "Humor sapiens",

    ],
    song: null,
    //songsNumber: null,
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
    getSecondSong(state) {
        return state.songs[1]
    },
  },
});
