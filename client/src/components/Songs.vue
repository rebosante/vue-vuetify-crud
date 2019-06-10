<template>
  <v-layout>
      <v-flex xs6 offset-xs3>
        <panel title="Songs">
          <v-btn
            slot="action"
            icon
            class="cyan accent-3"
            @click="navigateTo({
              name: 'song-create'
            })"
          >
            <v-icon>add</v-icon>
          </v-btn>
          <v-list two-line>
            <template>
              <v-subheader>
                List of songs
              </v-subheader>
              <div v-for="(song, index) in songs" :key="index">
                <v-divider></v-divider>
                <v-list-tile
                  avatar
                >
                  <v-list-tile-avatar>
                    <img :src="song.albumImgUrl">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title><strong>{{ song.title }}</strong> | {{ song.genre }}</v-list-tile-title>
                    <v-list-tile-sub-title><span class='text--primary'>{{ song.artist }}</span> - <small>{{ song.album }}</small></v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-btn
                    dark
                    class="cyan"
                    @click="navigateTo({ name: 'song', params: { songId: song.id } })"
                  >
                    View Song
                  </v-btn>
                </v-list-tile>

              </div>
            </template>
          </v-list>
        </panel>
      </v-flex>
    </v-layout>
</template>
<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongService'
export default {
  name: 'Songs',
  components: {
    Panel
  },
  data: () => ({
    songs: null
  }),
  async mounted () {
    this.songs = (await SongsService.index()).data
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>
<style scoped>
</style>
