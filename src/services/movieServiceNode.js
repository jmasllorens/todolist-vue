import axios from 'axios'

const baseURL = "http://localhost:3001/api/movies/"

export const movieServiceNode = {
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
    },
    showMovie(id) {
        return axios.get(baseURL + id)
    }
    
}