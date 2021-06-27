<template>
  <view class="pi-scroll-container">
    <pi-navbar title="按钮" />
    <scroll-view class="pi-scroll" scroll-y>
      <!-- 基础用法 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="基础用法" />
        <template slot="body">
          <pi-button type="primary">基础用法</pi-button>
        </template>
      </pi-card>
      <!-- 按钮类型 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="按钮类型" />
        <template slot="body">
          <pi-button type="primary">主要按钮</pi-button>
          <pi-button type="secondary">次要按钮</pi-button>
          <pi-button type="warn">警告按钮</pi-button>
          <pi-button type="line">线框按钮</pi-button>
        </template>
      </pi-card>
      <!-- 按钮尺寸 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="按钮尺寸" />
        <template slot="body">
          <pi-button size="large">大按钮</pi-button>
          <pi-button size="default">普通按钮</pi-button>
          <pi-button size="medium">中按钮</pi-button>
          <pi-button size="small">小按钮</pi-button>
          <pi-button size="tiny">超小按钮</pi-button>
          <pi-button size="mini">迷你按钮</pi-button>
        </template>
      </pi-card>
      <!-- 圆角按钮 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="圆角按钮" />
        <template slot="body">
          <pi-button type="primary" size="default" round>普通按钮</pi-button>
          <pi-button type="secondary" size="medium" round>中按钮</pi-button>
          <pi-button type="warn" size="small" round>小按钮</pi-button>
          <pi-button type="line" size="tiny" round>超小按钮</pi-button>
          <pi-button type="primary" size="mini" round>迷你按钮</pi-button>
        </template>
      </pi-card>
      <!-- 按钮禁用 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="按钮禁用" />
        <template slot="body">
          <pi-button type="primary" size="large" disabled>大按钮</pi-button>
          <pi-button type="secondary" size="default" disabled>普通按钮</pi-button>
          <pi-button type="warn" size="medium" disabled>中按钮</pi-button>
          <pi-button type="line" size="small" disabled>小按钮</pi-button>
          <pi-button type="primary" size="tiny" disabled>超小按钮</pi-button>
          <pi-button type="primary" size="mini" disabled>迷你按钮</pi-button>
        </template>
      </pi-card>
      <!-- 渐变按钮 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="渐变按钮" />
        <template slot="body">
          <pi-button
            type="primary"
            size="large"
            :custom-style="{
              background: 'linear-gradient(90deg, #6F8EFF 0%, #4731FF 100%)',
              boxShadow: '0px 8px 8px 0px rgba(66, 106, 255, 0.16);'
            }"
          >
            大按钮
          </pi-button>
          <pi-button
            type="primary"
            size="default"
            :custom-style="{
              background: 'linear-gradient(90deg, #6F8EFF 0%, #4731FF 100%)',
              boxShadow: '0px 8px 8px 0px rgba(66, 106, 255, 0.16);'
            }"
          >
            普通按钮
          </pi-button>
          <pi-button
            type="primary"
            size="medium"
            :custom-style="{
              background: 'linear-gradient(90deg, #6F8EFF 0%, #4731FF 100%)',
              boxShadow: '0px 8px 8px 0px rgba(66, 106, 255, 0.16);'
            }"
          >
            中按钮
          </pi-button>
          <pi-button
            type="primary"
            size="small"
            :custom-style="{
              background: 'linear-gradient(90deg, #6F8EFF 0%, #4731FF 100%)',
              boxShadow: '0px 8px 8px 0px rgba(66, 106, 255, 0.16);'
            }"
          >
            小按钮
          </pi-button>
          <pi-button
            type="primary"
            size="tiny"
            :custom-style="{
              background: 'linear-gradient(90deg, #6F8EFF 0%, #4731FF 100%)',
              boxShadow: '0px 8px 8px 0px rgba(66, 106, 255, 0.16);'
            }"
          >
            超小按钮
          </pi-button>
          <pi-button
            type="primary"
            size="mini"
            :custom-style="{
              background: 'linear-gradient(90deg, #6F8EFF 0%, #4731FF 100%)',
              boxShadow: '0px 8px 8px 0px rgba(66, 106, 255, 0.16);'
            }"
          >
            迷你按钮
          </pi-button>
        </template>
      </pi-card>
      <!-- 按钮宽度 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="按钮宽度" />
        <template slot="body">
          <pi-button type="line" width="100%" custom-class="pi-mg-bottom-8">
            100%
          </pi-button>
          <pi-button type="secondary" width="300">300px</pi-button>
          <pi-button type="primary" width="50%" custom-class="pi-mg-bottom-8">
            50%
          </pi-button>
          <pi-button type="secondary" width="225">225px</pi-button>
        </template>
      </pi-card>
      <!-- 加载中按钮 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="加载中按钮" />
        <template slot="body">
          <pi-button type="primary" size="large" loading>大按钮</pi-button>
          <pi-button type="secondary" size="default" loading>普通按钮</pi-button>
          <pi-button type="warn" size="medium" loading>中按钮</pi-button>
          <pi-button type="line" size="small" loading>小按钮</pi-button>
          <pi-button type="primary" size="tiny" loading>超小按钮</pi-button>
          <pi-button type="primary" size="mini" loading>迷你按钮</pi-button>
        </template>
      </pi-card>
      <!-- 自定义样式 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="自定义样式" />
        <template slot="body">
          <pi-button color="#ffffff" bg-color="#ff508a" custom-class="pi-mg-top-12" round>
            <pi-icon name="check" />
            <text class="pi-mg-left-12">带勾选按钮</text>
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
              <view class="pi-lh-1 pi-fz-24">副文本</view>
            </view>
          </pi-button>
        </template>
      </pi-card>
    </scroll-view>
    <!-- 吸底按钮 -->
    <pi-bottom-bar>
      <pi-button width="100%" type="primary" size="medium" round>
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
