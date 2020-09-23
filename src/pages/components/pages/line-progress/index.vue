<template>
  <view class="pi-scroll-container">
    <pi-navbar title="线型进度条" />
    <scroll-view class="pi-scroll" scroll-y="">
      <view class="pi-content">
        <pi-section title="指定宽度" desc="40%" />
        <pi-line-progress width="200" percent="40" striped striped-active />
        <pi-section title="默认进度条" desc="30%" />
        <pi-line-progress percent="30" />
        <pi-section title="默认进度条" desc="60%" />
        <pi-line-progress percent="60" />
        <pi-section title="线条 striped" desc="90%" />
        <pi-line-progress percent="90" striped />
        <pi-section title="线条活动 striped striped-active" desc="100%" />
        <pi-line-progress percent="100" striped striped-active />
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Search'
}
</script>
