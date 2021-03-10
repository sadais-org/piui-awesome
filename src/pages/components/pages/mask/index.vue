<template>
  <view class="pi-scroll-container">
    <pi-navbar title="mask" />
    <scroll-view class="pi-scroll" scroll-y="">
      <view class="pi-content">
        <pi-button type="primary" @tap="showMask = true">显示</pi-button>
      </view>
    </scroll-view>
    <!-- duration格式：'0.56s' 、'560ms' 、'560'、数字560 -->
    <pi-mask
      :value="showMask"
      append-to-body
      duration="0.56s"
      background="rgba(0, 0, 0, .8)"
      @closed="showMask = false"
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
