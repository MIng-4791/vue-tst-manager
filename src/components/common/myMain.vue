<template lang="html">
  <div class="main">
    <div class="kj-wrap">
      <div class="zxtjzt">
        <el-table :data="tableData" border style="width: 100%;height:100%;ext-algin:center">
          <el-table-column v-for="(item, index) in tjztTitle" :key="index" :prop="item.prop" :label="item.label" :width="item.width"></el-table-column>
        </el-table>
      </div>
      <div class="zxkj">
        <el-table :data="tableData" border style="width: 100%;height:100%;ext-algin:center">
          <el-table-column v-for="(item, index) in zxkjTitle" :key="index" :prop="item.prop" :label="item.label" :width="item.width"></el-table-column>
        </el-table>
      </div>
    </div>
    <div class="charts-wrap">
      <div class="bykjsyl">

      </div>
      <div class="aqdzc">

      </div>
      <div class="yhzc">

      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      tableData: [

      ],
      tjztTitle: [
        {
          prop: 'xh',
          label: '序号',
          width: '70'
        },
        {
          prop: 'ztmc',
          label: '主题名称',
          width: '*'
        },
        {
          prop: 'tjsj',
          label: '推荐时间',
          width: '120'
        },
      ],
      zxkjTitle: [
        {
          prop: 'xh',
          label: '序号',
          width: '70'
        },
        {
          prop: 'kjmc',
          label: '课件名称',
          width: '*'
        },
        {
          prop: 'kjlx',
          label: '课件类型',
          width: '80'
        },
        {
          prop: 'ssml',
          label: '所属目录',
          width: '150'
        },
        {
          prop: 'scsj',
          label: '上传时间',
          width: '120'
        }
      ]
    }
  },
  mounted() {

  },
  components: {

  },
  computed: {
    ...mapState([

    ])
  }
}
</script>

<style lang="css">
</style>
