import axios from 'axios'
export default {
    state:{
        posts:[],
        albums:[],
        isLoading:true,
    },
    mutations:{
        setPosts(state, payload) {
          state.posts = payload
        },
        setAlbums(state, payload) {
            state.albums = payload
        },
        setIsLoading(state, bool) {
            state.isLoading = bool
        },
        deletePost(state, id) {
         state.posts = state.posts.filter(p => p.id !== id)
        }
    },
    getters:{
        getPosts(state) {
            return state.posts
        }, 
        getAlbums(state) {
            return state.albums
        },
        getFilterdPosts(state, id) {
            return state.posts = state.posts.filter(p => p.id !== id)
        },
    },
    actions:{
       async fetchPosts(context, id) {
         await axios.get('https://jsonplaceholder.typicode.com/posts?userId=' + id)
            .then((response) => {
                context.commit("setPosts", response.data)
            })
        },
       async fetchAlbums(context, id) {
         await axios.get('https://jsonplaceholder.typicode.com/albums?userId=' + id)
            .then((response) => {
                context.commit("setAlbums", response.data)
            })
        },
    },
}