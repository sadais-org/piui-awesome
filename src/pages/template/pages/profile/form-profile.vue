<template>
  <view class="pi-scroll-container" style="background: #f5f5f5;">
    <pi-navbar>
      个人中心
    </pi-navbar>
    <scroll-view scroll-y class="pi-scroll">
      <view class="header">
        <view
          class="pi-abso-left-center pi-align-center pi-pd-32"
          style="transform: translateY(-80%);"
        >
          <pi-img
            width="106rpx"
            height="106rpx"
            :src="userInfo.avatar"
            class="pi-avatar pi-bg-fifth"
            shape="round"
          />
          <view class=" pi-flex-sub pi-white pi-mg-left-12">
            <view class="pi-fz-36 pi-fw-500 pi-mg-top-6">
              昵称
            </view>
            <view class="pi-mg-top-6">
              身份
            </view>
          </view>
        </view>
      </view>
      <pi-card style="margin-top: -80rpx;">
        <view slot="body" class="pi-align-center">
          <view class="pi-flex-sub pi-text-center">
            <view class="pi-fz-40">￥12</view>
            <view class="pi-fz-28 pi-mg-top-12" :style="{ color: '#999999' }">余额</view>
          </view>
          <view :style="{ width: '1rpx', height: '97rpx', background: '#D8D8D8' }" />
          <view class="pi-flex-sub pi-text-center">
            <view class="pi-fz-40">120</view>
            <view class="pi-fz-28 pi-mg-top-12" :style="{ color: '#999999' }">积分</view>
          </view>
        </view>
      </pi-card>

      <pi-card padding="0">
        <view slot="body">
          <pi-list>
            <pi-list-item title="订单记录">
              <pi-icon slot="left" name="order1" size="50" custom-class="pi-primary" />
            </pi-list-item>
            <pi-list-item title="我的">
              <pi-icon slot="left" name="mine" size="50" custom-class="pi-primary" />
            </pi-list-item>
            <pi-list-item title="个人信息">
              <pi-icon slot="left" name="form" size="50" custom-class="pi-primary" />
            </pi-list-item>
            <pi-list-item title="系统设置">
              <pi-icon slot="left" name="setup-fill" size="50" custom-class="pi-primary" />
            </pi-list-item>
          </pi-list>
        </view>
      </pi-card>
    </scroll-view>
    <pi-bottom-bar border-top="none">
      <pi-button
        custom-class="pi-fz-28 pi-fw-400 "
        type="secondary"
        size="large"
        width="100%"
        round
      >
        退出登录
      </pi-button>
    </pi-bottom-bar>
  </view>
</template>

<script>
const TAG_NAME = 'Profile'

export default {
  name: TAG_NAME,
  data() {
    return {
      userInfo: {
        avatar: '#'
      }
    }
  },

  async onShow() {
    // 因为授权调用了uni.hideTabBar()，防止用户授权时候关闭小程序，下一次进入就不会显示tabbar了
    uni.showTabBar()
  },
  methods: {
    handleMenuClick(path) {
      if (!path) return
      this.$pi.navi.navigateTo(path)
    }
  }
}
</script>

<style lang="scss" scoped>
.pi-scroll {
  .header {
    position: relative;
    height: 379rpx;
    background: $pi-primary-color;
  }
}
</style>
