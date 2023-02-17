<template lang="">
  <div>
    <TypeNav/>
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor"/>
  </div>
</template>
<script>
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import { mapState } from 'vuex'
export default {
  name: '',
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor
  },
  mounted() {
    this.$store.dispatch("getFloorList");
    this.$store.dispatch('getUserInfo');
  },
  computed: {
      ...mapState({
        floorList:state => state.floorList
      })
  },
}
</script>
<style lang="">
  
</style>