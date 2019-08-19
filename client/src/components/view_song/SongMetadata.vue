<template>
  <panel title="Song Metadata">
    <v-layout>
      <v-flex>
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
      </v-flex>
      <v-flex>
        <v-img
          :src="song.albumImageUrl"
          :lazy-src="'http://placehold.it/10x10'"
          aspect-ratio="1"
          width="180"
          class="grey lighten-2"
        />
        <p class="title mt-2">{{ song.album }}</p>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs6 text-xs-center>
        <v-btn :to="{
          name: 'song-edit',
          params: {
            songId: song.id
          }
        }">Edit song</v-btn>
        <v-btn v-if="isUserLoggedIn && isBookmarked" @click="bookmark">Unbookmark</v-btn>
        <v-btn v-if="isUserLoggedIn && !isBookmarked" @click="unbookmark">Bookmark</v-btn>
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'
export default {
  name: 'SongMetadata',
  props: {
    song: {
      type: Object,
      default: () => ({})
    }

  },
  data: () => ({
    isBookmarked: false
  }),
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  async mounted () {
    if (!this.isUserLoggedIn) {
      return
    }
    try {
      const bookmark = (await BookmarksService.index({
        songId: this.song.id,
        userId: this.$store.state.user.id
      })).data
      this.isBookmarked = !!bookmark
    } catch (err) {
      console.log('mounted', err)
    }
    console.log(this.isBookmarked)
  },
  methods: {
    async bookmark () {
      try {
        await BookmarksService.post({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })
      } catch (err) {
        console.log(err)
      }
    },
    async unbookmark () {
      try {
        await BookmarksService.delete({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped></style>
