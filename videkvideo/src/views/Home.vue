<template>
    <div id="app">
        <div id="container">
        <VideoGrid v-bind:videos="videos" />
        </div>
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

    #container {
        border: 20px;
        padding: 20px;
        margin-left: 10%;
        margin-right: 10%;
        background-color:rgba(105,105,105,0.5);
    }
    

    body {
        font-family: Arial, Helvetica, sans-serif;
        line-height: 1.4;
    }

    

        .btn:hover {
            background: #666;
        }
    
    div {
        padding: 0 20px;
    }
</style>