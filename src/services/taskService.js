import axios from 'axios'

const baseURL = "http://localhost:3000/tasks/"

export const taskService = {
    getAll() {
        return axios.get(baseURL)
    },

    createTask(newTask) {
        axios.post(baseURL, {title: newTask, isDone: false})

        return this.getAll()
    },

    deleteTask(id) {
        axios.delete(baseURL + id)

        return this.getAll()
    }
}