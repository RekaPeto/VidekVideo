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
            videos: [],
            data: {indexUrl: 'https://localhost:44301'}
            }},
        created() {
                 axios.get('https://localhost:44301/api/Thumbnail/')
                     .then(res => this.videos = res.data)
                     .catch(err => console.log(err));
        }    
    }
</script>

<style scoped>

    * {
        box-sizing: border-box;
        margin: 20px;
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
    
    div {
        padding: 0 20px;
    }
</style>