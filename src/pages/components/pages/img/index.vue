<template>
  <view class="pi-scroll-container">
    <pi-navbar title="图片" />
    <scroll-view class="pi-scroll" scroll-y>
      <view class="pi-content">
        <pi-section>默认图片</pi-section>
        <pi-img width="220" height="120" :custom-style="{ background: '#cccccc' }" :src="imgsrc" />
        <pi-section>自动撑高</pi-section>
        <pi-img
          dot
          width="220"
          mode="widthFix"
          :custom-style="{ background: '#cccccc' }"
          :src="imgsrc"
        />
        <pi-section>红点</pi-section>
        <pi-img
          dot
          width="220"
          height="120"
          :custom-style="{ background: '#cccccc' }"
          :src="imgsrc"
        />
        <pi-section>5</pi-section>
        <pi-img
          width="220"
          height="120"
          :custom-style="{ background: '#cccccc' }"
          badge="5"
          :src="imgsrc"
        />
        <pi-section>99+</pi-section>
        <pi-img
          width="220"
          height="120"
          :custom-style="{ background: '#cccccc' }"
          badge="99+"
          :src="imgsrc"
        />
        <pi-section>加载失败</pi-section>
        <pi-img width="220" height="120" :custom-style="{ background: '#cccccc' }" src="error" />
        <pi-section>不传src</pi-section>
        <pi-img width="220" height="120" :custom-style="{ background: '#cccccc' }" />
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Img',
  data() {
    return {
      imgsrc: require('./x.jpg')
    }
  }
}
</script>
