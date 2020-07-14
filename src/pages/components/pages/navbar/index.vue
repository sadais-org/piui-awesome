<template>
  <view class="pi-scroll-container">
    <pi-navbar title="自定义导航栏" />
    <scroll-view class="pi-scroll" scroll-y="">
      <pi-navbar title="取消fixed" :fixed="false" />
      <pi-navbar back-icon-name="barrage" :fixed="false">自定义图标</pi-navbar>
      <pi-navbar back-icon-name="barrage" back-text="笔芯" :fixed="false">
        自定义返回名称
      </pi-navbar>
      <pi-navbar
        back-icon-name="barrage"
        back-text="笔芯"
        background="linear-gradient(to right, #c0c0aa, #1cefff)"
        :fixed="false"
      >
        自定义背景色
      </pi-navbar>
      <pi-navbar
        back-icon-name="barrage"
        back-text="笔芯"
        background="linear-gradient(to top, #200122, #6f0000)"
        back-icon-color="#ffffff"
        :back-text-style="{ color: '#ffffff' }"
        title="自定义导航文字"
        :title-style="{ fontSize: '48rpx', fontWeight: 500, color: '#ffffff' }"
        :fixed="false"
      />
      <pi-navbar :fixed="false">
        <view>default slot</view>
      </pi-navbar>
      <pi-navbar :fixed="false">
        <view slot="right" class=" pi-pd-right-24">slot right</view>
      </pi-navbar>
    </scroll-view>
  </view>
</template>

<script>
export default {}
</script>

<style></style>
