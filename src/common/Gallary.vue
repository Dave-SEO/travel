<template>
  <div class="container" @click="closeImg">
      <div class="swiper-img-big">
        <swiper :options="swiperOption" >
            <swiper-slide  >
                <img src="http://img1.qunarzz.com/sight/p0/1804/bb/bb7b3e1400d35c66a3.img.jpg_r_800x800_a363debd.jpg" alt="">
            </swiper-slide>
             <swiper-slide  >
                <img src="http://img1.qunarzz.com/sight/p0/1803/76/76cc726485aa9f7ea3.img.jpg_r_800x800_e993faae.jpg" alt="">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    closeImg () {
      this.$emit('closeImg', false)
    }
  }
}
</script>
<style lang='less' scoped>
.swiper-pagination{color: #fff;font-size: 0.4rem;margin-bottom: -1rem;}
 .container /deep/ .swiper-container {overflow: inherit}
    .container{
        position: fixed;
        top:0;
        left:0;
        bottom: 0;
        right: 0;
        background:#000;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .swiper-img-big{
            height: 0;
            width: 100%;
            padding-bottom: 67%;
            img{
                width: 100%;
            }
        }
    }
</style>
