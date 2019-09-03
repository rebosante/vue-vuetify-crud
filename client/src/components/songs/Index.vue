<template>
  <div>
    <v-layout>
      <v-flex mr-2>
        <SongsBookmarks />
      </v-flex>
      <v-flex>
        <SearchSong />
      </v-flex>
    </v-layout>
    <v-layout mt-4>
      <v-flex xs6 offset-xs3>
        <SongsPanel />
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import SongsPanel from '@/components/songs/SongsPanel'
import SongsBookmarks from '@/components/songs/Songsbookmarks'
import SearchSong from '@/components/songs/SearchSong'
export default {
  name: 'Songs',
  components: {
    SongsPanel,
    SearchSong,
    SongsBookmarks
  }
}
</script>
<style scoped>
</style>
