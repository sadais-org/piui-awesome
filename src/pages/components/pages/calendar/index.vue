<template>
  <view class="pi-scroll-container">
    <pi-navbar title="搜索框" />
    <scroll-view class="pi-scroll" scroll-y="">
      <view class="pi-content">
        <pi-button type="primary" @tap="handleShowCanlendar()">单个日期选择</pi-button>
        <pi-button type="primary" custom-class="pi-mg-top-12" @tap="handleShowCanlendar(true)">
          范围日期选择
        </pi-button>
      </view>
    </scroll-view>
    <pi-calendar
      v-model="showCalendar"
      :type="type"
      :default-value="defaultValue"
      :min-date="minDate"
      :max-date="maxDate"
      :popup="{
        closeIconColor: '#ff508a',
        mask: {
          duration: 700
        }
      }"
    />
  </view>
</template>

<script>
export default {
  name: 'Canlendar',
  data() {
    return {
      showCalendar: false,
      type: 'range',
      defaultValue: ['2020-08-18', '2020-08-25'],
      minDate: '2020-08-17',
      maxDate: '2020-08-27'
    }
  },
  methods: {
    handleShowCanlendar(isRange) {
      this.showCalendar = true
      if (isRange) {
        this.type = 'range'
        this.defaultValue = ['2020-08-18', '2020-08-23']
      } else {
        this.type = 'date'
        this.defaultValue = '2020-08-01'
      }
    }
  }
}
</script>
