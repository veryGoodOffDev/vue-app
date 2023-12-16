<template>
    <li>
        <Carousel v-bind:album="album"/>
    </li>
</template>

<script>
import Carousel from './Carousel.vue';
export default {
    name: 'AlbumItem',
    components: {
        Carousel,
    },
    props: {
        album: {
            type: Object || Array,
        }
    },
};
</script>