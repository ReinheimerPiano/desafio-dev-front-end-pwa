<template>
  <div id="app">
    <head>
      <link rel="shortcut icon" type="image/ico" href="https://canaltech.com.br/favicon.ico?_=v1691">
    </head>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #222;

    &.router-link-exact-active {
      color: #27a9e1;
    }
  }
}
</style>
