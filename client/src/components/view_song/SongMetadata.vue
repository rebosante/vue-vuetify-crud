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
        <v-btn v-if="isUserLoggedIn && !bookmark" @click="setAsBookmark">Set as bookmark</v-btn>
        <v-btn v-if="isUserLoggedIn && bookmark" @click="unsetBookmark">Unset bookmark</v-btn>

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
    bookmark: null
  }),
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  watch: {
    song: {
      immediate: true,
      async handler () {
        if (!this.isUserLoggedIn) {
          return
        }
        try {
          const bookmarks = (await BookmarksService.index({
            songId: this.song.id
          })).data
          if (bookmarks.length) {
            this.bookmark = bookmarks[0]
          }
        } catch (err) {
          console.log('watcher', err)
        }
      }
    }
  },
  methods: {
    async setAsBookmark () {
      if (!this.bookmark) {
        try {
          this.bookmark = (await BookmarksService.post({
            songId: this.song.id
          }))
        } catch (err) {
          console.log(err)
        }
      }
    },
    async unsetBookmark () {
      try {
        await BookmarksService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped></style>
