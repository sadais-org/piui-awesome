<template>
  <view class="pi-scroll-container">
    <pi-navbar>标题栏</pi-navbar>
    <pi-card title="我的" />
    <pi-card>
      <pi-section slot="title" title="图标颜色" />
      <template slot="body">
        <view class="pi-justify-around">
          <pi-icon name="message-copy" color="red" size="16" />
          <pi-icon name="bars" color="green" size="32" />
          <pi-icon name="edit-line" color="blue" size="48" />
          <pi-icon name="add" color="black" size="64" />
        </view>
      </template>
    </pi-card>
    <view class="pi-scroll pi-align-stretch pi-pd-left-24 pi-white ">
      <view style="width: 200rpx;" class="pi-flex-column-center pi-bg-primary ">左侧</view>
      <scroll-view scroll-y class="pi-scroll">
        <pi-card v-for="item in 99" :key="item" :title="item + '. 标题'">{{ item }}</pi-card>
      </scroll-view>
    </view>
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
