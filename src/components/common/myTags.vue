<template>
<div class="tags" v-if="showTags">
  <ul>
    <li class="tags-li" v-for="(item,index) in tagsList" :class="{'active': isActive(item.path)}" :key="index">
      <router-link :to="item.path" class="tags-li-title">
        {{item.title}}
      </router-link>
      <span class="tags-li-icon" @click="closeTags(index)"><i class="el-icon-close"></i></span>
    </li>
  </ul>
  <div class="tags-close-box">
    <el-dropdown @command="handleTags">
      <el-button size="mini" type="primary">
        标签选项<i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu size="small" slot="dropdown">
        <el-dropdown-item command="other">关闭其他</el-dropdown-item>
        <el-dropdown-item command="all">关闭所有</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      tagsList: []
    }
  },
  methods: {
    isActive(path) {
      return path === this.$route.path;
    },
    // 关闭单个标签
    closeTags(index) {
      const delItem = this.tagsList.splice(index, 1)[0];
      const item = this.tagsList[index] ? this.tagsList[index] : this.tagsList[index - 1];
      this.$store.commit('monitorTagsList', this.tagsList.length);
      if (item) {
        delItem.path === this.$route.path && this.$router.push(item.path);
      } else {
        this.$router.push('/');
      }
    },
    // 关闭全部标签
    closeAll() {
      this.tagsList = [{
        title: this.$router.options.routes[0].meta.title,
        path: this.$router.options.routes[0].path
      }];
      this.$store.commit('monitorTagsList', this.tagsList.length);
      this.$router.push('/home');
    },
    // 关闭其他标签
    closeOther() {
      const obj = [{
        title: this.$router.options.routes[0].meta.title,
        path: this.$router.options.routes[0].path
      }];
      this.tagsList.filter(item => {
        if (item.path === this.$route.path && this.$route.path != '/home') {
          return obj.push(item)
        }
      })
      this.tagsList = obj
      this.$store.commit('monitorTagsList', this.tagsList.length);
    },
    // 设置标签
    setTags(route) {
      const isExist = this.tagsList.some(item => {
        return item.path === route.path;
      })
      !isExist && this.tagsList.push({
        title: route.meta.title,
        path: route.path
      })
      this.$store.commit('monitorTagsList', this.tagsList.length);
    },
    handleTags(command) {
      command === 'other' ? this.closeOther() : this.closeAll();
    }
  },
  computed: {
    showTags() {
      return this.tagsList.length > 0;
    }
  },
  watch: {
    $route(newValue, oldValue) {
      this.setTags(newValue);
    }
  },
  created() {
    this.tagsList.push({
      title: this.$router.options.routes[0].meta.title,
      path: this.$router.options.routes[0].path
    })
    this.setTags(this.$route);
  }
}
</script>


<style>

</style>
