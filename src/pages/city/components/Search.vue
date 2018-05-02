<template>
  <div class="container">
      <div class="title">
          城市选择
          <router-link to="/">
            <span class="iconfont back-icon">&#xe624;</span>
          </router-link>
          <div class="search">
              <input type="text" v-model="keyword" placeholder="请输出城市名或拼音">
          </div>
      </div>
      <div class="content" ref="list" v-show="keyword">
        <ul >
         <li v-for="item in letter" :key="item.id" class="itemList border-bottom">{{item.name}}</li>
         <li class="itemList border-bottom" v-show="hasNoData">没有找到匹配数据</li>
        </ul>
      </div>
 </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  data () {
    return {
      keyword: '',
      letter: []
    }
  },
  props: {
    cities: Object
  },
  computed: {
    hasNoData () {
      return !this.letter.length
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.list)
  },
  watch: {
    keyword () {
      const letters = []
      if (!this.keyword) {
        this.letter = []
        return
      }
      for (let i in this.cities) {
        this.cities[i].forEach((item, index) => {
          if (item.spell.indexOf(this.keyword) > -1 || item.name.indexOf(this.keyword) > -1) {
            letters.push(item)
          }
        })
      }
      this.letter = letters
    }
  }
}
</script>
<style lang='less' scoped>
@import '~styles/varibles';
    .container{
        .title{
            text-align: center;
            line-height: 0.7rem;
            background: @bgColor;
            color: #fff;
            position: relative;
            .back-icon{
                width: 0.5rem;
                position: absolute;
                left:0;
                top:0;
                text-align: center;
                color: #fff;
            }
            .search{
                text-align: left;
                padding-left:0.1rem;
                padding-right:0.1rem;
                padding-bottom:0.1rem;
                input{
                    width: 100%;
                    border-radius: 0.06rem;
                    height: 0.55rem;
                    line-height: 0.55rem;
                    color: #333;
                    text-align: center;
                }
            }
        }
        .content{
            overflow: hidden;
            position: absolute;
            left: 0;
            top:1.5rem;
            bottom: 0;
            background:#fff;
            width: 100%;
            z-index: 1;
            .itemList{
                line-height: 0.55rem;
                padding-left: 0.1rem;
            }
        }
    }
</style>
