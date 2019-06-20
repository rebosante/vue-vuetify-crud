<template>
    <v-layout>
      <v-flex xs6 offset-xs3>
        <panel title="Register">
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
              autocomplete="new-password"
              required
            ></v-text-field>
            <div class="error" v-html="error"></div>
            <v-btn @click="register" dark color="cyan">Register</v-btn>
          </v-form>
        </panel>
      </v-flex>
    </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'Register',
  data () {
    return {
      valid: false,
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      this.error = null
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
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
