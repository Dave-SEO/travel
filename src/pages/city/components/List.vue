<template>
<div class="wrap" ref="list">
     <div>
      <div class="area">
        <div class="title">当前城市</div>
        <div class="buttonlist" >
            <div class="button-wrapper" >
                <div class="button">北京</div>
            </div>
        </div>
      </div>

      <div class="area">
        <div class="title">热门城市</div>
         <div class="buttonlist" >
            <div class="button-wrapper" v-for="item in hotCities" :key='item.id'>
                <div class="button">{{item.name}}</div>
            </div>
        </div>
      </div>
      <div class="area" v-for="(key,value) in cities" :key='value' :ref="value">
          <div class="title">{{value}}</div>
          <ul v-for="item in key" :key='item.id'>
              <li class="itemList border-bottom">{{item.name}}</li>
          </ul>
      </div>
  </div>
</div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.list)
    })
  },
  watch: {
    letter () {
      const element = this.$refs[this.letter][0]
      this.scroll.scrollToElement(element)
    }
  }
}
</script>
<style lang='less'>
.wrap{
    color: #333;
    overflow: hidden;
    position: absolute;
    top:1.5rem;
    left: 0;
    right: 0;
    bottom: 0;
    .title{
        line-height: 0.6rem;
        background: #f2f2f2;
        padding-left:0.2rem;
    }
    .buttonlist{
        overflow: hidden;
          padding-right: 8%;
        .button-wrapper{
             float: left;
             width: 33.33%;
            .button{
                margin: .1rem;
                padding: .1rem 0;
                text-align: center;
                border: .02rem solid #ccc;
                border-radius: .06rem;
            }
        }
    }
    .itemList{
            line-height: 0.6rem;
            padding:0.1rem;
    }
}
</style>
