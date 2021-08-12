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

      <pi-card padding="0">
        <pi-section slot="title" padding="24" desc="startYear, endYear">
          自定义年份范围
        </pi-section>
        <template slot="body">
          <pi-form>
            <pi-form-item label="年份范围" @click="form.self.show = !form.self.show">
              <input
                :value="form.self.value"
                type="text"
                class="input"
                placeholder="请选择"
                disabled
              />
            </pi-form-item>
          </pi-form>
        </template>
      </pi-card>

      <pi-card padding="0">
        <pi-section slot="title" padding="24" desc="format">日期格式</pi-section>
        <template slot="body">
          <pi-form>
            <pi-form-item label="日期格式" @click="form.format.show = !form.format.show">
              <input
                :value="form.format.value"
                type="text"
                class="input"
                placeholder="请选择"
                disabled
              />
            </pi-form-item>
            <pi-form-item label="YYYY年MM月DD日">
              <div>{{ form.format.value }}</div>
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
    <pi-date-picker
      v-model="form.self.show"
      field="second"
      format="YYYY-MM-DD HH:mm:ss"
      :start-year="form.self.startYear"
      :end-year="form.self.endYear"
      :default-value="form.self.value"
      @confirm="form.self.value = $event"
    />
    <pi-date-picker
      v-model="form.format.show"
      field="second"
      format="YYYY年MM月DD日"
      :default-value="form.format.value"
      @confirm="form.format.value = $event"
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
        },
        self: {
          show: false,
          startYear: 2000,
          endYear: new Date().getFullYear(),
          value: '2020-05-23 12:10:25'
        },
        format: {
          show: false,
          value: '2020年05月23日'
        }
      }
    }
  }
}
</script>
