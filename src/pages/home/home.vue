<template>
  <div class="container">
      <Headers></Headers>
      <Swipers :swiperAttr='swiperList'></Swipers>
      <Icons :iconList='iconList'></Icons>
      <Recommend :recommendList='recommendList'></Recommend>
      <Weekend :weekendList='weekendList'></Weekend>
  </div>
</template>
<script>
import Headers from '@/pages/home/components/Header'
import Swipers from '@/pages/home/components/Swiper'
import Icons from '@/pages/home/components/Icon'
import Recommend from '@/pages/home/components/Recommend'
import Weekend from '@/pages/home/components/Weekend'
import axios from 'axios'
export default {
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  mounted () {
    this.getHomeInfo()
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      this.swiperList = res.data.data.swiperList
      this.iconList = res.data.data.iconList
      this.recommendList = res.data.data.recommendList
      this.weekendList = res.data.data.weekendList
    }
  },
  components: {
    Headers,
    Swipers,
    Icons,
    Recommend,
    Weekend
  }
}
</script>
<style lang = 'less'>
.container{
  padding-bottom: 0.3rem;
}
</style>
