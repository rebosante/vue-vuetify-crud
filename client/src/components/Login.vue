<template>
    <v-layout>
      <v-flex xs6 offset-xs3>

        <v-card>
          <v-toolbar flat dark color="cyan">
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <div class="pa-3">
            <v-form v-model="valid">
              <v-text-field
                color="cyan"
                v-model="email"
                label="E-mail"
                required
              ></v-text-field>
              <v-text-field
                color="cyan"
                v-model="password"
                label="Password"
                type="password"
                required
              ></v-text-field>
              <div class="error" v-html="error"></div>
              <v-btn @click="login" dark color="cyan">Login</v-btn>
            </v-form>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Login',
  data () {
    return {
      valid: false,
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      this.error = null
      try {
        await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error {
    color: red;
  }
</style>
