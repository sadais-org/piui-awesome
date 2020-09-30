<template>
  <view class="pi-scroll-container">
    <pi-navbar title="日期选择器" />
    <scroll-view class="pi-scroll" scroll-y>
      <pi-list title="语言切换">
        <pi-list-item title="生日" @tap="handleShowSelect('default')">
          <input
            :value="form.default.value"
            type="text"
            class="input"
            placeholder="请选择"
            disabled
          />
        </pi-list-item>
        <pi-list-item title="预定酒店" @tap="handleShowSelect('hotel')">
          <input
            :value="form.hotel.value"
            type="text"
            class="input"
            placeholder="请选择"
            disabled
          />
        </pi-list-item>
        <pi-list-item title="年" @tap="handleShowSelect('year')">
          <input :value="form.year.value" type="text" class="input" placeholder="请选择" disabled />
        </pi-list-item>
        <pi-list-item title="月" @tap="handleShowSelect('month')">
          <input
            :value="form.month.value"
            type="text"
            class="input"
            placeholder="请选择"
            disabled
          />
        </pi-list-item>
        <pi-list-item title="日" @tap="handleShowSelect('day')">
          <input :value="form.day.value" type="text" class="input" placeholder="请选择" disabled />
        </pi-list-item>
        <pi-list-item title="时" @tap="handleShowSelect('hour')">
          <input :value="form.hour.value" type="text" class="input" placeholder="请选择" disabled />
        </pi-list-item>
        <pi-list-item title="分" @tap="handleShowSelect('minute')">
          <input
            :value="form.minute.value"
            type="text"
            class="input"
            placeholder="请选择"
            disabled
          />
        </pi-list-item>
        <pi-list-item title="秒" @tap="handleShowSelect('second')">
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
          value: '1990-05-23',
          toolbarPosition: 'top',
          showTitle: false,
          field: 'day'
        },
        hotel: {
          title: '预定酒店',
          value: '2020-05-23 23:59',
          toolbarPosition: 'top',
          showTitle: false,
          field: 'minute'
        },
        year: {
          title: '年',
          value: '2020-05-23 23:59',
          toolbarPosition: 'bottom',
          showTitle: false,
          field: 'year'
        },
        month: {
          title: '月',
          value: '2020-05-23 23:59',
          showTitle: true,
          field: 'month'
        },
        day: {
          title: '日',
          value: '2020-05-23 23:59',
          showTitle: true,
          field: 'day'
        },
        hour: {
          title: '时',
          value: '2020-05-23 23:59',
          showTitle: true,
          field: 'hour'
        },
        minute: {
          title: '分',
          value: '2020-05-23 23:59',
          field: 'minute'
        },
        second: {
          title: '秒',
          value: '2020-05-23 23:59',
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
        field: this.form[formKey].field
      }
    },
    handleSelectConfirm(value) {
      this.form[this.datePickerOptions.key].value = value
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
