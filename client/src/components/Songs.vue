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
          <div v-for="(song, index) in songs" :key="index">
            {{song.title}} -
            {{song.artist}} -
            {{song.album}} <br>
          </div>
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
