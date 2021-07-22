<template>
  <view class="pi-scroll-container">
    <pi-navbar title="loading" />
    <scroll-view class="pi-scroll" scroll-y>
      <pi-card>
        <pi-section slot="title" title="基础用法" />
        <template slot="body">
          <view class="pi-justify-around">
            <pi-loading show>示例1</pi-loading>
            <pi-loading show vertical>示例2</pi-loading>
          </view>
        </template>
      </pi-card>

      <pi-card>
        <pi-section slot="title" title="图标类型" />
        <template slot="body">
          <view class="pi-justify-around">
            <pi-loading show type="spinner">示例3</pi-loading>
            <pi-loading show type="round">示例4</pi-loading>
          </view>
        </template>
      </pi-card>

      <pi-card>
        <pi-section slot="title" title="图标样式" />
        <template slot="body">
          <view class="pi-justify-around pi-align-center">
            <pi-loading show type="round">示例5</pi-loading>
            <pi-loading show type="round" color="#ff508a">示例6</pi-loading>
            <pi-loading show type="round" color="#ff508a" size="50">示例7</pi-loading>
          </view>
        </template>
      </pi-card>

      <pi-card>
        <pi-section slot="title" title="图标样式" />
        <template slot="body">
          <view class="pi-justify-around pi-align-center">
            <pi-loading show type="round" text-size="24">示例8</pi-loading>
            <pi-loading show type="round" color="#ff508a" text-size="36">示例9</pi-loading>
            <pi-loading
              show
              type="round"
              color="#ff508a"
              text-size="24"
              :text-style="{ color: 'red', fontWeight: '700', fontSize: '48rpx' }"
            >
              示例10
            </pi-loading>
          </view>
        </template>
      </pi-card>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Loading'
}
</script>
