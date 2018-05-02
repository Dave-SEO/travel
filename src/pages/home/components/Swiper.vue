<template>
<div class="swiper">
<swiper :options="swiperOption" v-if="showSwiper">
    <swiper-slide v-for="item in swiperAttr" :key='item.id' >
        <img :src="item.imgUrl" alt="">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
</swiper>
</div>
</template>

<script>
export default {
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.swiperAttr.length
    }
  },
  props: {
    swiperAttr: Array
  },
  mounted () {
    console.log('//////', this.swiperAttr)
  }
}
</script>
<style lang='less' scoped>
 .swiper /deep/ .swiper-pagination-bullet-active {
    background: #fff !important
 }
.swiper{
    overflow: hidden;
    height: 0;
    width: 100%;
    padding-bottom: 31.25%;
    background: #eee;
    img{
        width: 100%;
    }
}
</style>
