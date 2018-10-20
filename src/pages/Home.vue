<template>
  <div>
    <div class="content-news row">
      <div class="content-carousel col-sm-9">
        <app-carousel></app-carousel>
      </div>
      <div class="content-box-news col-sm-3">
        <app-box-item></app-box-item>
      </div>
    </div>

    <!--<div class="row">-->
    <!--<div class="content-jadwal" style="border: 1px solid black">content-jadwal</div>-->
    <!--</div>-->


    <!--<div class="sponsor" style="border: 1px solid red">-->
    <!--<div class="col-sm-12 text-center">-->
    <!--<ul class="list-inline">-->
    <!--<li>1</li>-->
    <!--<li>2</li>-->
    <!--<li>3</li>-->
    <!--<li>4</li>-->
    <!--<li>4</li>-->
    <!--<li>4</li>-->
    <!--<li>4</li>-->
    <!--<li>4</li>-->
    <!--<li>4</li>-->
    <!--<li>4</li>-->
    <!--<li>4</li>-->
    <!--<li>4</li>-->
    <!--<li>4</li>-->
    <!--</ul>-->
    <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
  import Carousel from 'Components/Carousel'
  import BoxItemNews from 'Components/BoxItemNews'

  export default {
    data () {
      return {}
    },
    components: {
      'app-carousel': Carousel,
      'app-box-item': BoxItemNews
    }
  }
</script>

<style scoped>
  .content-box-news {
    padding-left: 4px;
  }
</style>
