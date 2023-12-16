<template>
    <ul class="post-list">
         <!-- <Carousel /> -->
        
        <PostItem
            v-for="post of posts"
            v-bind:post="post"
            :key="post.id"
            @delete-post="deletePost"
        />
       
        
    </ul>
</template>

<script>
// import Carousel from './Carousel.vue';
import PostItem from './PostItem.vue';
import {mapGetters} from "vuex"
export default {
    name: 'PostList',
    props:['posts', 'albums'],
    components: {
        PostItem,
        // Carousel,
    },
    computed: {
        ...mapGetters(["getPosts", "getFilteredPosts"])
    },

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        deletePost(id) {
            this.$emit('delete-post', id);
        }
    },
};
</script>

<style lang="scss" scoped>
@import './postlist.scss';
</style>