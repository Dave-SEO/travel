<template>
    <div class="box">
        <h3 class="title">猜你喜欢</h3>
        <ul>
            <router-link tag="li" :to="'/detail/'+item.id"  class="listBox border-bottom"  v-for="item in recommendList" :key='item.id'>
                <img class="img" :src="item.imgUrl" alt="">
                <div class="info">
                    <p class="info-title">{{item.title}}</p>
                    <p class="info-desc">{{item.desc}}</p>
                    <button>查看详情</button>
                </div>
            </router-link>
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
    recommendList: Array
  }
}
</script>
<style lang='less' scoped>
    .title{
        line-height: 0.8rem;
        padding-left:0.2rem;
    }
    .listBox{
        display: flex;
         overflow: hidden;
         height: 1.9rem;
        .img{
            width: 1.7rem;
            height: 1.7rem;
            padding: 0.1rem;
        }
        .info{
            flex: 1;
            min-width: 0;
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
