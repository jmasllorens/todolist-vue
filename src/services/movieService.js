import axios from 'axios'

const baseURL = "http://localhost:3000/movies/"

export const movieService = {
    getAll() {
        return axios.get(baseURL)
    },
    addMovie(newMovie) {
        return axios.post(baseURL, newMovie)
    },
    getById(id) {
        return axios.get(baseURL + id)
    },
    deleteMovie(id) {
        axios.delete(baseURL + id)
        return this.getAll()
    }
    
}