<template>
    <div>
        <h1>Streaming service</h1>
        <h1>{{videoPath}}</h1>
        <h1>{{videoAttr}}</h1>
        <video width="320" height="240" controls :src="this.$data.IndexUrl + this.$data.videoAttr.streamURL" type="video/*">
        </video>
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

</style>