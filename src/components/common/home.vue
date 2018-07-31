<template lang="html">
  <div class="wrapper">
    <my-header></my-header>
    <my-sidebar></my-sidebar>
  </div>
</template>

<script>
import myHeader from 'common/myHeader'
import mySidebar from 'common/mySidebar'
export default {
  data () {
    return {

    }
  },
  components: {
    myHeader,
    mySidebar
  }
}
</script>

<style lang="css">
</style>
