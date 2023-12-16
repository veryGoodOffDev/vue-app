<template>
    <div >
        <h1>
            User: {{$route.params.userName}}
            
        </h1>
        <AlbumList v-bind:albums="getAlbums"/>
        <PostList v-bind:posts="getPosts" @delete-post="deletePostById"/>
    </div>

</template>

<script>
import PostList from '../components/PostList.vue';
import AlbumList from '../components/AlbumList.vue';
import {mapGetters, mapActions, mapMutations} from 'vuex'

export default {
    name: 'UserView',
    components: {
        PostList,
        AlbumList,
    },

    data() {
        return {
            id:this.$route.params.id
        };
    },
     methods: {
    ...mapActions(["fetchPosts", "fetchAlbums"]),
    ...mapMutations(["deletePost"]),
   
    deletePostById(id) {
        this.deletePost(id)
    }
    
    },
    computed: {
        ...mapGetters(["getPosts", "getAlbums", "getFilteredPosts"]),

        },

    mounted() {
        this.fetchPosts(this.id)
        this.fetchAlbums(this.id)
    },


  
};
</script>

<style lang="scss" scoped>

</style>