<template>
    <div>
        <div v-bind:key="video.videoId" v-for="video in videos">
            <Video :video="video" />
        </div>
    </div>
</template>

<script>
import Video from './Video.vue';
export default {
  name: "videoindex",
  components: {
    Video,
  },
  props: ["videos"]
}
</script>

<style scoped>
</style>
