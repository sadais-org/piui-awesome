<template>
  <view class="pi-scroll-container">
    <pi-navbar title="loading" />
    <scroll-view class="pi-scroll" scroll-y="">
      <view class="pi-content">
        <pi-section title="大小设置" />
        <pi-loading show size="50" />
        <pi-loading show size="38" />
        <pi-loading show>加载中</pi-loading>
        <pi-section title="颜色设置" />
        <pi-loading show size="50" color="#ff508a" />
        <pi-loading show size="38" color="#c1c1c1" />
        <pi-loading show>加载中</pi-loading>
        <pi-section title="样式设置" />
        <pi-loading show color="#c1c1c1" type="round" />
        <pi-loading show color="#c1c1c1" />
        <pi-loading show color="#ff508a" type="round" />
        <pi-loading show color="#ff508a" type="round">加载中</pi-loading>
        <pi-section title="垂直布局" />
        <pi-loading show type="round" vertical>加载中</pi-loading>
        <pi-section title="文字大小设置" />
        <pi-loading show size="38" text-size="38" type="round" vertical>加载中</pi-loading>
        <pi-section title="文字样式设置" />
        <pi-loading
          show
          size="38"
          :text-style="{ color: 'red', fontSize: '48rpx', fontWeight: 600 }"
          type="round"
          vertical
        >
          加载中
        </pi-loading>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Loading'
}
</script>
