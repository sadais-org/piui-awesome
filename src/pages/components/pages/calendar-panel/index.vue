<template>
  <view class="pi-scroll-container">
    <pi-navbar title="日历面板" />
    <scroll-view class="pi-scroll" scroll-y="">
      <pi-calendar-panel
        :type="type"
        :default-value="defaultValue"
        :min-date="minDate"
        :max-date="maxDate"
        :start-text="startText"
        :end-text="endText"
        :today-active-border-color="todayActiveBorderColor"
        :active-color="activeColor"
        :active-bg="activeBg"
        :range-color="rangeColor"
        :range-bg="rangeBg"
        :date-format="dateFormat"
      />
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Canlendar',
  data() {
    return {
      showCalendar: false,
      type: 'date',
      defaultValue: '2020-08-18',
      minDate: '',
      maxDate: '',
      startText: '开始',
      endText: '结束',
      todayActiveBorderColor: '#ff6a00',
      activeColor: 'white',
      activeBg: '#ff6a00',
      rangeColor: '#ff6a00',
      rangeBg: 'rgba(254, 106, 0, 0.1)',
      dateFormat: 'YYYY-MM-DD'
    }
  },
  methods: {}
}
</script>
