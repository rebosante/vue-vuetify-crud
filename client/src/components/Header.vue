<template>
  <v-toolbar dark color="cyan" fixed>
    <v-toolbar-side-icon></v-toolbar-side-icon>

    <v-toolbar-title>
      <v-btn flat to="/">
        Mixapolis
      </v-btn>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn flat to="login">
      Login
    </v-btn>

      <v-btn flat to="register">
        Sign up
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
  name: 'Header'
}
</script>

<style scoped>

</style>
