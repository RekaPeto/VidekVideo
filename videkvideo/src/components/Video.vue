<template>
    <div>
        <img v-bind:src="video.url"  height="42" width="42">
        <img v-bind:src="video.thumbnailUrl" >
        <h3>{{video.title}}</h3> 
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