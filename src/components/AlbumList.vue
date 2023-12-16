<template>
    <ul class="album-list">
        <AlbumItem
           v-for="album of albums" 
           :key="album.id"
           v-bind:album="album"
        />
    </ul>
</template>

<script>
import AlbumItem from './AlbumItem.vue';
export default {
    name: 'TestVueAlbumList',
    props:['albums'],
    components: {
        AlbumItem,
    },

    data() {
        return {
            photos:[],
        };
    },

    async mounted() {
        // const res = await axios.get('https://jsonplaceholder.typicode.com/albums?userId=' + this.id)
        // const posts = await res.data
        // this.posts = posts
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
@import "./albumlist.scss";
</style>