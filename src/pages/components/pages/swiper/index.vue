<template>
  <view class="pi-scroll-container">
    <pi-navbar title="swiper" />
    <scroll-view class="pi-scroll" scroll-y="">
      <!-- 基础用法 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="基础用法" />
        <template slot="body">
          <pi-swiper :imgs="demo1.imgs" />
        </template>
      </pi-card>
      <!-- 固定高度 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="固定高度" desc="height: 400" />
        <template slot="body">
          <pi-swiper height="400" img-mode="aspectFill" :imgs="demo2.imgs" />
        </template>
      </pi-card>
      <!-- 3d效果 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="3d效果" desc="effect3d" />
        <template slot="body">
          <pi-swiper height="400" img-mode="aspectFill" :imgs="demo2.imgs" effect3d />
        </template>
      </pi-card>
      <!-- 圆点指示器 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="圆点指示器" desc="indicator-type: dot" />
        <template slot="body">
          <pi-swiper
            height="400"
            img-mode="aspectFill"
            indicator-type="dot"
            indicator-position="bc"
            indicator-active-color="red"
            :imgs="demo2.imgs"
          />
        </template>
      </pi-card>
      <!-- 矩形指示器 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="矩形指示器" desc="indicator-type: rect" />
        <template slot="body">
          <pi-swiper
            height="400"
            img-mode="aspectFill"
            indicator-type="rect"
            indicator-position="tc"
            :imgs="demo2.imgs"
          />
        </template>
      </pi-card>
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
      },
      demo3: {
        imgs: [
          { pic: 'https://picfiles.alphacoders.com/430/thumb-430814.jpg' },
          { pic: 'https://picfiles.alphacoders.com/425/thumb-425129.jpg' },
          { pic: 'https://picfiles.alphacoders.com/424/thumb-424428.jpg' }
        ]
      }
    }
  }
}
</script>
