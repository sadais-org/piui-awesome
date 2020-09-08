<template>
  <view class="pi-scroll-container">
    <pi-navbar title="搜索框" />
    <scroll-view class="pi-scroll" scroll-y="">
      <view class="pi-content">
        <pi-search />
        <pi-search
          search-label="左侧slot"
          :search-label-style="{ color: '#ff508a', fontSize: '36rpx' }"
        />
        <view>clearTrigger: 'focus'</view>
        <pi-search clear-trigger="focus" />
        <pi-search clear-trigger="focus" show-action action-text="确定" />
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style></style>
