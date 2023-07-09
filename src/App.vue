<template>
  <div>
    <header class="header">
      <router-link to="/login">로그인</router-link>
      <!-- <span style="display:block;" @click="logout"> {{ $t('auth.logout') }}</span> -->
      <router-link to="/"> HOME </router-link>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html {
  box-sizing: border-box;
}

.header {
  color: violet;
}
</style>
