<template>
  <view class="pi-scroll-container">
    <pi-navbar title="搜索框" />
    <scroll-view class="pi-scroll" scroll-y="">
      <view class="pi-content">
        <pi-button>测试</pi-button>
        <pi-button disabled>测试disabled</pi-button>
        <pi-button type="primary" size="mini">测试（size=mini）</pi-button>
        <pi-button type="primary" size="medium">测试（size=medium）</pi-button>
        <pi-button type="primary">测试（type=primary）</pi-button>
        <pi-button type="primary" disabled>测试（disabled）</pi-button>
        <pi-button plain>镂空</pi-button>
        <pi-button type="primary" round>测试（type=primary）</pi-button>
        <pi-button plain round>镂空</pi-button>
        <pi-button plain round>镂空loading</pi-button>
        <pi-button type="primary" round>loading</pi-button>
        <pi-button
          type="primary"
          round
          :custom-style="{ height: '54rpx', lineHeight: '54rpx', fontSize: '22rpx' }"
        >
          自定义样式（type=primary）
        </pi-button>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Button'
}
</script>
