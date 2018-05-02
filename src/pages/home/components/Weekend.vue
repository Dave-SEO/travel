<template>
    <div class="box">
        <h3 class="title">周末去哪</h3>
        <ul>
            <li  class="listBox border-bottom" v-for="item in weekendList" :key='item.id'>
                <img class="img" :src="item.imgUrl" alt="">
                <div class="info">
                    <p class="info-title">{{item.title}}</p>
                    <p class="info-desc">{{item.desc}}</p>
                    <button>查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default{
  data () {
    return {
    }
  },
  props: {
    weekendList: Array
  }
}
</script>
<style lang='less' scoped>
    .title{
        line-height: 0.8rem;
        padding-left:0.2rem;
    }
    .listBox{
         overflow: hidden;
        .img{
            width: 100%;
            padding: 0.1rem;
        }
        .info{
            min-width: 0;
            padding:0.2rem 0 0.2rem 0.1rem;
            .info-title{
                line-height: 0.54rem;
                font-size: .32rem;
                padding: .1rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            .info-desc{
                line-height: 0.4rem;
                color: #ccc;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            button{
                line-height: .44rem;
                margin-top: .16rem;
                background: #ff9300;
                padding: 0 .2rem;
                border-radius: .06rem;
                color: #fff;
            }
        }
    }
</style>
