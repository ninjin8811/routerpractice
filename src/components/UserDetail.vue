<template>
  <div>
    <div class="loading" v-if="loading">
      <p>読み込み中...</p>
    </div>
    <div class="error" v-if="error">
      <p>{{error}}</p>
    </div>
    <div v-if="user">
      <h2>{{user.name}}</h2>
      <p>{{user.description}}</p>
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

var getUser = function(userId, callback) {
  setTimeout(function() {
    var filteredUsers = userData.filter(function(user) {
      return user.id === parseInt(userId, 1)
    })
    callback(null, filteredUsers && filteredUsers[0])
  }, 1000)
}

export default {
  name: "user-detail",
  data() {
    return {
      loading: false,
      user: null,
      error: null
    }
  },
  created: function() {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData: function() {
      this.loading = true,
      getUser(this.$route.params.userId, (function(err, user) {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.user = user
        }
      }).bind(this))
    }
  }
}
</script>