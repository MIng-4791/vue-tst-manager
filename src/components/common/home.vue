<template lang="html">
  <div class="wrapper">
    <my-header></my-header>
    <my-sidebar></my-sidebar>
    <div class="content-wrap" :class="{'content-collapse': sidebar_collapse}">
      <my-tags></my-tags>
      <div class="content">
        <transition name="move" mode="out-in">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import myHeader from 'common/myHeader'
import mySidebar from 'common/mySidebar'
import myTags from 'common/myTags'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      list: null
    }
  },
  components: {
    myHeader,
    mySidebar,
    myTags
  },
  computed: {
    ...mapState([
      'sidebar_collapse', 'MSG_CODE_OK'
    ])
  },
  mounted() {
    
  }
}
</script>

<style lang="css">
</style>
