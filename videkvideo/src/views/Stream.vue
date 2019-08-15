<template>
    <div id="VidContainer">
        <video controls :src="this.$data.IndexUrl + this.$data.videoAttr.streamURL" type="video/*">
        </video>
            <h2>{{ videoAttr.title }}</h2>
            <p>{{ videoAttr.descirption }}</p>
    </div>
</template>

<script>
import StreamingService from '../components/StreamingService.vue';
import axios from 'axios';
export default {
    name: 'Stream',
    components:{
        StreamingService
    },
    data(){
        return {
            videoPath: this.$route.params,
            videoAttr: [],
            IndexUrl: 'https://localhost:44301'
        }
    },
        
    created() {
        console.log("töltés");
        axios.get(this.$data.videoPath.videoPath)
        .then(res => this.videoAttr = res.data)
        .catch(err => console.log(err));
        }
}

</script>
<style scoped>
    video {
        height: 480 px;
        width: 640px;
        padding: 40px 0 10px 0;
    }
    #VidContainer {
        text-align: center;
        text-align: left;
        margin-left: 30%;
    }
    
    h2, p {
        color: white;
    }

    p {
        font-style: italic;
        padding: 0 0 0 40px
    }


</style>