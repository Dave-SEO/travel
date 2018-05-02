<template>
  <div class="icon-container">
    <swiper :options="swiperOption">
        <swiper-slide  v-for="(page,index) in iconDigest" :key="index">
            <div class="icon" v-for="item in page" :key="item.id">
                <div class="icon-img-box">
                <img :src="item.imgUrl" alt="" class="icon-img">
                </div>
                <p class="icon-desc">{{item.desc}}</p>
            </div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  data () {
    return {
      swiperOption: {}
    }
  },
  props: {
    iconList: Array
  },
  computed: {
    iconDigest () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang='less' scoped>
    .swiper-container{
        height: 0;
        padding-bottom: 50%;
    }
    .icon-container{
        width: 100%;
        height: 0;
        overflow: hidden;
        padding-bottom: 50%;
        .icon{
            position: relative;
            overflow: hidden;
            text-align: center;
            height: 0;
            width: 25%;
            padding-bottom: 25%;
            float: left;
            .icon-img-box{
               position: absolute;
               left:0;
               right: 0;
               top:0;
               bottom: 0.44rem;
               padding: 0.1rem;
               box-sizing: border-box;
               .icon-img{
                   display: block;
                   height: 100%;
                   margin: 0  auto;
               }
            }
            .icon-desc{
                   position: absolute;
                   left:0;
                   right: 0;
                   bottom: 0;
                   height: 0.44rem;
                   line-height: 0.44rem;
               }
        }
    }
</style>
