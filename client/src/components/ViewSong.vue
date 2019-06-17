<template>
  <v-layout v-if="song">
    <v-flex>
      <panel title="Song Metadata">
        <v-layout>
          <v-flex xs8>
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
      </panel>
    </v-flex>
    <v-flex xs8>
      <panel title="Album Details" class="ml-4">
        <v-layout row wrap>
          <v-flex d-flex xs12 child-flex pa-1>
            <v-card color="orange lighten-2" tile flat>
              <v-card-text>{{ song.tab }}</v-card-text>
            </v-card>
          </v-flex>
          <v-flex d-flex xs12 pa-1>
            <v-card color="red lighten-2" dark tile flat>
              <v-card-text>{{ song.lyrics }}</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </panel>
      <panel title="Youtube" class="ml-4 mt-4">
        <v-layout row wrap>
          <v-flex d-flex xs12 child-flex pa-1>
            <v-card color="orange lighten-2" tile flat>
              <v-card-text>
                <!--EMBED YOUTUBE-->
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex d-flex xs12 pa-1>
            <v-card color="red lighten-2" dark tile flat>
              <v-card-text>{{ song.lyrics }}</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongService'
export default {
  name: 'ViewSong',
  components: {
    Panel
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
