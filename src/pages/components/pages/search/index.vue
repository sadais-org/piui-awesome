<template>
  <view class="pi-scroll-container">
    <pi-navbar title="搜索框" />
    <scroll-view class="pi-scroll" scroll-y="">
      <view class="pi-content">
        <pi-section>默认搜索框</pi-section>
        <pi-search v-model="demo1" />
        <pi-section>自定义搜索icon样式</pi-section>
        <pi-search v-model="demo1" :search-icon-style="{ fontSize: '50rpx' }" />
        <pi-section>方形搜索框</pi-section>
        <pi-search v-model="demo2" shape="square" />
        <pi-section>设置searchLabel</pi-section>
        <pi-search
          v-model="demo3"
          search-label="珠海"
          :search-label-style="{ color: '#ff508a', fontSize: '36rpx' }"
        />
        <pi-section>显示搜索action</pi-section>
        <pi-search v-model="demo5" clear-trigger="focus" show-action action-text="确定" />
        <pi-section>搜索按钮放在右边</pi-section>
        <pi-search
          v-model="demo6"
          shape="square"
          search-icon-position="right"
          clear-trigger="focus"
        />
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      demo1: '',
      demo2: '',
      demo3: '',
      demo4: '',
      demo5: '',
      demo6: '',
      demo7: '',
      demo8: '',
      demo9: '',
      demo10: '',
      demo11: '',
      demo12: '',
      demo13: ''
    }
  }
}
</script>
