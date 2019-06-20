<template>
  <div>
    <v-layout>
      <v-flex xs6 offset-xs3>
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
import SearchSong from '@/components/songs/SearchSong'
export default {
  name: 'Songs',
  components: {
    SongsPanel,
    SearchSong
  }
}
</script>
<style scoped>
</style>
