<template>
  <div id="app">
    <nav>
      <router-link to="/">base</router-link> |
      <router-link to="/extends1">extends1</router-link> |
      <router-link to="/extends2">extends2</router-link> |
      <router-link to="/about">About</router-link> |
    </nav>
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
