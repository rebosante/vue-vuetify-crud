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
      <v-flex xs12 text-xs-center>
        <v-btn :to="{
          name: 'song-edit',
          params: {
            songId: song.id
          }
        }">Edit song</v-btn>
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>

export default {
  name: 'SongMetadata',
  props: {
    song: {
      type: Object,
      default: () => ({})
    }

  }
}
</script>

<style scoped></style>
