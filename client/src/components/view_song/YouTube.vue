<template>
  <panel title="Youtube" class="ml-4 mt-4">
    <v-layout row wrap>
      <v-flex d-flex xs12 child-flex pa-1>
        <v-card color="orange lighten-2" tile flat>
          <v-card-text>
            <!-- 1. The <iframe> (and video player) will replace this <div> tag. -->
            <div id="player"></div>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 pa-1>
        <v-card color="red lighten-2" dark tile flat>
          <v-card-text>
            <div class="video-wrapper">
              <div class="video-player">
                <div class="video-player-container">
                  <iframe
                    id="ytplayer" type="text/html"
                    :src="'https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0&origin=http://example.com'"
                    width="560"
                    height="315"
                    frameborder="0"
                    gesture="media"
                    allow="autoplay"
                    allowfullscreen
                  />
                </div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>

export default {
  name: 'YouTube',
  props: {
    videoId: {
      type: String,
      default: ''
    }

  }
}
</script>

<style scoped>
  .video-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .video-player {
    max-width: 880px;
    width: 100%;
  }
  .video-player-container {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 30px;
    height: 0;
    width: 100%;
    overflow: hidden;
    background: gray;
  }
  .video-player-container iframe, .video-player-container object, .video-player-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
