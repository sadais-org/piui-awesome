<template>
  <view class="pi-scroll-container">
    <pi-navbar title="图片裁剪" />
    <scroll-view class="pi-scroll" scroll-y>
      <pi-card>
        <pi-section slot="title">基础用法</pi-section>
        <template slot="body">
          <pi-img-cropper :custom-style="cropper" :src="src" @cropped="handleCropped" />
          <view class="pi-mg-top-32">
            <text>裁剪结果：</text>
            <pi-img :src="cropImg" :custom-style="cropSize" />
          </view>
        </template>
      </pi-card>
      <pi-card>
        <pi-section slot="title">指定裁剪大小:100px*100px</pi-section>
        <template slot="body">
          <pi-img-cropper
            :keep-crop-ratio="true"
            :custom-style="cropper"
            :crop-size="customCropSize"
            :src="src"
            @cropped="handleCropped1"
          />
          <view class="pi-mg-top-32">
            <text>裁剪结果：</text>
            <pi-img :src="cropImg1" :custom-style="customCropSize" />
          </view>
        </template>
      </pi-card>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Img',
  data() {
    return {
      src: 'https://img2.baidu.com/it/u=2305475115,3097445479&fm=26&fmt=auto',
      result: null,
      result1: null,
      customCropSize: { width: '100px', height: '100px' }
    }
  },
  computed: {
    cropper() {
      return {
        width: '100%',
        height: '400rpx'
      }
    },
    cropSize() {
      const { width = 0, height = 0 } = this.result || {}
      return {
        width: `${width}px`,
        height: `${height}px`
      }
    },
    cropImg() {
      return (this.result && this.result.img) || ''
    },
    cropImg1() {
      return (this.result1 && this.result1.img) || ''
    }
  },
  methods: {
    handleCropped(res) {
      this.result = res
    },
    handleCropped1(res) {
      this.result1 = res
    }
  }
}
</script>
