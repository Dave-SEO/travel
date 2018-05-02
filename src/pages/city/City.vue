<template>
  <div>
      <search :cities='cities'></search>
      <List :hotCities='hotCities' :cities='cities' :letter ='letter'></List>
      <Alphabet :cities='cities' @zimuClick='zimuClick'></Alphabet>
  </div>
</template>
<script>
import search from '@/pages/city/components/Search'
import List from '@/pages/city/components/List'
import Alphabet from '@/pages/city/components/Alphabet'
import axios from 'axios'
export default {
  data () {
    return {
      hotCities: [],
      cities: {},
      letter: ''
    }
  },
  mounted () {
    this.getCityData()
  },
  methods: {
    getCityData () {
      axios.get('/api/city.json').then(this.cityData)
    },
    cityData (res) {
      this.hotCities = res.data.data.hotCities
      this.cities = res.data.data.cities
      console.log(res.data.data)
    },
    zimuClick (letter) {
      this.letter = letter
    }
  },
  components: {
    search,
    List,
    Alphabet
  }
}
</script>
<style lang='less'>

</style>
