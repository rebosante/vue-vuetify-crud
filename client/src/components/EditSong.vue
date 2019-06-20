<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Metadata">
        <v-text-field
          required
          :rules="[required]"
          label="Title"
          v-model="song.title"
        />
        <v-text-field
          required
          :rules="[required]"
          label="Artist"
          v-model="song.artist"
        />
        <v-text-field
          required
          :rules="[required]"
          label="Genre"
          v-model="song.genre"
        />
        <v-text-field
          required
          :rules="[required]"
          label="Album"
          v-model="song.album"
        />
        <v-text-field
          required
          :rules="[required]"
          label="Image"
          v-model="song.albumImageUrl"
        />
        <v-text-field
          required
          :rules="[required]"
          label="Youtube"
          v-model="song.youtubeId"
        />
      </panel>
    </v-flex>
    <v-flex xs8>
      <panel title="Song Structure" class="ml-4">
        <v-textarea
          required
          :rules="[required]"
          label="Lyrics"
          v-model="song.lyrics"
        />
        <v-textarea
          required
          :rules="[required]"
          label="Tab"
          v-model="song.tab"
        />
      </panel>
      <v-alert
        class="ml-4"
        v-if="error"
        :value="true"
        type="error"
      >
        {{ error }}
      </v-alert>
      <v-btn
        dark
        class="cyan"
        @click="save"
      >
        Update Song
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>

import SongsService from '@/services/SongService'
export default {
  name: 'EditSong',
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
    },
    required: (value) => !!value || 'Required.',
    error: null
  }),
  async mounted () {
    try {
      const songId = this.$store.state.route.params.songId
      this.song = (await SongsService.show(songId)).data
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    async save () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill all the required fields'
        return
      }
      try {
        await SongsService.put(this.song)
        this.$router.push({
          name: 'songs',
          params: {
            songId: this.song.id
          }
        })
      } catch (err) {
        console.log('From EditSong', err)
      }
    }
  }
}
</script>

<style scoped>

</style>
