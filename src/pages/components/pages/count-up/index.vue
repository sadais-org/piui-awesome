<template>
  <view class="pi-scroll-container">
    <pi-navbar title="数字滚动" />
    <scroll-view class="pi-scroll" scroll-y="">
      <pi-card padding="0">
        <pi-section slot="title" padding="24">
          基础用法
        </pi-section>
        <template slot="body">
          <view class="pi-pd-24">
            <pi-count-up start-num="0" end-num="999" />
          </view>
          <view class="pi-pd-24">
            <pi-count-up start-num="999" end-num="0" />
          </view>
        </template>
      </pi-card>
      <pi-card padding="0">
        <pi-section slot="title" padding="24">
          设置滚动时间
        </pi-section>
        <template slot="body">
          <view class="pi-pd-24">
            <pi-count-up start-num="0" end-num="999" duration="10000" />
          </view>
          <view class="pi-pd-24">
            <pi-count-up start-num="0" end-num="999" duration="3000" />
          </view>
        </template>
      </pi-card>
      <pi-card padding="0">
        <pi-section slot="title" padding="24">
          显示小数位
        </pi-section>
        <template slot="body">
          <view class="pi-pd-24">
            <pi-count-up start-num="0" end-num="999" decimals="1" />
          </view>
          <view class="pi-pd-24">
            <pi-count-up start-num="0" end-num="999.99" decimals="2" />
          </view>
        </template>
      </pi-card>
      <pi-card padding="0">
        <pi-section slot="title" padding="24">
          缓动效果
        </pi-section>
        <template slot="body">
          <view class="pi-pd-24">
            <pi-count-up start-num="0" end-num="999" is-ease />
          </view>
          <view class="pi-pd-24">
            <pi-count-up start-num="0" end-num="999" :is-ease="false" />
          </view>
        </template>
      </pi-card>
      <pi-card padding="0">
        <pi-section slot="title" padding="24">
          字体颜色以及大小
        </pi-section>
        <template slot="body">
          <view class="pi-pd-24">
            <pi-count-up start-num="0" end-num="999" font-size="80" />
          </view>
          <view class="pi-pd-24">
            <pi-count-up start-num="0" end-num="999" font-color="red" />
          </view>
        </template>
      </pi-card>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'CountUp'
}
</script>
