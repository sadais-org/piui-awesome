<template>
  <view class="pi-scroll-container">
    <pi-navbar title="搜索框" />
    <scroll-view class="pi-scroll" scroll-y="">
      <view class="pi-content">
        <pi-loading show />
        <pi-loading show size="50" />
        <pi-loading show>加载中</pi-loading>
        <pi-loading show size="50" color="#ff508a" />
        <pi-loading show color="#ff508a" type="circle" />
        <pi-loading show color="#ff508a" type="circle">加载中</pi-loading>
        <pi-loading show size="38rpx" type="circle" vertical>加载中</pi-loading>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Search'
}
</script>
