<template>
  <view class="pi-scroll-container">
    <pi-navbar title="Popup" />
    <scroll-view class="pi-scroll" scroll-y="">
      <view class="pi-content" style="height: 2048rpx;">
        <button type="primary" @tap="handleShowPopup('top')">上方弹出</button>
        <button type="primary" @tap="handleShowPopup('bottom')">下方弹出</button>
        <button type="primary" @tap="handleShowPopup('left')">左侧弹出</button>
        <button type="primary" @tap="handleShowPopup('right')">右侧弹出</button>
      </view>
    </scroll-view>
    <pi-popup v-model="showPopup" :position="popupPosition">
      <view :style="[positionStyle, { background: '#ff508a' }]">
        <view class="pi-flex-column-center pi-pd-top-100 pi-white pi-fz-40 pi-fw-600">笔芯</view>
      </view>
    </pi-popup>
  </view>
</template>

<script>
export default {
  name: 'PopupPage',
  data() {
    return {
      showPopup: false,
      popupPosition: 'bottom'
    }
  },
  computed: {
    positionStyle() {
      const positionStyleMap = {
        top: { width: '100%', height: '800rpx' },
        bottom: { width: '100%', height: '800rpx' },
        left: { width: '500rpx', height: '100%' },
        right: { width: '500rpx', height: '100%' }
      }
      return positionStyleMap[this.popupPosition]
    }
  },
  methods: {
    handleShowPopup(popupPosition = 'bottom') {
      this.popupPosition = popupPosition
      this.showPopup = true
    }
  }
}
</script>

<style lang="scss" scoped>
.pi-content {
  button {
    margin-top: 24rpx;
  }
}
</style>
