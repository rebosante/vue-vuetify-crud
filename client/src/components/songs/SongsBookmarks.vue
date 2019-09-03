<template>
  <panel title="Bookmarks">
    <v-data-table
    :headers="headers"
    :items="bookmarks"
    class="elevation-1"
    >
    <template v-slot:items="props">
      <td class="text-xs-left">{{ props.item.title }}</td>
      <td class="text-xs-left">{{ props.item.artist }}</td>
    </template>
    </v-data-table>
  </panel>
</template>

<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'
export default {
  name: 'SongsBookmarks',
  data: () => ({
    headers: [
      {
        text: 'Title',
        value: 'title'
      },
      {
        text: 'Artist',
        value: 'artist'
      }
    ],
    pagination: {
      // sortBy: date,
      descending: true
    },
    bookmarks: []
  }),
  async mounted () {
    if (this.isUserLoggedIn) {
      this.bookmarks = (await BookmarksService.index({
        userId: this.user.id
      })).data
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  }
}
</script>

<style scoped>

</style>
