<template lang="html">
  <div class="sidebar">
    <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
            text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
                            {{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
  </div>
</template>

<script>
import bus from '@/components/bus'
export default {
  data() {
    return {
      collapse: false,
      items: [{
          icon: 'el-icon-setting',
          index: '0',
          title: '系统管理',
          subs: [{
              index: '',
              title: '组织机构管理'
            },
            {
              index: '',
              title: '用户管理'
            },
            {
              index: '',
              title: '安全岛管理'
            },
            {
              index: '',
              title: 'IP段管理'
            },
            {
              index: '',
              title: '资源线路管理'
            }
          ]
        },
        {
          icon: 'el-icon-tickets',
          index: '1',
          title: '活动管理',
          subs: [{
              index: '',
              title: '推荐主题管理'
            },
            {
              index: '',
              title: '班组活动管理'
            },
            {
              index: '',
              title: '班组活动安排'
            },
            {
              index: '',
              title: '班组活动详情'
            }
          ]
        },
        {
          icon: 'el-icon-message',
          index: '2',
          title: '资源管理',
          subs: [{
              index: '',
              title: '目录管理'
            },
            {
              index: '',
              title: '课件管理'
            },
            {
              index: '',
              title: '企业课件'
            },
            {
              index: '',
              title: '课件审核'
            },
            {
              index: '',
              title: '审核结果'
            },
            {
              index: '',
              title: '公共题库'
            },
            {
              index: '',
              title: '行业分类管理'
            },
            {
              index: '',
              title: '事故月报'
            },
            {
              index: '',
              title: '交互目录管理'
            },
            {
              index: '',
              title: '交互课件管理'
            }
          ]
        },
        {
          icon: 'el-icon-date',
          index: 'tabs',
          title: '意见反馈'
        },
        {
          icon: 'el-icon-star-on',
          index: '4',
          title: '统计分析',
          subs: [{
              index: 'form',
              title: '安全岛状态监控'
            },
            {
              index: 'editor',
              title: '课件使用情况分析'
            },
            {
              index: 'markdown',
              title: '积分统计'
            }
          ]
        },
        {
          icon: 'el-icon-question',
          index: 'upload',
          title: '帮助'
        },
        {
          icon: 'el-icon-warning',
          index: 'permission',
          title: '更新日志'
        },
      ]
    }
  },
  created() {
    bus.$on('collapse', msg => {
      this.collapse = msg
    })
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace('/', '')
    }
  }
}
</script>

<style lang="css">
</style>
