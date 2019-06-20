<template>
  <v-card>
    <v-toolbar flat dark color="cyan">
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <slot name="action" />

    </v-toolbar>
    <div class="pa-3">
      <slot>No content defined...</slot>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'Panel',
  data () {
    return {
    }
  },
  props: {
    title: {
      type: String,
      default: 'Untitled'
    }
  }
}
</script>

<style scoped>

</style>
