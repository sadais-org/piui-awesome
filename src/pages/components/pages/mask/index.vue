<template>
  <view class="pi-scroll-container">
    <pi-navbar title="mask蒙层" />
    <scroll-view class="pi-scroll" scroll-y>
      <view class="pi-content">
        <pi-button type="primary" @tap="showMask = true">默认（点击渐入）</pi-button>
        <pi-section>显示时执行的动画</pi-section>
        <pi-button type="primary" @tap="showSlideTopMask = true">向下滑入</pi-button>
        <pi-button type="primary" @tap="showSlideBottomMask = true">向上滑入</pi-button>
        <pi-button type="primary" @tap="showSlideRightMask = true">向左滑入</pi-button>
        <pi-button type="primary" @tap="showSlideLeftMask = true">向右滑入</pi-button>
        <pi-section>隐藏时执行的动画</pi-section>
        <pi-button type="primary" @tap="hideSlideTopMask = true">向上滑出</pi-button>
        <pi-button type="primary" @tap="hideSlideBottomMask = true">向下滑出</pi-button>
        <pi-button type="primary" @tap="hideSlideLeftMask = true">向左滑出</pi-button>
        <pi-button type="primary" @tap="hideSlideRightMask = true">向右滑出</pi-button>
        <pi-section>不可点击遮罩层关闭</pi-section>
        <pi-button type="primary" width="200px" @tap="showClosableMask = true">
          不可点击遮罩层关闭
        </pi-button>
      </view>
    </scroll-view>
    <!-- 0. 默认样式（渐入） -->
    <!-- duration格式：'0.56s' 、'560ms' 、'560'、数字560 -->
    <pi-mask
      v-model="showMask"
      append-to-body
      duration="0.56s"
      background="rgba(0, 0, 0, .8)"
      @closed="showMask = false"
    >
      <!-- 显示蒙层内容 -->
      <view class="pi-abso-center">
        <view class="pi-square pi-w-100 pi-bg-white">
          <view class="pi-flex-column-center">点击实现渐出</view>
        </view>
      </view>
    </pi-mask>

    <!-- 一、 遮罩层显示时执行的动画 -->
    <!-- 1. 向下滑入 -->
    <pi-mask
      v-model="showSlideTopMask"
      append-to-body
      duration="900"
      background="rgba(0, 0, 0, .8)"
      animation-show="pi-ani-slide-top-show"
    >
      <!-- 显示蒙层内容 -->
      <view class="pi-abso-center">
        <view class="pi-square pi-w-100 pi-bg-white">
          <view class="pi-flex-column-center">向下滑入动画</view>
        </view>
      </view>
    </pi-mask>
    <!-- 2. 向上滑入 -->
    <pi-mask
      v-model="showSlideBottomMask"
      append-to-body
      duration="900"
      background="rgba(0, 0, 0, .8)"
      animation-show="pi-ani-slide-bottom-show"
    >
      <!-- 显示蒙层内容 -->
      <view class="pi-abso-center">
        <view class="pi-square pi-w-100 pi-bg-white">
          <view class="pi-flex-column-center">向上滑入动画</view>
        </view>
      </view>
    </pi-mask>
    <!-- 3. 向左滑入 -->
    <pi-mask
      v-model="showSlideRightMask"
      append-to-body
      duration="900"
      background="rgba(0, 0, 0, .8)"
      animation-show="pi-ani-slide-right-show"
    >
      <!-- 显示蒙层内容 -->
      <view class="pi-abso-center">
        <view class="pi-square pi-w-100 pi-bg-white">
          <view class="pi-flex-column-center">向左滑入动画</view>
        </view>
      </view>
    </pi-mask>
    <!-- 4. 向右滑入 -->
    <pi-mask
      v-model="showSlideLeftMask"
      append-to-body
      duration="900"
      background="rgba(0, 0, 0, .8)"
      animation-show="pi-ani-slide-left-show"
    >
      <!-- 显示蒙层内容 -->
      <view class="pi-abso-center">
        <view class="pi-square pi-w-100 pi-bg-white">
          <view class="pi-flex-column-center">向右滑入动画</view>
        </view>
      </view>
    </pi-mask>

    <!-- 二、 遮罩层隐藏时执行的动画 -->
    <!-- 1. 向上滑出 -->
    <pi-mask
      v-model="hideSlideTopMask"
      append-to-body
      duration="900"
      background="rgba(0, 0, 0, .8)"
      animation-show="false"
      animation-hide="pi-ani-slide-top-hide"
    >
      <!-- 显示蒙层内容 -->
      <view class="pi-abso-center">
        <view class="pi-square pi-w-100 pi-bg-white">
          <view class="pi-flex-column-center">点击向上滑出</view>
        </view>
      </view>
    </pi-mask>
    <!-- 2. 向下滑出 -->
    <pi-mask
      v-model="hideSlideBottomMask"
      append-to-body
      duration="900"
      background="rgba(0, 0, 0, .8)"
      animation-show="false"
      animation-hide="pi-ani-slide-bottom-hide"
    >
      <!-- 显示蒙层内容 -->
      <view class="pi-abso-center">
        <view class="pi-square pi-w-100 pi-bg-white">
          <view class="pi-flex-column-center">点击向下滑出</view>
        </view>
      </view>
    </pi-mask>
    <!-- 3. 向左滑出 -->
    <pi-mask
      v-model="hideSlideLeftMask"
      append-to-body
      duration="900"
      background="rgba(0, 0, 0, .8)"
      animation-show="false"
      animation-hide="pi-ani-slide-left-hide"
    >
      <!-- 显示蒙层内容 -->
      <view class="pi-abso-center">
        <view class="pi-square pi-w-100 pi-bg-white">
          <view class="pi-flex-column-center">点击向左滑出</view>
        </view>
      </view>
    </pi-mask>
    <!-- 4. 向右滑出 -->
    <pi-mask
      v-model="hideSlideRightMask"
      append-to-body
      duration="900"
      background="rgba(0, 0, 0, .8)"
      animation-show="false"
      animation-hide="pi-ani-slide-right-hide"
    >
      <!-- 显示蒙层内容 -->
      <view class="pi-abso-center">
        <view class="pi-square pi-w-100 pi-bg-white">
          <view class="pi-flex-column-center">点击向右滑出</view>
        </view>
      </view>
    </pi-mask>
    <!-- 三、不可点击遮罩层关闭的蒙层 -->
    <pi-mask
      v-model="showClosableMask"
      append-to-body
      duration="900"
      background="rgba(0, 0, 0, .8)"
      :mask-closable="false"
      animation-hide="pi-ani-slide-right-hide"
    >
      <view class="pi-abso-center" @tap="showClosableMask = false">
        <view class="pi-square pi-w-100 pi-bg-white">
          <view class="pi-flex-column-center">点击此处关闭</view>
        </view>
      </view>
    </pi-mask>
  </view>
</template>

<script>
export default {
  name: 'MaskPage',
  data() {
    return {
      // 显示蒙层时执行的动画
      showMask: false,
      showSlideTopMask: false,
      showSlideBottomMask: false,
      showSlideRightMask: false,
      showSlideLeftMask: false,
      showClosableMask: false,
      // 隐藏蒙层时执行的动画
      hideSlideTopMask: false,
      hideSlideBottomMask: false,
      hideSlideLeftMask: false,
      hideSlideRightMask: false
    }
  }
}
</script>

<style>
.pi-button {
  display: block;
  width: 380rpx;
  margin-top: 5rpx;
}
</style>
