<template>
  <panel title="Album Details" class="ml-4">
    <v-layout row wrap>
      <v-flex d-flex xs12 child-flex pa-1>
        <v-card color="orange lighten-2" tile flat>
          <v-card-text>{{ song.tab }}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 pa-1>
        <v-card color="red lighten-2" dark tile flat>
          <v-card-text>{{ song.lyrics }}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>

export default {
  name: 'SongInfo',
  props: {
    song: {
      type: Object,
      default: () => ({})
    }

  }
}
</script>

<style scoped>

</style>
