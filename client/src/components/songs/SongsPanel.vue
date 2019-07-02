<template>
  <panel title="Songs">
    <v-btn
      slot="action"
      icon
      class="cyan accent-3"
      :to="{
        name: 'song-create'
      }"
    >
      <v-icon>add</v-icon>
    </v-btn>
    <v-subheader>
      List of songs
    </v-subheader>
    <v-card color="cyan" dark class="mt-2" v-for="(song, index) in songs" :key="index">
      <v-layout row>
        <v-flex xs7>
          <v-card-title primary-title>
            <div class="text-sm-left">
              <div class="headline">{{ song.title }}</div>
              <div><span>{{ song.artist }}</span> - <small>{{ song.album }}</small></div>
              <div>{{ song.genre }}</div>
            </div>
          </v-card-title>
        </v-flex>
        <v-flex xs5>
          <v-img
            :src="song.albumImageUrl"
            height="150px"
            contain
          ></v-img>
        </v-flex>
      </v-layout>
      <v-divider light></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="cyan lighten-4" light flat :to="{ name: 'song', params: { songId: song.id } }">View Song</v-btn>
      </v-card-actions>
    </v-card>
  </panel>
</template>

<script>

import SongsService from '@/services/SongService'
export default {
  name: 'SongsPanel',
  data: () => ({
    songs: null
  }),
  async mounted () {
    this.songs = (await SongsService.index()).data
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.index(value)).data
      }
    }
  }
}
</script>

<style scoped>

</style>
