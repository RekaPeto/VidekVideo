<template>
    <div>
        <h1>Streaming service</h1>
        <h1>{{VideoPath}}</h1>
    </div>
</template>

<script>
import StreamingService from '../components/StreamingService.vue'
export default {
    name: 'Stream',
    props: ["VideoPath"], 
    components:{
        StreamingService
    }
}

</script>
<style scoped>

</style>