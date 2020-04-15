import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main.vue'
import Users from '../components/Users.vue'
// import App from '../App.vue'
import Register from '../components/Register.vue'
import UserDetail from '../components/UserDetail.vue'
import Login from '../components/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'top',
    //   component: App,
    //   beforeEnter: function(to, from, next) {
    //     if (to.query.redirect === 'true') {
    //       next('/main')
    //     } else {
    //       next()
    //     }
    //   }
    // },
    {
      path: '/main',
      name: 'main',
      component: Main
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/users/new',
      component: Register
    },
    {
      path: '/users/:userId',
      component: UserDetail
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/logout',
      beforeEnter: function(to, from, next) {
        Auth.logout()
        next('/')
      }
    }
  ]
})
