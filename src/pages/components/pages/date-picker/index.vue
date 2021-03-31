<template>
  <view class="pi-scroll-container">
    <pi-navbar title="日期选择器" />
    <scroll-view class="pi-scroll" scroll-y>
      <pi-list title="精度切换">
        <pi-list-item title="生日" @tap="handleShowSelect('default')">
          <input
            :value="form.default.value"
            type="text"
            class="input"
            placeholder="请选择"
            disabled
          />
        </pi-list-item>
        <pi-list-item title="YYYY" @tap="handleShowSelect('year')">
          <input :value="form.year.value" type="text" class="input" placeholder="请选择" disabled />
        </pi-list-item>
        <pi-list-item title="YYYY-MM" @tap="handleShowSelect('month')">
          <input
            :value="form.month.value"
            type="text"
            class="input"
            placeholder="请选择"
            disabled
          />
        </pi-list-item>
        <pi-list-item title="YYYY-MM-DD" @tap="handleShowSelect('day')">
          <input :value="form.day.value" type="text" class="input" placeholder="请选择" disabled />
        </pi-list-item>
        <pi-list-item title="YYYY-MM-DD hh" @tap="handleShowSelect('hour')">
          <input :value="form.hour.value" type="text" class="input" placeholder="请选择" disabled />
        </pi-list-item>
        <pi-list-item title="YYYY-MM-DD hh:mm" @tap="handleShowSelect('minute')">
          <input
            :value="form.minute.value"
            type="text"
            class="input"
            placeholder="请选择"
            disabled
          />
        </pi-list-item>
        <pi-list-item title="YYYY-MM-DD hh:mm:ss" @tap="handleShowSelect('second')">
          <input
            :value="form.second.value"
            type="text"
            class="input"
            placeholder="请选择"
            disabled
          />
        </pi-list-item>
      </pi-list>
    </scroll-view>
    <pi-date-picker
      v-model="datePickerOptions.show"
      :field="datePickerOptions.field"
      :toolbar-position="datePickerOptions.toolbarPosition"
      :show-title="datePickerOptions.showTitle"
      :default-value="datePickerOptions.defaultValue"
      :title="datePickerOptions.title"
      border-radius="24rpx 24rpx 0 0"
      append-to-body
      @confirm="handleSelectConfirm"
    />
  </view>
</template>

<script>
export default {
  name: 'Select',
  data() {
    return {
      title: '',
      form: {
        default: {
          title: '选择生日',
          value: '2020-05-23',
          toolbarPosition: 'top',
          showTitle: false,
          field: 'day'
        },
        year: {
          title: '年',
          value: '2020',
          toolbarPosition: 'bottom',
          showTitle: false,
          field: 'year'
        },
        month: {
          title: '月',
          value: '2020-05',
          showTitle: true,
          field: 'month'
        },
        day: {
          title: '日',
          value: '2020-05-23',
          showTitle: true,
          field: 'day'
        },
        hour: {
          title: '时',
          value: '2020-05-23',
          showTitle: true,
          field: 'hour'
        },
        minute: {
          title: '分',
          value: '2020-05-23 12:10',
          field: 'minute'
        },
        second: {
          title: '秒',
          value: '2020-05-23 12:10:25',
          showTitle: true,
          field: 'second'
        }
      },
      datePickerOptions: {
        key: '',
        title: '日期选择',
        show: false,
        defaultValue: null
      }
    }
  },
  methods: {
    handleShowSelect(formKey) {
      this.datePickerOptions = {
        key: formKey,
        show: true,
        defaultValue: this.form[formKey].value,
        toolbarPosition: this.form[formKey].toolbarPosition || 'bottom',
        showTitle: this.form[formKey].showTitle,
        field: this.form[formKey].field,
        title: '日期选择'
      }
    },
    handleSelectConfirm(value) {
      console.log(value)
      var strTime
      switch (this.form[this.datePickerOptions.key].field) {
        case 'year':
          strTime = value.year
          break
        case 'month':
          strTime = value.year + '-' + value.month
          break
        case 'day':
          strTime = value.year + '-' + value.month + '-' + value.date
          break
        case 'hour':
          strTime = value.year + '-' + value.month + '-' + value.date + '-' + value.hour
          break
        case 'minute':
          strTime =
            value.year +
            '-' +
            value.month +
            '-' +
            value.date +
            ' ' +
            value.hour +
            ':' +
            value.minute
          break
        case 'second':
          strTime =
            value.year +
            '-' +
            value.month +
            '-' +
            value.date +
            ' ' +
            value.hour +
            ':' +
            value.minute +
            ':' +
            value.second
          break
      }
      this.form[this.datePickerOptions.key].value = strTime
      return true
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  text-align: right;
}
</style>
