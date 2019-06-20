<template>
  <Panel title="Search songs">
    <v-text-field
      box
      label="Search by song title, artist, album or genre"
      append-icon="search"
      v-model="search"
    ></v-text-field>
  </Panel>
</template>

<script>

export default {
  name: 'SearchSong',
  data: () => ({
    search: ''
  }),
  watch: {
    search (value) {
      const route = {
        name: 'songs'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    },
    '$route.query.search': {
      inmediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
}
</script>

<style scoped>

</style>
