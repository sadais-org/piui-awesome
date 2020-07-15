<template>
  <view class="pi-scroll-container">
    <pi-navbar title="mask" />
    <scroll-view class="pi-scroll" scroll-y="">
      <view class="pi-content">
        <button type="primary" @tap="showMask = true">显示</button>
      </view>
    </scroll-view>
    <pi-mask
      :show="showMask"
      append-to-body
      duration="900"
      background="rgba(0, 0, 0, .8)"
      @close="showMask = false"
    >
      <view class="pi-abso-center">
        <view class="pi-square pi-w-100 pi-bg-white">
          <view class="pi-flex-column-center">笔芯</view>
        </view>
      </view>
    </pi-mask>
  </view>
</template>

<script>
export default {
  name: 'MaskPage',
  data() {
    return {
      showMask: false
    }
  }
}
</script>

<style></style>
