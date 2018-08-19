<template>
  <v-toolbar dark color="cyan" fixed>
    <v-toolbar-side-icon></v-toolbar-side-icon>

    <v-toolbar-title>
      <v-btn flat to="/">
        Mixapolis
      </v-btn>
    </v-toolbar-title>

    <v-btn
      flat to="songs">
        Browse
      </v-btn>

    <v-spacer></v-spacer>

    <v-btn
    v-if="!$store.state.isUserLoggedIn"
    flat to="login">
      Login
    </v-btn>

      <v-btn
      v-if="!$store.state.isUserLoggedIn"
      flat to="register">
        Sign up
      </v-btn>

      <v-btn
      v-if="$store.state.isUserLoggedIn"
      flat @click="logout">
        Logout
      </v-btn>

    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>

<style scoped>

</style>
