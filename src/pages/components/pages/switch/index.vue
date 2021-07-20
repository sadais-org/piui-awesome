<template>
  <view class="pi-scroll-container">
    <pi-navbar title="switch 开关" />
    <scroll-view class="pi-scroll" scroll-y="">
      <pi-card class="pi-flex-column">
        <pi-section slot="title" title="基础用法" />
        <pi-switch slot="body" />
      </pi-card>

      <pi-card class="pi-flex-column">
        <pi-section slot="title" title="禁用状态" />
        <pi-switch slot="body" disabled />
      </pi-card>

      <pi-card class="pi-flex-column">
        <pi-section slot="title" title="开关类型" />
        <template slot="body">
          <view class="pi-align-center">
            <text class="pi-mg-right-18 pi-fz-16">线框模式</text>
            <pi-switch type="line" />
          </view>
          <view class="pi-align-center pi-mg-top-16">
            <text class="pi-mg-right-18 pi-fz-16">实底模式</text>
            <pi-switch type="fill" />
          </view>
        </template>
      </pi-card>

      <pi-card>
        <pi-section slot="title" title="自定义颜色" />
        <template slot="body">
          <pi-switch class="pi-mg-top-16" active-color="#ff508a" inactive-color="#888888" />
        </template>
      </pi-card>

      <pi-card>
        <pi-section slot="title" title="设置开关值" />
        <template slot="body">
          <view>
            <view>
              {{ demo4Val }}
            </view>
            <pi-switch
              v-model="demo4Val"
              class="pi-mg-top-16 pi-mg-right-8"
              active-value="open"
              inactive-value="close"
            />
          </view>
          <view>
            <view>
              {{ demo4 }}
            </view>
            <pi-switch
              v-model="demo4"
              class="pi-mg-top-16 pi-mg-right-8"
              :active-value="1"
              :inactive-value="0"
            />
          </view>
        </template>
      </pi-card>

      <pi-card>
        <pi-section slot="title" title="加载状态" />
        <template slot="body">
          <view class="pi-align-center">
            <text class="pi-mg-right-18 pi-fz-16">菊花</text>
            <pi-switch :loading="isLoading" loading-type="spinner" />
          </view>
          <view class="pi-align-center pi-mg-top-16">
            <text class="pi-mg-right-18 pi-fz-16">圆环</text>
            <pi-switch :loading="isLoading" loading-type="round" />
          </view>
        </template>
      </pi-card>

      <pi-card>
        <pi-section slot="title" title="设置尺寸（默认单位rpx）" />
        <template slot="body">
          <view class="pi-align-center">
            <text class="pi-mg-right-18 pi-fz-16">数值格式 50</text>
            <pi-switch :size="50" />
          </view>
          <view class="pi-align-center pi-mg-top-16">
            <text class="pi-mg-right-18 pi-fz-16">字符串格式 '50rpx'</text>
            <pi-switch size="50rpx" />
          </view>
        </template>
      </pi-card>

      <pi-card>
        <pi-section slot="title" title="不触发短促震动（iOS的微信小程序有效）" />
        <template slot="body">
          <pi-switch :vibrate-short="false" />
        </template>
      </pi-card>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Switch',
  data() {
    return {
      demo4Val: 'close',
      demo4: 0,
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
