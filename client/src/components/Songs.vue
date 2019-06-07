<template>
  <v-layout>
      <v-flex xs6 offset-xs3>
        <panel title="Songs">
          <div v-for="(song, index) in songs" :key="index">
            {{song.title}} <br>
            {{song.artist}} <br>
            {{song.album}} <br>
          </div>
        </panel>
      </v-flex>
    </v-layout>
</template>
<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
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
  }
}
</script>
<style scoped>
</style>
