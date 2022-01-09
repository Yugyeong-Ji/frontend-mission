<template>
<div>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
  <input type = "text" v-model = "message" @input = "changeKeyword"/>
  <button v-on:click="changeMessage">제출</button>
  <p>{{ message }}</p>
</div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      message: '',
      cnt: 0,
    };
  },
  methods: {
    changeMessage() {
      const array = this.message.split('');
      const temp = array.shift();
      array.push(temp);
      this.message = array.join('');
    },
    changeKeyword(e) {
      this.message = e.target.value;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
