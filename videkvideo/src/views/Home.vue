<template>
    <div id="app">
        <VideoGrid v-bind:videos="videos" />
    </div>
</template>

<script>
    import axios from 'axios';
    import VideoGrid from '../components/VideoGrid';
    export default {
        name: 'Home',
        components: {
            VideoGrid
        },
        data() {
            return {
            videos: []
            }},
        created() {
                 axios.get('https://localhost:44301/api/Videos')
                     .then(res => this.videos = res.data)
                     .catch(err => console.log(err));
        }    
    }
</script>

<style>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        line-height: 1.4;
    }

    .btn {
        display: inline-block;
        border: none;
        background: #555;
        color: #fff;
        padding: 7px 20px;
        cursor: pointer;
    }

        .btn:hover {
            background: #666;
        }
</style>