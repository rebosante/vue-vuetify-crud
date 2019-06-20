<template>
  <v-layout v-if="song">
    <v-flex>
      <SongMetadata :song="song" />
    </v-flex>
    <v-flex xs8>
      <SongInfo :song="song" />
      <YouTube :video-id="song.youtubeId" />
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongService'
import SongMetadata from '@/components/view_song/SongMetadata'
import SongInfo from '@/components/view_song/SongInfo'
import YouTube from '@/components/view_song/YouTube'
export default {
  name: 'ViewSong',
  components: {
    SongInfo,
    SongMetadata,
    YouTube
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
