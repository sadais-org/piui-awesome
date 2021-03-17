<template>
  <view class="pi-scroll-container">
    <pi-navbar title="底部按钮栏" />
    <scroll-view class="pi-scroll" scroll-y>
      <view class="body">
        <view v-for="item in 99" :key="item">{{ item }}</view>
      </view>
    </scroll-view>
    <pi-bottom-bar>
      <pi-button width="100%">确认</pi-button>
    </pi-bottom-bar>
  </view>
</template>

<script>
export default {
  name: 'BottomBar'
}
</script>

<style lang="scss" scoped></style>
