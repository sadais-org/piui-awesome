<template>
  <view class="pi-scroll-container">
    <pi-navbar title="按钮" />
    <scroll-view class="pi-scroll" scroll-y>
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
        <pi-button plain round loading>镂空loading</pi-button>
        <pi-button type="primary" round loading>loading</pi-button>
        <pi-button
          type="primary"
          round
          :custom-style="{ height: '54rpx', lineHeight: '54rpx', fontSize: '22rpx' }"
        >
          自定义样式style（type=primary）
        </pi-button>
        <pi-button type="primary" round custom-class="pi-mg-top-12">
          自定义样式class（type=primary）
        </pi-button>
        <pi-button color="#ffffff" bg-color="#ff508a" custom-class="pi-mg-top-12" round>
          自定义style
        </pi-button>
        <pi-button color="#ffffff" bg-color="#ff508a" custom-class="pi-mg-top-12" round loading>
          自定义style loading
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
