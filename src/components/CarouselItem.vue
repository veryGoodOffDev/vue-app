<template>
  <carousel :autoplay="false" :nav="false" :dots="false" v-if="getAllPhotosForAlbums.length >= 5">
    <CarouselItemSlide
      v-for="img of getAllPhotosForAlbums"
      :key="img.id"
      v-bind:img="img"

    />
  </carousel>
  <h2 v-else>Загрузка фото...</h2>
</template>

<script>
import CarouselItemSlide from "./CarouselItemSlide.vue";
import carousel from "vue-owl-carousel";
import { mapGetters } from "vuex";
export default {
  name: "CarouselItem",
  props:{
    photos:{
      type:Object||Array
    }, 
    album:{
      type:Object||Array
    }
  },

  computed:{
    ...mapGetters(["getAllPhotos"]),
    getAllPhotosForAlbums() {
    return  this?.getAllPhotos?.[this.album.id] || []
  }
  },
  components: {
    CarouselItemSlide,
    carousel,
  },
};
</script>

<style lang="scss" scoped></style>
