<template>
  <view class="pi-scroll-container">
    <pi-navbar title="倒计时" />
    <scroll-view class="pi-scroll" scroll-y="">
      <view class="pi-content">
        <pi-section>默认展示</pi-section>
        <pi-count-down value="314159" />
        <pi-section>不自动运行</pi-section>
        <pi-count-down value="314159" :autoplay="false" />
        <pi-section>不显示天</pi-section>
        <pi-count-down value="314159" :show-day="false" />
        <pi-section>不显示小时</pi-section>
        <pi-count-down value="314159" :show-day="false" :show-hour="false" />
        <pi-section>不显示分钟</pi-section>
        <pi-count-down value="314159" :show-day="false" :show-hour="false" :show-minute="false" />
        <pi-section>分隔符中文</pi-section>
        <pi-count-down value="314159" separator="zh" />
        <pi-section>自定义样式</pi-section>
        <pi-count-down
          value="314159"
          separator="zh"
          :time-style="{
            color: '#CA332C',
            background: '#FFE7E8',
            border: '1px solid #CA332C'
          }"
          :separator-style="{
            color: '#CA332C'
          }"
        />
        <pi-section>自定义样式</pi-section>
        <pi-count-down
          value="314159"
          :time-style="{
            color: '#CA332C',
            background: '#FFE7E8',
            border: '1px solid #CA332C'
          }"
          :separator-style="{
            color: '#CA332C'
          }"
        />
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'CountDown'
}
</script>
