<template>
  <view class="pi-scroll-container">
    <pi-navbar title="搜索框" />
    <scroll-view class="pi-scroll" scroll-y="">
      <view class="pi-content">
        <button type="primary" @tap="handleShowCanlendar()">单个日期选择</button>
        <button type="primary" @tap="handleShowCanlendar(true)">范围日期选择</button>
      </view>
    </scroll-view>
    <pi-calendar v-model="showCalendar" :type="type" :default-value="defaultValue" />
  </view>
</template>

<script>
export default {
  name: 'Canlendar',
  data() {
    return {
      showCalendar: false,
      type: 'range',
      defaultValue: ['2020-08-18', '2020-08-25']
    }
  },
  methods: {
    handleShowCanlendar(isRange) {
      this.showCalendar = true
      if (isRange) {
        this.type = 'range'
        this.defaultValue = ['2020-08-18', '2020-08-27']
      } else {
        this.type = 'date'
        this.defaultValue = '2020-08-01'
      }
    }
  }
}
</script>
