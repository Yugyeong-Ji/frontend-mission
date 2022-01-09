<template>
<div>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
  <input type = "text" v-model = "message" @input = "changeKeyword"/>
  <button v-on:click="changeMessage">제출</button>
  <button v-on:click="countClick (cnt += 1)">알림</button>
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
  // 문자열 회전 함수, 클릭 횟수 카운트 함수
  methods: {
    changeMessage() {
      const array = this.message.split('');// String을 배열로 변환
      const temp = array.shift();
      array.push(temp);
      this.message = array.join('');
    },
    changeKeyword(e) {
      this.message = e.target.value;
    },
    // 한국어 타이핑 문제 해결
    countClick(cnt) {
      // eslint-disable-next-line
      alert(`${this.message} ${cnt}`);
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
