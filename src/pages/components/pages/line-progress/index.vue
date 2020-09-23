<template>
  <view class="pi-scroll-container">
    <pi-navbar title="线型进度条" />
    <scroll-view class="pi-scroll" scroll-y="">
      <view class="pi-content">
        <pi-line-progress percent="30" />
        <pi-line-progress percent="60" />
        <pi-line-progress percent="90" striped />
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
