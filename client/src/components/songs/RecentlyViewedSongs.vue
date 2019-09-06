<template>
  <panel title="Recently Viewed">
    <v-data-table
      :headers="headers"
      :pagination.sync="pagination"
      :items="histories"
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
import SongHistoryService from '@/services/SongHistoryService'
export default {
  name: 'RecentlyViewedSongs',
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
    histories: []
  }),
  async mounted () {
    if (this.isUserLoggedIn) {
      this.histories = (await SongHistoryService.index()).data
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
