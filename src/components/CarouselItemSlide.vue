<template>
     <img :src="img.thumbnailUrl" />
</template>

<script>

export default {
  name: "CarouselItemSlide",
  props: {
    img: {
      type: Object
    },
  },

  data() {
    return {

    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
