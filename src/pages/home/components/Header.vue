<template>
  <div class="header">
     <div class="header-left">
       <span class="iconfont back-icon">&#xe624;</span>
     </div>
     <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        输入城市/景点/游玩主题
     </div>
     <div class="header-right">
       城市
        <span class="iconfont arrow-icon">&#xe64a;</span>
       </div>
  </div>
</template>

<script type="text/ecmascript-6">
</script>
<style lang = 'less' rel="stylesheet/less">
@import "~styles/varibles";

.header {
  display: flex;
  background: @bgColor;
  line-height: @headerHeight;
  .header-left {
    width: 0.64rem;
    float: left;
    .back-icon {
      margin-left: 0.15rem;
      color: #fff;
      font-weight: bold;
    }
  }
  .header-input {
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    padding-left: 0.2rem;
    background: #fff;
    border-radius: 0.1rem;
    color: #ccc;
  }
  .header-right {
    min-width: 1.04rem;
    padding: 0 0.1rem;
    text-align: center;
    color: #fff;
    width: 1.04rem;
    float: right;
    .arrow-icon {
      margin-left: -0.04rem;
      font-size: 0.24rem;
    }
  }
}
</style>
