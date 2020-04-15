<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="/users">ユーザー一覧</router-link>
    <router-link to="/users/new?redirect=true">新規ユーザー登録</router-link>
    <router-link to="/login">ログイン</router-link>
    <router-link to="/logout">ログアウト</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
