<template>
  <view class="pi-scroll-container">
    <pi-navbar title="swiper" />
    <scroll-view class="pi-scroll" scroll-y="">
      <view class="pi-content">
        <pi-section title="自动撑高" desc="height: 'auto'" />
        <pi-swiper :imgs="demo1.imgs" />
        <pi-section title="定高,开启3d效果" />
        <pi-swiper height="400" img-mode="aspectFill" :imgs="demo2.imgs" effect3d />
        <pi-section title="指示器为圆点，位置在中间" />
        <pi-swiper
          height="400"
          img-mode="aspectFill"
          indicator-type="dot"
          indicator-position="bc"
          indicator-active-color="red"
          :imgs="demo2.imgs"
        />
        <pi-section title="指示器为矩形，位置在顶部" />
        <pi-swiper
          height="400"
          img-mode="aspectFill"
          indicator-type="rect"
          indicator-position="tc"
          :imgs="demo2.imgs"
        />
        <pi-section title="指示器为矩形" />
        <pi-swiper height="400" img-mode="aspectFill" indicator-type="rect" :imgs="demo2.imgs" />
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Swiper',
  data() {
    return {
      demo1: {
        imgs: [
          'https://images3.alphacoders.com/813/thumb-350-81317.jpg',
          'https://images4.alphacoders.com/441/thumb-350-44158.jpg',
          'https://images5.alphacoders.com/489/thumb-350-489030.jpg'
        ]
      },
      demo2: {
        imgs: [
          'https://images3.alphacoders.com/813/thumb-350-81317.jpg',
          'https://images4.alphacoders.com/441/thumb-350-44158.jpg',
          'https://images5.alphacoders.com/489/thumb-350-489030.jpg'
        ]
      }
    }
  }
}
</script>
