<template>
  <div id="app">
    <nav><router-link to="/">Users</router-link></nav>
    <router-view />
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  methods: mapActions(["fetchPhotos"]),
  computed: mapGetters(["getStatus"]),
  mounted() {
    // this.fetchPhotos(2)
  },
};
</script>

<style lang="scss">
@import './global.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
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
