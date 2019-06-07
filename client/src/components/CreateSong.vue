<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Metadata">
        <v-text-field
          label="Title"
          v-model="title"
        />
        <v-text-field
          label="Aitle"
          v-model="artist"
        />
        <v-text-field
          label="Genre"
          v-model="genre"
        />
        <v-text-field
          label="Album"
          v-model="album"
        />
        <v-text-field
          label="Image"
          v-model="albumImageUrl"
        />
        <v-text-field
          label="Youtube"
          v-model="youtubeId"
        />
      </panel>
    </v-flex>
    <v-flex xs8>
      <v-text-field
        label="Lyrics"
        v-model="lyrics"
        multi-line
      />
      <v-text-field
        label="Tab"
        v-model="tab"
        multi-line
      />
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  name: 'CreateSong',
  data: () => ({
    title: null,
    artist: null,
    genre: null,
    album: null,
    albumImageUrl: null,
    youtubeId: null,
    lyrics: null,
    tab: null
  }),
  components: {
    Panel
  }
}
</script>

<style scoped>

</style>
