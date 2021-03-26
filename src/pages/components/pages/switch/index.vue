<template>
  <view class="pi-scroll-container">
    <pi-navbar title="switch 开关" />
    <scroll-view class="pi-scroll" scroll-y="">
      <view class="pi-content pi-flex-column">
        <view class="pi-flex-column">
          <pi-section title="基础用法" />
          <pi-switch />
        </view>
        <view class="pi-flex-column">
          <pi-section title="禁用状态" />
          <pi-switch disabled />
        </view>
        <view class="pi-flex-column">
          <pi-section title="线条类型" />
          <view class="pi-align-center">
            <text class="pi-mg-right-18 pi-fz-16">线框模式</text>
            <pi-switch type="line" />
          </view>
          <view class="pi-align-center pi-mg-top-16">
            <text class="pi-mg-right-18 pi-fz-16">实底模式</text>
            <pi-switch type="fill" />
          </view>
        </view>
        <view class="pi-flex-column">
          <pi-section title="自定义颜色" />
          <pi-switch class="pi-mg-top-16" active-color="#ff508a" inactive-color="#888888" />
        </view>
        <view class="pi-flex-column">
          <pi-section title="设置开关值" />
          <view class="pi-align-center">
            <pi-switch
              v-model="demo4Val"
              class="pi-mg-top-16 pi-mg-right-8"
              active-value="open"
              inactive-value="close"
            />
            {{ demo4Val }}
          </view>
        </view>
        <view class="pi-flex-column">
          <pi-section title="加载状态" />
          <view class="pi-align-center">
            <text class="pi-mg-right-18 pi-fz-16">菊花</text>
            <pi-switch :loading="isLoading" loading-type="spinner" />
          </view>
          <view class="pi-align-center pi-mg-top-16">
            <text class="pi-mg-right-18 pi-fz-16">圆环</text>
            <pi-switch :loading="isLoading" loading-type="round" />
          </view>
        </view>
        <view class="pi-flex-column">
          <pi-section title="设置尺寸（默认单位rpx）" />
          <view class="pi-align-center">
            <text class="pi-mg-right-18 pi-fz-16">数值格式</text>
            <pi-switch :size="30" />
          </view>
          <view class="pi-align-center pi-mg-top-16">
            <text class="pi-mg-right-18 pi-fz-16">字符串格式</text>
            <pi-switch size="50rpx" />
          </view>
        </view>
        <view class="pi-flex-column">
          <pi-section title="不触发短促震动（iOS的微信小程序有效）" />
          <pi-switch vibrate-short="false" />
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      demo4Val: 'close',
      isLoading: true
    }
  }
}
</script>
<style lang="scss" scoped>
.code {
  padding: 16px;
  margin: 8px 0;
  font-size: 14px;
  color: #888888;
  background: #f8f8f8;
  border-radius: 8px;
}
</style>
