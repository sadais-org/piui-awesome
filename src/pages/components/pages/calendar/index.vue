<template>
  <view class="pi-scroll-container">
    <pi-navbar title="搜索框" />
    <scroll-view class="pi-scroll" scroll-y="">
      <view class="pi-content">
        <pi-list title="基础用法">
          <pi-list-item title="选则单个日期" type="primary" @tap="handleShowCanlendar('single')" />
          <pi-list-item title="选择范围日期" type="primary" @tap="handleShowCanlendar('range')" />
        </pi-list>
        <pi-list title="自定义日历">
          <pi-list-item
            title="自定义可选日期范围"
            type="primary"
            @tap="handleShowCanlendar('dateRange')"
          />
          <pi-list-item
            title="自定义起始结束文字"
            type="primary"
            @tap="handleShowCanlendar('text')"
          />
          <pi-list-item title="自定义样式" type="primary" @tap="handleShowCanlendar('color')" />
        </pi-list>
      </view>
    </scroll-view>
    <pi-calendar
      v-model="showCalendar"
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
      type: 'date',
      defaultValue: ['2020-08-18', '2020-08-25'],
      minDate: '',
      maxDate: '',
      startText: '开始',
      endText: '结束',
      todayActiveBorderColor: '#ff6a00',
      activeColor: 'white',
      activeBg: '#ff6a00',
      rangeColor: '#ff6a00',
      rangeBg: 'rgba(254, 106, 0, 0.1)',
      dateFormat: 'yyyy:mm:dd'
    }
  },
  computed: {},
  watch: {
    showCalendar: {
      deep: true,
      handler(value) {
        if (!value) {
          this.type = 'date'
          this.defaultValue = ['2020-08-18', '2020-08-25']
          this.minDate = ''
          this.maxDate = ''
          this.startText = '开始'
          this.endText = '结束'
          this.todayActiveBorderColor = '#ff6a00'
          this.activeColor = 'white'
          this.activeBg = '#ff6a00'
          this.rangeColor = '#ff6a00'
          this.rangeBg = 'rgba(254, 106, 0, 0.1)'
          this.dateFormat = 'yyyy:mm:dd'
        }
      }
    }
  },
  methods: {
    handleShowCanlendar(key) {
      const fn = {
        single: () => {
          this.type = 'date'
          this.defaultValue = '2020-08-01'
        },
        range: () => {
          this.type = 'range'
          this.defaultValue = ['2020-08-18', '2020-08-23']
        },
        dateRange: () => {
          this.type = 'range'
          this.minDate = '2020-10-01'
          this.maxDate = '2020-10-07'
          this.defaultValue = ['2020-10-01', '2020-10-02']
        },
        text: () => {
          this.type = 'range'
          this.minDate = '2020-10-01'
          this.maxDate = '2020-10-07'
          this.defaultValue = ['2020-10-01', '2020-10-02']
          this.endText = '下飞机'
          this.startText = '上飞机'
        },
        color: () => {
          this.type = 'range'
          this.minDate = '2020-10-01'
          this.maxDate = '2020-10-07'
          this.defaultValue = ['2020-10-01', '2020-10-02']
          this.endText = '下飞机'
          this.startText = '上飞机'
          this.todayActiveBorderColor = 'green'
          this.activeColor = 'black'
          this.activeBg = 'green'
          this.rangeColor = 'white'
          this.rangeBg = 'rgba(0, 0, 255, 0.1)'
          this.dateFormat = 'yyyy:mm:dd'
        }
      }
      this.showCalendar = true
      fn[key]()
    }
  }
}
</script>
