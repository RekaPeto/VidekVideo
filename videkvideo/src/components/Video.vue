<template>
    <div>
        <a v-bind:href="video.url"><img v-bind:src="video.thumbnailUrl" class="img-thumbnail" ></a>
        <a v-bind:href="video.StreamURL">{{video.title}}</a>
    </div>
</template>

<script>
export default {
  name: "video",
  props: ["video"]
}
</script>

<style scoped>
    .todo-item {
        background: #f4f4f4;
        padding: 10px;
        border-bottom: 1px #ccc dotted;
    }

    .is-complete {
        text-decoration: line-through;
    }

    .del {
        background: #ff0000;
        color: #fff;
        border: none;
        padding: 5px 9px;
        border-radius: 50%;
        cursor: pointer;
        float: right;
    }
    img { 
  display: inline-block;
    }
</style>