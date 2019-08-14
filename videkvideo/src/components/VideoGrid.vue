<template>
    <Videoindex v-bind:videos="videos"/>
</template>

<script>
import Videoindex from '../components/Videoindex';
    export default {
        name: 'VideoGrid',
        components: {
            Videoindex,
        },
        props: ["videos"]
}
</script>
<style scoped>
    
</style>