<template>
  <div>
    <h2>Login</h2>
    <p v-if="$route.query.redirect">ログインしてください</p>
    <form @submit.prevent="login">
      <label><input v-model="email" placeholder="email"></label>
      <label><input v-model="pass" placeholder="password" type="password"></label>
      <br>
      <button type="submit">ログイン</button>
      <p v-if="error" class="error">ログインに失敗しました</p>
    </form>
  </div>
</template>

<script>
var Auth = {
  login: function(email, pass, cb) {
    setTimeout(function() {
      if (email === 'vue@example.com' && pass === 'vue') {
        localStorage.token = Math.random().toString(36).substring(7)
        if (cb) {
          cb(true)
        } else {
          cb(false)
        }
      }
    }, 0)
  }
}

export default {
  name: 'login',
  data() {
    return {
      email: 'vue@example.com',
      pass: '',
      error: false
    }
  },
  methods: {
    login: function() {
      Auth.login(this.email, this.pass, (function(loggedIn) {
        if (!loggedIn) {
          this.error = true
        } else {
          this.$router.replace(this.$route.query.redirect || '/')
        }
      }).bind(this))
    }
  }
}
</script>