<template>
<div>
 <div class="header" v-show="!showHerder" :style="opcitys">
    <router-link tag="div" to="/" class="header-left">
       <span class="iconfont back-icon">&#xe624;</span>
     </router-link>
     古北水镇
  </div>
  <router-link tag="div" to="/" class="pieBack" v-show="showHerder">
    <div class="iconfont header-fixed-back">&#xe624;</div>
  </router-link>
</div>
</template>
<script>
export default {
  data () {
    return {
      scrollTop: 0,
      showHerder: true,
      opcitys: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      let top = document.documentElement.scrollTop || document.body.scrollTop
      console.log(top)
      if (top > 45) {
        console.log('zou45')
        this.showHerder = false
        let opacity = top / 80
        opacity = opacity > 1 ? 1 : opacity
        this.opcitys = { opacity }
      } else {
        this.showHerder = true
      }
      console.log(this.showHerder)
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang = 'less' rel="stylesheet/less" scoped>
  @import "~styles/varibles";
.header {
  background: @bgColor;
  position: fixed;
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 0.35rem;
  line-height: @headerHeight;
  .header-left {
    .back-icon {
    position: absolute;
    width: 0.64rem;
    left:0;
    top:0;
    width:0.54rem;
      color: #fff;
      font-weight: bold;
    }
  }
  }
  .pieBack{
    position: absolute;
    top:0.3rem;
    left:0.25rem;
    width:0.6rem;
    height: 0.6rem;
    line-height: 0.6rem;
    text-align: center;
    border-radius: 50%;
    background: rgba(0, 0, 0, .6);
    .header-fixed-back{
      font-size: 0.3rem;
      color:#fff;
    }
  }
</style>
