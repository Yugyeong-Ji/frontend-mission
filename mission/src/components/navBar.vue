<template>
<div id="app">
  <div class="navbar" :class="{ 'navbar--hidden': !showNavbar}">
    <h3>{{ brand }}</h3>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      brand: '@깽_마켓',
    };
  },
  methods: {
    onScroll() {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      if (Math.abs(this.lastScrollPosition - currentScrollPosition) < 60) {
        return;
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },
};
</script>

<style scoped>
.navbar {
    height: 65px;
    width: 100%;
    background: hsl(33, 15%, 51%);
    position: fixed;
    transform: translate3d(0, 0, 0);
    transition: 0.1s all ease-out;
}
.navbar.navbar--hidden {
    box-shadow: none;
    transform: translate3d(0, -100%, 0);
}
h3{
  text-align: left;
  margin-left:30px;
  font-family: 'Y_Spotlight';
  color:hsl(0, 0%, 100%);
}
</style>
