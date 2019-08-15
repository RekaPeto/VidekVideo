<template>
    <div >
        <router-link :to="'/Stream'" v-bind:VideoPath="IndexUrl + video.videoURL"><img v-bind:src="IndexUrl + video.thumbnailURL" class="img-thumbnail" width="210" height="120" ></router-link>
        <router-link :to="'/Stream'" v-bind:VideoPath="IndexUrl + video.videoURL" id="Title">{{video.title}}</router-link>
    </div>
</template>

<script>
export default {
  name: "video",
  props: ["video"],
  data: function() {
       return {
          IndexUrl: 'https://localhost:44301'
        }
    },
    methods: {
  }
}
</script>

<style scoped>
    .todo-item {
        background: #f4f4f4;
        padding: 10px;
        border-bottom: 1px #ccc dotted;
    }

    img { 
        display: block
    }

    #title {
        display: block
    }
    
</style>