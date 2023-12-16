<template>
  <div>
    <CarouselItem v-bind:photos="this.getAllPhotos" v-bind:album="album"/>
  </div>
</template>

<script>
import CarouselItem from "./CarouselItem.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CarouselVue.vue",
    data() {
    return {
      
    };
  },
  computed: mapGetters(["getAllPhotos"]),
  methods: {
    ...mapActions(["fetchPhotos"])
    
    },
  props: ["album"],
  components: {
    CarouselItem,
  },
  mounted() {
    this.fetchPhotos(this.album.id);
  },

};
</script>
