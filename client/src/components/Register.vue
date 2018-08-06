<template>
  <div class="register">
    <h1>Register</h1>
    <input type="email" v-model="email" name="email" placeholder="email"/>
    <input type="password" v-model="password" name="password" placeholder="password"/>
    <button @click="register">Register</button>
    <div class="error" v-html="error"></div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
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
