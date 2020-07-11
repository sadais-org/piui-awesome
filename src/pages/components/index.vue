<template>
  <view class="pi-container">
    <image class="logo" src="/static/logo.png" />
    <view>
      <text class="title">{{ title }}</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello2'
    }
  },
  onLoad() {},
  methods: {}
}
</script>

<style>
.content {
  height: 400rpx;
  text-align: center;
}

.logo {
  width: 200rpx;
  height: 200rpx;
  margin-top: 200rpx;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
