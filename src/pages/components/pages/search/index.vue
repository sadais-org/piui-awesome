<template>
  <view class="pi-scroll-container">
    <pi-navbar title="搜索框" />
    <scroll-view class="pi-scroll" scroll-y="">
      <view class="pi-content">
        <pi-section>默认搜索框</pi-section>
        <pi-search v-model="demo1" />
        <pi-section>禁用搜索框</pi-section>
        <pi-search disabled />
        <pi-section>方形搜索框</pi-section>
        <pi-search v-model="demo3" shape="square" />
        <pi-section>自定义search-icon样式</pi-section>
        <pi-search v-model="demo2" :search-icon-style="{ fontSize: '50rpx' }" />
        <pi-section>搜索按钮放在右边</pi-section>
        <pi-search v-model="demo6" shape="square" search-icon-position="right" />
        <pi-section>设置搜索框左侧文本</pi-section>
        <pi-search
          v-model="demo4"
          search-label="珠海"
          :search-label-style="{ color: '#ff508a', fontSize: '36rpx' }"
        />
        <pi-section>显示搜索action</pi-section>
        <pi-search v-model="demo5" clear-trigger="focus" show-action action-text="确定" />
        <pi-section>设置搜索框背景颜色</pi-section>
        <pi-search
          v-model="demo7"
          search-label="PIUI"
          :search-label-style="{ color: '#ff508a' }"
          search-icon-color="#ffffff"
          show-action
          background="#e5e5e5"
          color="#ff508a"
          action-text="搜索"
          placeholder="提示文字"
          placeholder-style="color: #ffffff"
          @focus="handleClean"
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
  },
  methods: {
    handleClean() {
      this.demo7 = ''
    }
  }
}
</script>

<style>
.pi-w-100P {
  margin-bottom: 8px;
}
</style>
