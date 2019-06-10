<template>
  <v-layout v-if="song">
    <v-flex xs4>
      <panel title="Song Metadata">
        <v-list two-line subheader>
          <v-subheader>General</v-subheader>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>Title</v-list-tile-title>
              <v-list-tile-sub-title>{{ song.title }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>Artist</v-list-tile-title>
              <v-list-tile-sub-title>{{ song.artist }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>Genre</v-list-tile-title>
              <v-list-tile-sub-title>{{ song.genre }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </panel>
    </v-flex>
    <v-flex xs8>
      <panel title="Song Details" class="ml-4">
        {{ song.title }}
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongService'
export default {
  name: 'ViewSong',
  components: {
    Panel
  },
  data: () => ({
    song: null
  }),
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  }
}
</script>

<style scoped>

</style>
