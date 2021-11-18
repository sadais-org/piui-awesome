<template>
  <view class="pi-scroll-container">
    <pi-navbar title="线型进度条" />
    <scroll-view class="pi-scroll" scroll-y>
      <pi-card padding="0">
        <pi-section slot="title" padding="24" title="基础用法" />
        <template slot="body">
          <view class="pi-pd-24 pi-justify-around" style="height::auto;">
            <pi-circle-progress width="200" :percent="40" />
            <pi-circle-progress width="200" :percent="40" text="hello,word" />
          </view>
        </template>
      </pi-card>

      <pi-card padding="0">
        <pi-section slot="title" padding="24" title="自定义颜色/字体大小" />
        <template slot="body">
          <view class="pi-pd-24 pi-justify-around" style="height::auto;">
            <pi-circle-progress width="200" :percent="40" inactive-color="#4169E1" />
            <pi-circle-progress width="200" :percent="40" text="hello,word" font-size="12px" />
          </view>
        </template>
      </pi-card>

      <pi-card padding="0">
        <pi-section slot="title" padding="24" title="自定义半径/进度条宽度" />
        <template slot="body">
          <view class="pi-pd-24 pi-justify-around" style="height::auto;">
            <pi-circle-progress width="250" :percent="40" />
            <pi-circle-progress width="250" :percent="40" border-width="30" />
          </view>
        </template>
      </pi-card>

      <pi-card padding="0" />
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'CircleProgress'
}
</script>
