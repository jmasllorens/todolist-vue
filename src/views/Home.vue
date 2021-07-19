<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/list2.png">
    <h1>Tasks</h1>
    <input type="text" v-model="taskTitle" placeholder="New task" class="inputNewTask">&nbsp;
    <button v-on:click="addTask()" class="submitBtn" type="submit">SUBMIT</button><br><br><br>
    <ul v-for="task of tasks" :key="task.id">
     <li>
        <input type="checkbox" id="checkbox" v-on:click="taskDone(task.id)">
        <label for="checkbox"></label>  
       <input @change="changeName(task.title)" type="text" v-model="task.title" value="updatedTask" class="inputTaskTitles">&nbsp;
       <button @click="updateTask(task.id)" class="updateBtn">UPDATE</button>
       <button @click="deleteTask(task.id)" class="deleteBtn">DELETE</button>
     </li><br>
    </ul>
    
  
  </div>
   
</template>

<script>
// @ is an alias to /src

import axios from 'axios'
import { taskService } from "@/services/taskService"

const baseURL = "http://localhost:3000/tasks/"

export default {

  name: 'Home',

  data() {
    return {
      tasks: [],
      taskTitle: '',
      updatedTask: ''
      
    }
  },

  async created() {
    try {
      const res = await taskService.getAll()

      this.tasks = res.data;
    } catch (e) {
      console.error(e);
    }
  },

  methods: {
    async addTask() {
      let newTask = this.taskTitle
      const res = await taskService.createTask(newTask)
     
      this.tasks = res.data
      this.taskTitle = ''
    },

    deleteTask(id) {
      taskService.deleteTask(id)

      this.tasks = this.tasks.filter(task=>task.id != id) 

    },
  
    taskDone(id) {
      axios.patch(`http://localhost:3000/tasks/${id}`, {isDone: true})
    },
 
    changeName(taskTitle) {
      this.updatedTask = taskTitle
    }, 
    
    updateTask(id) {
    
      axios.patch(baseURL + id, {title: this.updatedTask}).then(() => {
         this.created()
      }) 
    }    
    }    
}
</script>
