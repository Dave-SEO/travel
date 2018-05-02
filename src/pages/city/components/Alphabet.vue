<template>
    <ul class="Alphabet">
        <li  v-for="(key, value) in cities" :key='value'
         @click="handleLetterClick"
         @touchstart = 'handleStart'
         @touchmove = 'handleMove'
         @touchend = 'handleEnd'
         :ref="value"
         >{{value}}</li>
    </ul>
</template>
<script>

export default {
  data () {
    return {
      startY: '',
      touchStatus: false
    }
  },
  props: {
    cities: Object
  },
  computed: {
    letter () {
      let letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('zimuClick', e.target.innerText)
    },
    handleStart () {
      this.startY = this.$refs['A'][0].offsetTop - 75
      this.touchStatus = true
    },
    handleMove (e) {
      if (this.touchStatus) {
        const clientY = e.touches[0].clientY - 75
        const index = Math.floor((clientY - this.startY) / 20)
        if (index >= 0 && index < this.letter.length) {
          this.$emit('zimuClick', this.letter[index])
        }
      }
    },
    handleEnd () {
      this.touchStatus = false
    }
  }
}
</script>
<style lang='less'>
    .Alphabet{
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        right: 0;
        top:0;
        bottom: 0;
        width:0.54rem;
        line-height: 0.4rem;
        text-align: center;
    }
</style>
