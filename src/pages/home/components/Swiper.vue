<template>
<div class="swiper">
<swiper :options="swiperOption" >
    <swiper-slide v-for="item in swiperList" :key='item.id'>
        <img :src="item.img" alt="">
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
      },
      swiperList: [
        {
          id: '001',
          img: 'https://imgs.qunarzz.com/piao/fusion/1804/5c/969bfa7af00a2702.jpg_640x170_ec465291.jpg'
        },
        {
          id: '002',
          img: 'https://imgs.qunarzz.com/piao/fusion/1803/bd/04554e7c67650302.jpg_640x170_a793a191.jpg'
        },
        {
          id: '003',
          img: 'https://imgs.qunarzz.com/piao/fusion/1710/94/e41712475cc4e702.jpg_640x170_f5dd3e83.jpg'
        }
      ]
    }
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
    padding-bottom: 26.5%;
    background: #eee;
    img{
        width: 100%;
    }
}
</style>
