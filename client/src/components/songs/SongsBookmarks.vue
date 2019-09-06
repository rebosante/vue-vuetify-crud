<template>
  <panel title="Bookmarks">
    <v-data-table
    :headers="headers"
    :pagination.sync="pagination"
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
      sortBy: 'createdAt',
      descending: true
    },
    bookmarks: []
  }),
  async mounted () {
    if (this.isUserLoggedIn) {
      this.bookmarks = (await BookmarksService.index()).data
    }
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
