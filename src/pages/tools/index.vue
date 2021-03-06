<template>
  <view class="pi-container">
    <pi-button type="primary" @click="handleGetDeviceInfo">获取设备信息</pi-button>
    <pi-button type="primary" @click="handleChooseImage">
      选择图片
    </pi-button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: '工具类'
    }
  },
  onLoad() {},
  methods: {
    async handleGetDeviceInfo() {
      const systemInfo = await this.$pi.native.getSystemInfo()
      console.log('获取系统信息', systemInfo)
    },
    handleChooseImage() {
      this.$uni.chooseImage({
        count: 2,
        success: function(res) {
          console.log(res)
        }
      })
    }
  }
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
