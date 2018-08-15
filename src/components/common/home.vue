<template lang="html">
  <div class="wrapper">
    <my-header></my-header>
    <my-sidebar></my-sidebar>
    <div class="content-wrap" :class="{'content-collapse': sidebar_collapse}">
      <my-tags></my-tags>
      <div class="content">
        <transition name="move" mode="out-in">
          <keep-alive>
            <my-main v-if="showHome"></my-main>
            <template v-else>
              <router-view></router-view>
            </template>
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
import myMain from 'common/myMain'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      list: null,
      showHome: true
    }
  },
  watch: {
    $route() {
      this.DetermineRoute();
    }
  },
  components: {
    myHeader,
    mySidebar,
    myTags,
    myMain
  },
  computed: {
    ...mapState([
      'sidebar_collapse', 'MSG_CODE_OK'
    ])
  },
  methods: {
    DetermineRoute() {
      if (this.$route.name == 'home') {
        this.showHome = true
      } else {
        this.showHome = false
      }
    }
  },
  mounted() {
    this.DetermineRoute();
  }
}
</script>

<style lang="css">
</style>
