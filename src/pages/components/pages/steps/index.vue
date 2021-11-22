<template>
  <view class="pi-scroll-container">
    <pi-navbar title="steps 步骤条" />
    <scroll-view class="pi-scroll" scroll-y>
      <!-- 圆点 -->
      <pi-card padding="24">
        <pi-section slot="title" padding="0" title="基础用法" />
        <template slot="body">
          <pi-steps
            v-model="current"
            :current="current"
            :items="items"
            direction="row"
            mode="dot"
            size="24"
          />
        </template>
      </pi-card>

      <!-- 方向 -->
      <pi-card padding="24">
        <pi-section slot="title" padding="0" title="方向" />
        <template slot="body">
          <pi-steps v-model="current" :items="items" direction="column" mode="dot" size="24" />
        </template>
      </pi-card>

      <!-- 数字 -->
      <pi-card padding="24">
        <pi-section slot="title" padding="0" title="数字" />
        <template slot="body">
          <pi-steps v-model="current" :items="items" direction="row" mode="number" size="40" />
        </template>
      </pi-card>

      <!-- 图标 -->
      <pi-card padding="24">
        <pi-section slot="title" padding="0" title="图标" />
        <template slot="body">
          <pi-steps v-model="current" :items="items" direction="row" mode="icon" size="40" />
        </template>
      </pi-card>

      <!-- 快递信息 -->
      <pi-card padding="24">
        <pi-section slot="title" padding="0" title="快递信息" />
        <template slot="body">
          <pi-steps
            v-model="current"
            :items="express"
            direction="column"
            color="#999999"
            current-color="#999999"
            mode="dot"
            size="12"
          >
            <template slot="item" slot-scope="{ item }">
              <view class="pi-dashed-bottom-2 pi-pd-20">
                <view>{{ item.name }}</view>
                <view>{{ item.desc }}</view>
              </view>
            </template>
          </pi-steps>
        </template>
      </pi-card>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Select',
  data() {
    return {
      current: 1
    }
  },
  computed: {
    items() {
      return [
        {
          name: '编辑',
          icon: { name: 'bianji1' },
          desc: ''
        },
        {
          name: '审核中',
          icon: { name: 'timefill' },
          desc: ''
        },
        {
          name: '结果',
          icon: { name: 'roundcheckfill' },
          desc: ''
        },
        {
          name: '留言',
          icon: { name: 'liuyanfill' },
          desc: '描述文字'
        }
      ]
    },
    express() {
      return [
        {
          name: '运输中',
          time: '11-10 09:20',
          icon: { name: 'bianji1' },
          desc: '离开【珠海前山处理中心】，下一站【北京集散中心】'
        },
        {
          name: '已揽件',
          time: '11-10 08:20',
          icon: { name: 'bianji1' },
          desc: '您的包裹已出库'
        },
        {
          name: '已发货',
          time: '11-09 20:20',
          icon: { name: 'bianji1' },
          desc: '等待揽收中'
        },
        {
          name: '已出库',
          time: '11-09 15:20',
          mode: 'icon',
          icon: { name: 'bianji1' },
          desc: '您的订单开始处理'
        },
        {
          name: '已下单',
          time: '11-09 08:20',
          mode: 'icon',
          icon: { name: 'activity-fill' },
          desc: '您的包裹已出库'
        }
      ]
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped></style>
