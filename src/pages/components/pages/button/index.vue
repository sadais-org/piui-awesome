<template>
  <view class="pi-scroll-container">
    <pi-navbar title="按钮" />
    <scroll-view class="pi-scroll" scroll-y>
      <view class="pi-content">
        <view class="section">
          <view class="title">按钮尺寸</view>
          <pi-button size="large" @tap="handleButtonClick">大按钮 large</pi-button>
          <pi-button size="default">普通按钮 default</pi-button>
          <pi-button size="medium">中按钮 medium</pi-button>
          <pi-button size="small">小按钮 small</pi-button>
          <pi-button size="tiny">超小按钮 tiny</pi-button>
          <pi-button size="mini">迷你按钮 mini</pi-button>
        </view>

        <view class="section">
          <view class="title">按钮类型</view>
          <pi-button type="primary">主要按钮</pi-button>
          <pi-button type="secondary">次要按钮</pi-button>
          <pi-button type="warn">警告按钮</pi-button>
          <pi-button type="line">线框按钮</pi-button>
        </view>
        <view class="section">
          <view class="title">渐变按钮</view>
          <pi-button
            type="primary"
            size="large"
            :custom-style="{
              background: 'linear-gradient(90deg, #6F8EFF 0%, #4731FF 100%)',
              boxShadow: '0px 8px 8px 0px rgba(66, 106, 255, 0.16);'
            }"
          >
            大按钮 large
          </pi-button>
          <pi-button
            type="primary"
            size="default"
            :custom-style="{
              background: 'linear-gradient(90deg, #6F8EFF 0%, #4731FF 100%)',
              boxShadow: '0px 8px 8px 0px rgba(66, 106, 255, 0.16);'
            }"
          >
            普通按钮 default
          </pi-button>
          <pi-button
            type="primary"
            size="medium"
            :custom-style="{
              background: 'linear-gradient(90deg, #6F8EFF 0%, #4731FF 100%)',
              boxShadow: '0px 8px 8px 0px rgba(66, 106, 255, 0.16);'
            }"
          >
            中按钮 medium
          </pi-button>
          <pi-button
            type="primary"
            size="small"
            :custom-style="{
              background: 'linear-gradient(90deg, #6F8EFF 0%, #4731FF 100%)',
              boxShadow: '0px 8px 8px 0px rgba(66, 106, 255, 0.16);'
            }"
          >
            小按钮 small
          </pi-button>
          <pi-button
            type="primary"
            size="tiny"
            :custom-style="{
              background: 'linear-gradient(90deg, #6F8EFF 0%, #4731FF 100%)',
              boxShadow: '0px 8px 8px 0px rgba(66, 106, 255, 0.16);'
            }"
          >
            超小按钮 tiny
          </pi-button>
          <pi-button
            type="primary"
            size="mini"
            :custom-style="{
              background: 'linear-gradient(90deg, #6F8EFF 0%, #4731FF 100%)',
              boxShadow: '0px 8px 8px 0px rgba(66, 106, 255, 0.16);'
            }"
          >
            迷你按钮 mini
          </pi-button>
        </view>
        <view class="section">
          <view class="title">禁用按钮</view>
          <pi-button type="primary" size="large" disabled>大按钮 large</pi-button>
          <pi-button type="secondary" size="default" disabled>普通按钮 default</pi-button>
          <pi-button type="warn" size="medium" disabled>中按钮 medium</pi-button>
          <pi-button type="line" size="small" disabled>小按钮 small</pi-button>
          <pi-button type="primary" size="tiny" disabled>超小按钮 tiny</pi-button>
          <pi-button type="primary" size="mini" disabled>迷你按钮 mini</pi-button>
        </view>
        <view class="section">
          <view class="title">主要按钮占满一行</view>
          <pi-button type="primary" size="large" width="100%" custom-class="pi-mg-bottom-8">
            大按钮 large
          </pi-button>
          <pi-button type="primary" size="default" width="100%" custom-class="pi-mg-bottom-8">
            普通按钮 default
          </pi-button>
          <pi-button type="primary" size="medium" width="100%" custom-class="pi-mg-bottom-8">
            中按钮 medium
          </pi-button>
          <pi-button type="primary" size="small" width="100%" custom-class="pi-mg-bottom-8">
            小按钮 small
          </pi-button>
          <pi-button type="primary" size="tiny" width="100%" custom-class="pi-mg-bottom-8">
            超小按钮 tiny
          </pi-button>
          <pi-button type="primary" size="mini" width="100%">迷你按钮 mini</pi-button>
        </view>
        <view class="section">
          <view class="title">次要按钮固定宽度</view>
          <pi-button type="secondary" size="large" width="225">大按钮 large</pi-button>
          <pi-button type="secondary" size="default" width="225">普通按钮 default</pi-button>
          <pi-button type="secondary" size="medium" width="225">中按钮 medium</pi-button>
          <pi-button type="secondary" size="small" width="225">小按钮 small</pi-button>
          <pi-button type="secondary" size="tiny" width="225">超小按钮 tiny</pi-button>
          <pi-button type="secondary" size="mini" width="225">迷你按钮 mini</pi-button>
        </view>

        <view class="section">
          <view class="title">次要按钮镂空</view>
          <pi-button type="secondary" size="large" plain>大按钮 large</pi-button>
          <pi-button type="secondary" size="default" plain>普通按钮 default</pi-button>
          <pi-button type="secondary" size="medium" plain>中按钮 medium</pi-button>
          <pi-button type="secondary" size="small" plain>小按钮 small</pi-button>
          <pi-button type="secondary" size="tiny" plain>超小按钮 tiny</pi-button>
          <pi-button type="secondary" size="mini" plain>迷你按钮 mini</pi-button>
        </view>

        <view class="section">
          <view class="title">渐变按钮loading</view>
          <pi-button
            loading
            type="primary"
            size="large"
            :custom-style="{
              background: 'linear-gradient(90deg, #6F8EFF 0%, #4731FF 100%)',
              boxShadow: '0px 8px 8px 0px rgba(66, 106, 255, 0.16);'
            }"
          >
            大按钮 large
          </pi-button>
          <pi-button
            loading
            type="primary"
            size="default"
            :custom-style="{
              background: 'linear-gradient(90deg, #6F8EFF 0%, #4731FF 100%)',
              boxShadow: '0px 8px 8px 0px rgba(66, 106, 255, 0.16);'
            }"
          >
            普通按钮 default
          </pi-button>
          <pi-button
            loading
            type="primary"
            size="medium"
            :custom-style="{
              background: 'linear-gradient(90deg, #6F8EFF 0%, #4731FF 100%)',
              boxShadow: '0px 8px 8px 0px rgba(66, 106, 255, 0.16);'
            }"
          >
            中按钮 medium
          </pi-button>
          <pi-button
            loading
            type="primary"
            size="small"
            :custom-style="{
              background: 'linear-gradient(90deg, #6F8EFF 0%, #4731FF 100%)',
              boxShadow: '0px 8px 8px 0px rgba(66, 106, 255, 0.16);'
            }"
          >
            小按钮 small
          </pi-button>
          <pi-button
            loading
            type="primary"
            size="tiny"
            :custom-style="{
              background: 'linear-gradient(90deg, #6F8EFF 0%, #4731FF 100%)',
              boxShadow: '0px 8px 8px 0px rgba(66, 106, 255, 0.16);'
            }"
          >
            超小按钮 tiny
          </pi-button>
          <pi-button
            loading
            type="primary"
            size="mini"
            :custom-style="{
              background: 'linear-gradient(90deg, #6F8EFF 0%, #4731FF 100%)',
              boxShadow: '0px 8px 8px 0px rgba(66, 106, 255, 0.16);'
            }"
          >
            迷你按钮 mini
          </pi-button>
        </view>
        <view class="section">
          <view class="title">次要按钮圆角</view>
          <pi-button type="secondary" size="large" round>大按钮 large</pi-button>
          <pi-button type="secondary" size="default" round>普通按钮 default</pi-button>
          <pi-button type="secondary" size="medium" round>中按钮 medium</pi-button>
          <pi-button type="secondary" size="small" round>小按钮 small</pi-button>
          <pi-button type="secondary" size="tiny" round>超小按钮 tiny</pi-button>
          <pi-button type="secondary" size="mini" round>迷你按钮 mini</pi-button>
        </view>
        <view class="section">
          <view class="title">自定义style</view>
          <pi-button
            color="#ffffff"
            bg-color="#ff508a"
            custom-class="pi-mg-top-12 pi-lh-66 pi-h-66"
            round
          >
            自定义style
          </pi-button>
          <pi-button color="#ffffff" bg-color="#ff508a" custom-class="pi-mg-top-12" round loading>
            自定义style loading
          </pi-button>
          <pi-button
            size="large"
            width="100%"
            color="#ffffff"
            bg-color="#ff508a"
            custom-class="pi-mg-top-12"
          >
            <view class="pi-flex-column-center pi-h-100P">
              <view class="pi-lh-1 pi-mg-bottom-12">主按钮</view>
              <view class="pi-lh-1 pi-fz-24">短按钮副文本副文本 Normal</view>
            </view>
          </pi-button>
          <pi-button color="#ffffff" bg-color="#ff508a" custom-class="pi-mg-top-12" round>
            <pi-icon name="check" />
            <text class="pi-mg-left-12">带勾选按钮</text>
          </pi-button>
        </view>
      </view>
    </scroll-view>
    <pi-bottom-bar>
      <pi-button width="100%" type="primary" size="large">
        吸底按钮
      </pi-button>
    </pi-bottom-bar>
  </view>
</template>

<script>
export default {
  name: 'Button',
  methods: {
    handleButtonClick() {
      console.log('按钮点击了')
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .pi-button {
  margin-right: 12rpx;
}
.section {
  padding-bottom: 24rpx;
  .title {
    padding: 24px 0;
    font-size: 32rpx;
  }
}
</style>
