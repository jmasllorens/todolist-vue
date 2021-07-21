<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>   |
      <router-link to="/tasks">Tasks</router-link>        |
      <router-link to="/movies">Movies</router-link>     |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

  ul {
    margin: 0px;
    padding: 0px;
  }

  li {
  list-style: none;
  }

  .deleteBtn {
  
  background-color: #f44336;
  border: none;
  border-radius: 5px;
  color: white;
  margin-left: 10px;
  padding: 10px 18px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
}

.submitBtn {
  
  background-color: #42b983;
  border: none;
  border-radius: 5px;
  color: white;
  margin-left: 10px;
  padding: 10px 18px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
}

.inputTaskTitles {

  width: 20%;
}

.inputNewTask {

  width: 20%;
}
.updateBtn {

  background-color: #2c3e50;
  border: none;
  border-radius: 5px;
  color: white;
  margin-left: 10px;
  padding: 10px 18px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;

}
  


#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  }
</style>
