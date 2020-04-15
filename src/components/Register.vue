<template>
  <div>
    <div class="sending" v-if="sending">Sending...</div>
    <div>
      <h2>新規ユーザー作成</h2>
      <div>
        <label>名前：</label>
        <input type="text" v-model="user.name">
      </div>
      <div>
        <label>説明文：</label>
        <textarea v-model="user.description"></textarea>
      </div>
      <div v-if="error" class="error">
        {{error}}
      </div>
      <div>
        <input type="button" @click="createUser" value="送信">
      </div>
    </div>
  </div>
</template>

<script>
var userData = [
  {
    id: 1,
    name: "yoshino",
    description: "よしのです"
  },
  {
    id: 2,
    name: "fumiya",
    description: "どうも"
  }
]

var postUser = function(params, callback) {
  setTimeout(function() {
    params.id = userData.length + 1
    userData.push(params)
    callback(null, params)
  }, 1000)
}

export default {
  name: "register",
  data() {
    return {
      sending: false,
      user: this.defaultUser(),
      error: null
    }
  },
  methods: {
    defaultUser: function() {
      return {
        name: '',
        description: '',
      }
    },
    createUser: function() {
      if (this.user.name.trim() === '') {
        this.error = "名前は必須です"
        return
      }
      if (this.user.description.trim() === '') {
        this.error = "説明は必須です"
        return
      }
      postUser(this.user, (function (err, user) {
        this.sending = false
        if (err) {
          this.error = err.toString()
        } else {
          this.error = null
          this.user = this.defaultUser()
          alert('新規ユーザーが登録されました')
          this.$router.push('/users')
        }
      }).bind(this))
    }
  }
}
</script>