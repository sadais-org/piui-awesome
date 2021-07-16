<template>
  <view class="pi-scroll-container">
    <pi-navbar title="日历面板" />
    <scroll-view class="pi-scroll" scroll-y="">
      <!-- 基础用法 -->
      <pi-card padding="0">
        <pi-section slot="title" padding="24" title="基础用法" />
        <template slot="body">
          <pi-calendar-panel v-model="base.value" />
        </template>
      </pi-card>
      <!-- 双向绑定 -->
      <pi-card padding="0">
        <pi-section slot="title" padding="24" title="双向绑定" />
        <template slot="body">
          <pi-calendar-panel v-model="sync.value" />
        </template>
        <view slot="footer" class=" pi-align-center">
          <pi-input v-model="sync.value" class="pi-flex-sub" />
          <pi-button type="primary" size="small">同步时间</pi-button>
        </view>
      </pi-card>
      <!-- 范围选择 -->
      <pi-card padding="0">
        <pi-section slot="title" padding="24" title="范围选择" />
        <template slot="body">
          <pi-calendar-panel v-model="range.value" type="range" />
        </template>
      </pi-card>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Canlendar',
  data() {
    return {
      base: {
        value: '2019-08-11'
      },
      sync: {
        value: '2019-08-11'
      },
      range: {
        value: ['2019-08-11', '2019-08-28']
      }
    }
  },
  methods: {}
}
</script>
