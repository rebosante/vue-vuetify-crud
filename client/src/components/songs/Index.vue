<template>
  <div>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12>
          <SearchSong />
        </v-flex>
        <v-flex xs12>
          <SongsPanel />
        </v-flex>
        <v-flex v-if="isUserLoggedIn" xs6>
          <SongsBookmarks />
        </v-flex>
        <v-flex v-if="isUserLoggedIn" xs6>
          <RecentlyViewedSongs />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import SongsPanel from '@/components/songs/SongsPanel'
import RecentlyViewedSongs from '@/components/songs/RecentlyViewedSongs'
import SongsBookmarks from '@/components/songs/SongsBookmarks'
import SearchSong from '@/components/songs/SearchSong'
import {mapState} from 'vuex'
export default {
  name: 'Songs',
  components: {
    SongsPanel,
    SearchSong,
    SongsBookmarks,
    RecentlyViewedSongs
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  }
}
</script>
<style scoped>
</style>
