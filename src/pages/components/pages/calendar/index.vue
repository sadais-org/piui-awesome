<template>
  <view class="pi-scroll-container">
    <pi-navbar title="日历" />
    <scroll-view class="pi-scroll" scroll-y="">
      <!-- 基础用法 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="基础用法" />
        <template slot="body">
          <pi-form :model="baseUsed.calendarPanel" padding="0">
            <pi-form-item
              label-width="100"
              prop="name"
              label="活动时间"
              @click="baseUsed.show = true"
            >
              <pi-input v-model="baseUsed.value" disabled />
            </pi-form-item>
          </pi-form>
        </template>
      </pi-card>
      <!-- 范围选择 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="范围选择" />
        <template slot="body">
          <pi-form :model="range.calendarPanel" padding="0">
            <pi-form-item label-width="100" prop="name" label="活动时间" @click="range.show = true">
              <pi-input class="pi-w-100P" :value="getRangeValue" disabled />
            </pi-form-item>
          </pi-form>
        </template>
      </pi-card>
    </scroll-view>
    <pi-calendar
      v-model="baseUsed.show"
      :calendar-panel="{
        value: baseUsed.value
      }"
      @confirm="baseUsed.value = $event"
    />
    <pi-calendar
      v-model="range.show"
      :calendar-panel="{
        value: range.value,
        type: 'range',
        dateFormat: 'YYYY.MM.DD'
      }"
      :popup="{
        mask: {
          appendToBody: true
        }
      }"
      @confirm="range.value = $event"
    />
  </view>
</template>

<script>
export default {
  name: 'Canlendar',
  data() {
    return {
      baseUsed: {
        show: false,
        value: '2020-5-20'
      },
      range: {
        show: false,
        value: ['2020.5.2', '2020.5.20']
      }
    }
  },
  computed: {
    getRangeValue() {
      return this.range.value.join(' - ')
    }
  },

  methods: {}
}
</script>
