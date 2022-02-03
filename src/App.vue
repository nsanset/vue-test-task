<template>
  <div id="app">
    <router-view class="animate__animated animate__fadeIn"/>
  </div>
</template>

<style lang="scss">
body {
  background-color: rgba(228, 228, 228, .2);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
