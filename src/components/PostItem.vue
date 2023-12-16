<template>
    <li class="post">
        <h3 class="post-title">{{post.title}}</h3>
        <p class="post-text">{{post.body}}</p>
        <div class="post__buttons">
            <button @click="$emit('delete-post', post.id)" class="btn btn-danger">Удалить</button>
        </div>
        
    </li>
</template>

<script>
export default {
    name: 'PostItem',
    props:{
        post:{
            type:Object||Array,
            required:true,
        }
    },

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        deletePost() {

        }
    },
};
</script>

<style lang="scss" scoped>
@import "./postlist.scss";
</style>