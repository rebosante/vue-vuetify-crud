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
import SongHistoryService from '@/services/SongHistoryService'
import {mapState} from 'vuex'
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
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'route'
    ])
  },
  async mounted () {
    const songId = this.route.params.songId
    this.song = (await SongsService.show(songId)).data

    if (this.isUserLoggedIn) {
      SongHistoryService.post({
        songId: songId
      })
    }
  }
}
</script>

<style scoped>

</style>
