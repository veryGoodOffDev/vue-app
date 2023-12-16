import axios from 'axios'
export default {
    state:{
        photos:{},
        isLoading:true,
        filteredPhotos:[]
    },
    mutations:{
        setPhotos(state, payload) {

            if(Object.prototype.hasOwnProperty.call(state.photos, payload.id)) {
                state.photos = {...state.photos, [payload.id]: [...state.photos[payload.id],...payload.data]}
            } else {
                state.photos = {...state.photos, [payload.id]: [...payload.data]}
            }
        },
        setIsLoading(state, bool) {
            state.isLoading = bool
        },
        clearPhotos(state) {
            state.photos = {}
        },
    },
    getters:{
        getAllPhotos(state) {
            return state.photos
        }, 
        getStatus(state) {
            return state.isLoading
        },
    },
    actions:{
       async fetchPhotos(context, id) {
           axios.get('https://jsonplaceholder.typicode.com/photos?albumId=' + id + '&_limit=5')
            .then((response) => {
                context.commit("setPhotos", {data:response.data, id})
                context.commit("setIsLoading", false)
            })
        },
    },
}