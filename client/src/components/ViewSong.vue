<template>
  <div>
    I AM A SONG
  </div>
</template>

<script>
import SongsService from '@/services/SongService'
export default {
  name: 'ViewSong',
  data: () => ({
    song: null
  }),
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = await SongsService.show(songId)
    console.log('si')
  }
}
</script>

<style scoped>

</style>
