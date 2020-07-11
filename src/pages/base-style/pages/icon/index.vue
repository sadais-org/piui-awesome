<template>
  <view class="pi-container">
    <image class="logo" src="/static/logo.png" />
    <view class="pi-grid-6 border">
      <view v-for="i in 12" :key="i">
        <view class=" pi-square">
          <view class="pi-flex-column-center">{{ i }}</view>
        </view>
      </view>
    </view>
    <view class="pi-fixed-bottom pd-bottom-20">
      <text class="pi-fz-20">{{ title }}</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello4'
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
