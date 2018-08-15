<template lang="html">
  <div class="header">
    <!-- 导航菜单折叠按钮 -->
    <div class="collapse-btn" @click="collapseChange"><i class="el-icon-menu"></i></div>
    <div class="logo">班组安全岛后台管理系统</div>

  </div>
</template>

<script>
// import
import {mapState} from 'vuex'
export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapState([
      'sidebar_collapse'
    ])
  },
  components: {

  },
  methods: {
    collapseChange() {
      this.$store.commit('changeCollapse', !this.sidebar_collapse)
    }
  }
}
</script>

<style lang="css">
</style>
