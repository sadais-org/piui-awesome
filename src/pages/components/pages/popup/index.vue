<template>
  <view class="pi-scroll-container">
    <pi-navbar title="Popup" />
    <scroll-view class="pi-scroll" scroll-y="">
      <view class="pi-content" style="height: 2048rpx;">
        <pi-button type="primary" custom-class="pi-mg-top-12" @tap="handleShowPopup('top')">
          上方弹出
        </pi-button>
        <pi-button type="primary" custom-class="pi-mg-top-12" @tap="handleShowPopup('bottom')">
          下方弹出
        </pi-button>
        <pi-button
          type="primary"
          custom-class="pi-mg-top-12"
          @tap="handleShowPopup('bottom', 'br')"
        >
          下方弹出（关闭按钮在右下角）
        </pi-button>
        <pi-button type="primary" custom-class="pi-mg-top-12" @tap="handleShowPopup('left')">
          左侧弹出
        </pi-button>
        <pi-button type="primary" custom-class="pi-mg-top-12" @tap="handleShowPopup('right')">
          右侧弹出
        </pi-button>
      </view>
    </scroll-view>
    <pi-popup
      v-model="showPopup"
      :position="popupPosition"
      :close-icon-position="popupClosePosition"
      :border-radius="borderRadius"
    >
      <view :style="[positionStyle]">
        <view class="pi-flex-column-center pi-pd-top-100 pi-fz-40 pi-fw-600">笔芯</view>
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
      popupPosition: 'bottom',
      popupClosePosition: '',
      borderRadius: '0 0 0 0'
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
    handleShowPopup(popupPosition = 'bottom', closePosition = '') {
      this.popupPosition = popupPosition
      this.popupClosePosition = closePosition
      this.borderRadius = popupPosition === 'bottom' ? '40rpx 40rpx 0 0' : '0 0 0 0'
      this.showPopup = true
    }
  }
}
</script>

<style lang="scss" scoped>
.pi-content {
  pi-button {
    margin-top: 24rpx;
  }
}
</style>
