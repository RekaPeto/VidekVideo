<template>
    <div>
        <div id="VidContainer">
            <div id="videvide">
            <video controls :src="IndexUrl + '/api/video/' + this.$route.query.id + '/stream'" type="video/*">
            </video>
            <h2>{{ videoAttr.title }}</h2>
            <p>{{ videoAttr.descirption }}</p>
            </div>
        </div>
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
            videoAttr: [],
            IndexUrl: 'https://localhost:44301'
        }
    },
        
    created() {
        axios.get("https://localhost:44301/api/video/" + this.$route.query.id)
        .then(res => this.videoAttr = res.data)
        .catch(err => console.log(err));
        }
}

</script>
<style scoped>
    video {
        height: 480 px;
        width: 100%;
        padding: 40px 0 10px 0;
        display: block;
        margin: 0 auto;
    }
    #VidContainer {
        text-align: center;
        text-align: left;
        border: 20px;
        padding: 20px;
        margin-left: 20%;
        margin-right: 20%;
        background-color:rgba(105,105,105,0.5);
    }

    #videvide {
        max-width: 640px;
        padding: 40px 0 10px 0;
        margin: 0 auto;
    }
    
    h2, p {
        color: white;
    }

    p {
        font-style: italic;
        padding: 0 0 0 40px
    }


</style>