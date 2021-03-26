<template>
  <view class="pi-scroll-container" style="background: #f5f5f5;">
    <pi-navbar status-bar-background="white" :border-bottom="false">
      <view slot="left" class="pi-black pi-pd-left-32 pi-fz-34 pi-lh-34 pi-fw-500 pi-align-center">
        <pi-img class="pi-mg-right-12" width="86rpx" height="50rpx" src="#" />
        个人中心
      </view>
    </pi-navbar>
    <scroll-view scroll-y class="pi-scroll">
      <view class="header">
        <pi-img
          width="106rpx"
          height="106rpx"
          :style="{ position: 'absolute', left: '38rpx', top: '72rpx' }"
          :src="userInfo.avatar"
          class="user-avatar"
          shape="round"
        />
        <view
          class="pi-fz-36 pi-white"
          :style="{ position: 'absolute', top: '87rpx', left: '168rpx' }"
        >
          昵称
        </view>
        <view
          class="pi-fz-28 "
          :style="{
            position: 'absolute',
            top: '135rpx',
            left: '168rpx',
            color: '#D9FEFEFE',
            fontWeight: 400
          }"
        >
          身份
        </view>
        <pi-img style="position: absolute; bottom: 0;" width="101%" height="74rpx" src="#" />
        <pi-img
          mode="scaleToFill"
          width="95rpx"
          height="104rpx"
          src="#"
          style="position: absolute; bottom: 50rpx;"
        />
      </view>
      <view class="card pi-align-center">
        <view
          class="pi-flex-sub pi-text-center"
          @tap.stop="handleMenuClick('pages/profile/pages/balance-detail/index')"
        >
          <view class="pi-fz-40">￥12</view>
          <view class="pi-fz-28 pi-mg-top-12" :style="{ color: '#999999' }">余额</view>
        </view>
        <view :style="{ width: '1rpx', height: '97rpx', background: '#D8D8D8' }" />
        <view
          class="pi-flex-sub pi-text-center"
          @tap.stop="handleMenuClick('pages/profile/pages/integral-detail/index')"
        >
          <view class="pi-fz-40">120</view>
          <view class="pi-fz-28 pi-mg-top-12" :style="{ color: '#999999' }">积分</view>
        </view>
      </view>

      <view class="card-list pi-mg-top-24 pi-pd-bottom-24">
        <view class="pi-align-center pi-pd-left-28">
          <pi-img width="21rpx" height="27rpx" src="#" />
          <view
            class="pi-mg-left-16 pi-fz-28 pi-fw-500 pi-lh-40 pi-flex-sub pi-pd-right-16"
            :style="{ color: '#333333' }"
          >
            珠海市前山左右创意园2栋2楼40
          </view>
        </view>

        <view class="pi-justify-end pi-solid-bottom-2 pi-pd-bottom-24 pi-mg-bottom-24">
          <pi-button
            class="pi-white pi-fz-24 pi-fw-400 pi-mg-top-16 pi-mg-right-32"
            type="primary"
            size="small"
            :round="true"
          >
            切换地址
          </pi-button>
        </view>

        <pi-list-item
          v-for="adminMenuItem in ADMIN_MENUS"
          :key="adminMenuItem.name"
          :title="adminMenuItem.name"
          :border="false"
          @click="handleMenuClick(adminMenuItem.path)"
        >
          <pi-img slot="left" width="48rpx" height="48rpx" src="#" />
        </pi-list-item>
      </view>

      <view class="card-list pi-pd-tb-24 pi-mg-tb-24">
        <pi-list-item
          v-for="userMenuItem in USER_MENUS"
          :key="userMenuItem.name"
          :title="userMenuItem.name"
          :border="false"
          @click="handleMenuClick(userMenuItem.path)"
        >
          <pi-img slot="left" width="48rpx" height="48rpx" src="#" />
        </pi-list-item>
      </view>

      <view class="pi-pd-lr-32 pi-pd-bottom-24">
        <pi-button
          custom-class="pi-fz-28 pi-fw-400 pi-mg-top-24 pi-mg-bottom-72"
          type="secondary"
          size="large"
          bg-color="rgba(205, 52, 2, 0.1)"
          width="100%"
          :round="true"
        >
          退出登录
        </pi-button>
      </view>
    </scroll-view>
  </view>
</template>

<script>
const TAG_NAME = 'Profile'
const ADMIN_MENUS = [
  { icon: '', name: '菜单栏A', path: '' },
  { icon: '', name: '菜单栏B', path: '' },
  { icon: '', name: '菜单栏C', path: '' },
  { icon: '', name: '菜单栏D', path: '' },
  { icon: '', name: '菜单栏E', path: '' }
]

const USER_MENUS = [
  { icon: '', name: '菜单栏F', path: '' },
  { icon: '', name: '菜单栏G', path: '' },
  { icon: '', name: '菜单栏H', path: '' },
  { icon: '', name: '菜单栏I', path: '' }
]
export default {
  name: TAG_NAME,
  data() {
    return {
      ADMIN_MENUS,
      USER_MENUS,
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
    background-image: linear-gradient(133deg, #cd3402 0%, #cb2600 100%);
  }

  .user-avatar {
    width: 105rpx;
    height: 105rpx;
    background: #ffffff;
    border: 2rpx solid rgba(249, 196, 142, 0.8);
    border-radius: 50%;
  }

  .card {
    position: relative;
    height: 177rpx;
    // margin-top: -220rpx;
    margin: -120rpx 32rpx 0 32rpx;
    background: #fefefe;
    border-radius: 12px;
  }

  .card-list {
    position: relative;
    z-index: 2;
    padding-top: 24rpx;
    padding-bottom: 24rpx;
    margin-right: 32rpx;
    margin-left: 32rpx;
    background: #fefefe;
    border-radius: 12px;
  }
}
</style>
