<template>
  <div>
    <div v-bind:key="video.videoId" v-for="video in videos">
      <Video :video="video" />
    </div>
  </div>
</template>

<script>
import Video from "./Video.vue";
export default {
  name: "videoindex",
  components: {
    Video
  },
  props: ["videos"]
};
</script>

<style scoped>
div {
  display: inline-block;
  padding: 20px;
  justify-content: left;
  text-align: center;
}
</style>
