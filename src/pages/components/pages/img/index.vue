<template>
  <view class="pi-scroll-container">
    <pi-navbar title="图片" />
    <scroll-view class="pi-scroll" scroll-y>
      <view class="pi-content">
        <pi-img
          width="220"
          height="120"
          :custom-style="{ background: '#cccccc' }"
          src="http://img5.imgtn.bdimg.com/it/u=2438062088,2808868405&fm=26&gp=0.jpg"
        />
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Img'
}
</script>
