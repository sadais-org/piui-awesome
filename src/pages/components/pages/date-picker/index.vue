<template>
  <view class="pi-scroll-container">
    <pi-navbar title="日期选择器" />
    <scroll-view class="pi-scroll" scroll-y>
      <!-- 基础用法 -->
      <pi-card padding="0">
        <pi-section slot="title" padding="24" title="日期精度" />
        <template slot="body">
          <pi-form>
            <pi-form-item label="年" @click="form.year.show = !form.year.show">
              <input
                :value="form.year.value"
                type="text"
                class="input"
                placeholder="请选择"
                disabled
              />
            </pi-form-item>
            <pi-form-item label="月" @click="form.month.show = !form.month.show">
              <input
                :value="form.month.value"
                type="text"
                class="input"
                placeholder="请选择"
                disabled
              />
            </pi-form-item>
            <pi-form-item label="日" @click="form.day.show = !form.day.show">
              <input
                :value="form.day.value"
                type="text"
                class="input"
                placeholder="请选择"
                disabled
              />
            </pi-form-item>
            <pi-form-item label="时" @click="form.hour.show = !form.hour.show">
              <input
                :value="form.hour.value"
                type="text"
                class="input"
                placeholder="请选择"
                disabled
              />
            </pi-form-item>
            <pi-form-item label="分" @click="form.minute.show = !form.minute.show">
              <input
                :value="form.minute.value"
                type="text"
                class="input"
                placeholder="请选择"
                disabled
              />
            </pi-form-item>
            <pi-form-item label="秒" @click="form.second.show = !form.second.show">
              <input
                :value="form.second.value"
                type="text"
                class="input"
                placeholder="请选择"
                disabled
              />
            </pi-form-item>
          </pi-form>
        </template>
      </pi-card>
    </scroll-view>
    <pi-date-picker
      v-model="form.year.show"
      field="year"
      :default-value="form.year.value"
      format="YYYY"
      @confirm="form.year.value = $event"
    />
    <pi-date-picker
      v-model="form.month.show"
      field="month"
      format="YYYY-MM"
      :default-value="form.month.value"
      @confirm="form.month.value = $event"
    />
    <pi-date-picker
      v-model="form.day.show"
      field="day"
      format="YYYY-MM-DD"
      :default-value="form.day.value"
      @confirm="form.day.value = $event"
    />
    <pi-date-picker
      v-model="form.hour.show"
      field="hour"
      format="YYYY-MM-DD HH"
      :default-value="form.hour.value"
      @confirm="form.hour.value = $event"
    />
    <pi-date-picker
      v-model="form.minute.show"
      field="minute"
      format="YYYY-MM-DD HH:mm"
      :default-value="form.minute.value"
      @confirm="form.minute.value = $event"
    />
    <pi-date-picker
      v-model="form.second.show"
      field="second"
      format="YYYY-MM-DD HH:mm:ss"
      :default-value="form.second.value"
      @confirm="form.second.value = $event"
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
        year: {
          show: false,
          value: '2018'
        },
        month: {
          show: false,
          value: '2020-05'
        },
        day: {
          show: false,
          value: '2020-05-23'
        },
        hour: {
          show: false,
          value: '2020-05-23'
        },
        minute: {
          show: false,
          value: '2020-05-23 12:10'
        },
        second: {
          show: false,
          value: '2020-05-23 12:10:25'
        }
      }
    }
  }
}
</script>
