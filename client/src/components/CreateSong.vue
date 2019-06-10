<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Metadata">
        <v-text-field
          label="Title"
          v-model="song.title"
        />
        <v-text-field
          label="Aitle"
          v-model="song.artist"
        />
        <v-text-field
          label="Genre"
          v-model="song.genre"
        />
        <v-text-field
          label="Album"
          v-model="song.album"
        />
        <v-text-field
          label="Image"
          v-model="song.albumImageUrl"
        />
        <v-text-field
          label="Youtube"
          v-model="song.youtubeId"
        />
      </panel>
    </v-flex>
    <v-flex xs8>
      <panel title="Song Structure" class="ml-4">
        <v-textarea
          label="Lyrics"
          v-model="song.lyrics"
        />
        <v-textarea
          label="Tab"
          v-model="song.tab"
        />
      </panel>
      <v-btn
        dark
        class="cyan"
        @click="create"
      >
        Create Song
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongService'
export default {
  name: 'CreateSong',
  data: () => ({
    song: {
      title: null,
      artist: null,
      genre: null,
      album: null,
      albumImageUrl: null,
      youtubeId: null,
      lyrics: null,
      tab: null
    }
  }),
  components: {
    Panel
  },
  methods: {
    async create () {
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log('From CreateSong', err)
      }
    }
  }
}
</script>

<style scoped>

</style>
