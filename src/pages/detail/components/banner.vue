<template>
  <div class="container">
    <div class="imgBox" @click="handleImg">
      <img src="http://img1.qunarzz.com/sight/p0/1803/eb/ebb14c9953872287a3.img.jpg_r_800x800_7d449e59.jpg" alt="">
    </div>
    <Gallary v-show="imgShow" @closeImg='closeImg'></Gallary>
  </div>
</template>
<script>
import Gallary from '@/common/Gallary'
export default {
  data () {
    return {
      imgShow: false
    }
  },
  methods: {
    handleImg () {
      this.imgShow = true
    },
    closeImg () {
      this.imgShow = false
    }
  },
  components: {
    Gallary
  }
}
</script>
<style lang='less' scoped>
  .container{
    .imgBox{
      width: 100%;
      height: 0;
      overflow: hidden;
      padding-bottom:55%;
      img{
        width: 100%;
      }
    }
  }
</style>
