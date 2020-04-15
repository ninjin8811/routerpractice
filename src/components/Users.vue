<template>
  <div>
    <div class="loading" v-if="loading">
      <p>読み込み中...</p>
    </div>
    <div class="error" v-if="error">
      <p>{{error}}</p>
    </div>
    <div v-for="user in users" :key="user.id">
      <h2>{{user.name}}</h2>
    </div>
  </div>
</template>

<script>
var getUsers = function (callback) {
  setTimeout(function () {
    callback(null, [
      {
        id: 1,
        name: "yoshino"
      },
      {
        id: 2,
        name: "fumiya"
      }
    ])
  }, 1000)
}

export default {
  name: 'users',
  data() {
    return {
      loading: false,
      users: function() {
          return []
      },
      error: null
    }
  },
  created() {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData: function() {
      this.loading = true
      getUsers((function(err, users) {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.users = users
        }
      }).bind(this))
    }
  }
}
</script>