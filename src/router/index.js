import Vue from 'vue'
import 'babel-polyfill'
import Router from 'vue-router'
import home from '@/components/common/home'
import xtgl from '@/components/service/system/xtgl.vue'
import aqdgl from '@/components/service/system/aqdgl.vue'
import ipgl from '@/components/service/system/ipgl.vue'
import yhgl from '@/components/service/system/yhgl.vue'
import zyxlgl from '@/components/service/system/zyxlgl.vue'
import zzjggl from '@/components/service/system/zzjggl.vue'

import hdgl from '@/components/service/activities/hdgl.vue'

import yjfk from '@/components/service/feedback/yjfk.vue'

import bz from '@/components/service/help/bz.vue'

import zygl from '@/components/service/resource/zygl.vue'

import tjfx from '@/components/service/statistic/tjfx.vue'

import gxrz from '@/components/service/updatelog/gxrz.vue'

import xtgl1 from '@/components/service/system/zzjggl.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: {title: '系统首页'},
      children: [
        {
          path: '/home/system',
          name: 'xtgl',
          meta: {title: '系统管理'},
          component: xtgl,
          children: [
            {
              path: '/home/system/zzjggl',
              name: 'zzjggl',
              meta: {title: '组织机构管理'},
              component: zzjggl,
            },
            {
              path: '/home/system/yhgl',
              name: 'yhgl',
              meta: {title: '用户管理'},
              component: yhgl
            },
            {
              path: '/home/system/aqdgl',
              name: 'aqdgl',
              meta: {title: '安全岛管理'},
              component: aqdgl
            },
            {
              path: '/home/system/ipgl',
              name: 'ipgl',
              meta: {title: 'IP段管理'},
              component: ipgl
            },
            {
              path: '/home/system/zyxlgl',
              name: 'zyxlgl',
              meta: {title: '资源线路管理'},
              component: zyxlgl
            },
          ]
        },
        {
          path: '/home/activities',
          name: 'hdgl',
          meta: {title: '活动管理'},
          component: hdgl,
          children: [
            {
              path: '/home/activities/tjztgl',
              name: 'tjztgl',
              meta: {title: '推荐主题管理'},
              component: xtgl1,
            },
            {
              path: '/home/activities/bzhdgl',
              name: 'bzhdgl',
              meta: {title: '班组活动管理'},
              component: xtgl1
            },
            {
              path: '/home/activities/bzhdap',
              name: 'bzhdap',
              meta: {title: '班组活动安排'},
              component: xtgl1
            },
            {
              path: '/home/activities/bzhdxq',
              name: 'bzhdxq',
              meta: {title: '班组活动详情'},
              component: xtgl1
            }
          ]
        },
        {
          path: '/home/resource',
          name: 'zygl',
          meta: {title: '资源管理'},
          component: zygl,
          children: [
            {
              path: '/home/activities/mlgl',
              name: 'mlgl',
              meta: {title: '目录管理'},
              component: xtgl1,
            },
            {
              path: '/home/activities/kjgl',
              name: 'kjgl',
              meta: {title: '课件管理'},
              component: xtgl1
            },
            {
              path: '/home/activities/qykj',
              name: 'qykj',
              meta: {title: '企业课件'},
              component: xtgl1
            },
            {
              path: '/home/activities/shjg',
              name: 'shjg',
              meta: {title: '审核结果'},
              component: xtgl1
            },
            {
              path: '/home/activities/ggtk',
              name: 'ggtk',
              meta: {title: '公共题库'},
              component: xtgl1,
            },
            {
              path: '/home/activities/hyfl',
              name: 'hyfl',
              meta: {title: '行业分类管理'},
              component: xtgl1
            },
            {
              path: '/home/activities/sgyb',
              name: 'sgyb',
              meta: {title: '事故月报'},
              component: xtgl1
            },
            {
              path: '/home/activities/jhml',
              name: 'jhml',
              meta: {title: '交互目录管理'},
              component: xtgl1
            },
            {
              path: '/home/activities/jhkj',
              name: 'jhkj',
              meta: {title: '交互课件管理'},
              component: xtgl1
            }
          ]
        },
        {
          path: '/home/feedback',
          name: 'yjfk',
          meta: {title: '意见反馈'},
          component: yjfk,
        },
        {
          path: '/home/statistics',
          name: 'tjfx',
          meta: {title: '统计分析'},
          component: yjfk,
          children: [
            {
              path: '/home/system/aqdztjk',
              name: 'aqdztjk',
              meta: {title: '安全岛状态监控'},
              component: xtgl1,
            },
            {
              path: '/home/system/kjsyqk',
              name: 'kjsyqk',
              meta: {title: '课件使用情况分析'},
              component: xtgl1
            },
            {
              path: '/home/system/jftj',
              name: 'jftj',
              meta: {title: '积分统计'},
              component: xtgl1
            }
          ]
        },
        {
          path: '/home/help',
          name: 'help',
          meta: {title: '帮助'},
          component: bz,
        },
        {
          path: '/home/updatelog',
          name: 'gxrz',
          meta: {title: '更新日志'},
          component: gxrz,
        },
      ],
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
