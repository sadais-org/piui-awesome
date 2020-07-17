<template>
  <view class="pi-scroll-container">
    <pi-navbar title="搜索框" />
    <scroll-view class="pi-scroll" scroll-y="">
      <view class="pi-content">
        <pi-divider :custom-style="{ margin: '48rpx 0' }" />
        <pi-divider :custom-style="{ margin: '48rpx 0' }">分割线</pi-divider>
        <pi-divider border-color="#ff508a" :custom-style="{ margin: '48rpx 0' }">
          <view class="pi-fz-48 pi-fw-500 pi-gray">自定义分割线</view>
        </pi-divider>
        <pi-divider content-position="left" :custom-style="{ margin: '48rpx 0' }">
          content left
        </pi-divider>
        <pi-divider content-position="right" :custom-style="{ margin: '48rpx 0' }">
          content right
        </pi-divider>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Search'
}
</script>

