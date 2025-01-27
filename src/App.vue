<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/videoigre">Videoigre</router-link> |
      <router-link to="/vr">VR i ozbiljne igre</router-link> |
      <router-link to="/karte">Interaktivne karte</router-link> |
      <router-link to="/price">Aplikacije za priče</router-link> |
      <router-link to="/muzeji">Virtualni muzeji i arhivi</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  margin-bottom: 20px;
}

nav a {
  font-weight: bold;
  color: #42b983;
  text-decoration: none;
  margin: 0 15px;
}

nav a.router-link-exact-active {
  color: #35495e;
}
</style>