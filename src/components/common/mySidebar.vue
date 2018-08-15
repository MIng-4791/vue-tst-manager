<template lang="html">
  <div class="sidebar">
    <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="sidebar_collapse" unique-opened router>
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
            </template>
            <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index" :disabled="my_route">
              {{ subItem.title }}
            </el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index" :disabled="my_route">
            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      collapse: true,
      icons: [
        'el-icon-setting',
        'el-icon-tickets',
        'el-icon-message',
        'el-icon-date',
        'el-icon-star-on',
        'el-icon-question',
        'el-icon-warning'
      ],
      items: []
    }
  },
  created() {

  },
  mounted() {
    this.$router.options.routes[0].children.forEach((key, index) => {
      let obj;
      if (key.children) {
        obj = {
          icon: this.icons[index],
          index: key.path,
          title: key.meta.title,
          subs: []
        }
        key.children.forEach((item, ind) => {
          obj.subs.push({
            index: item.path,
            title: item.meta.title
          })
        })
      } else {
        obj = {
          icon: this.icons[index],
          index: key.path,
          title: key.meta.title
        }
      }
      this.items.push(obj)
    })
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace('/', '')
    },
    my_route() {
      if (this.tagsListLen >= 15) {
        return true
      } else {
        this.$message = '您打开的标签过多，请关闭一些！'
        return false
      }
    },
    ...mapState([
      'sidebar_collapse', 'tagsListLen'
    ])
  },
  methods: {
  }
}
</script>

<style lang="css">
</style>
