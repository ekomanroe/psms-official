<template>
  <app-carousel class="carousel-img" :per-page="1" :mouse-drag=true :autoplay=true>
    <app-slide class="slide">
      <img class="slide-img" src="../assets/ucl_1.jpg">
    </app-slide>
    <app-slide class="slide">
      <img class="slide-img" src="../assets/ucl_2.jpg">
    </app-slide>
    <app-slide class="slide">
      <img class="slide-img" src="../assets/ucl_3.jpg">
    </app-slide>
    <app-slide class="slide">
      <img class="slide-img" src="../assets/ucl_4.jpg">
    </app-slide>
  </app-carousel>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel'

  export default {
    name: 'Carousel',
    data () {
      return {
        msg: 'return carousel'
      }
    },
    components: {
      'app-carousel': Carousel,
      'app-slide': Slide
    }
  }
</script>

<style scoped>
  .slide {
    text-align: center;
  }

  .slide-img {
    width: 100%;
    height: 400px;
  }
</style>
