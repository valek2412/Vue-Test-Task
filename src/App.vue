<template>
  <div class="container">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  a {
    color: mediumblue;
    text-decoration: none;
  }
  h3 {
    font-size: 20px;
    letter-spacing: 1px;
    max-width: 320px;
    width: 100%;
    position: relative;
    display: inline-block;
    color: #465457;
  }
</style>
