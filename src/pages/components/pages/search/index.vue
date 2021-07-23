<template>
  <view class="pi-scroll-container">
    <pi-navbar title="搜索框" />
    <scroll-view class="pi-scroll" scroll-y="">
      <pi-card>
        <pi-section slot="title">基础用法</pi-section>
        <template slot="body">
          <pi-search v-model="demo1" />
        </template>
      </pi-card>

      <pi-card>
        <pi-section slot="title">自定义Icon</pi-section>
        <template slot="body">
          <pi-search v-model="demo2" />
          <pi-search v-model="demo2" :search-icon-style="{ fontSize: '50rpx' }" />
          <pi-search
            v-model="demo2"
            search-icon="camera"
            :search-icon-style="{ fontSize: '50rpx', color: 'blue' }"
          />
          <pi-search
            v-model="demo2"
            search-icon="camera"
            search-icon-position="right"
            :search-icon-style="{ fontSize: '50rpx', color: 'blue' }"
          />
        </template>
      </pi-card>

      <pi-card>
        <pi-section slot="title">左侧文本</pi-section>
        <template slot="body">
          <pi-search v-model="demo3" search-label="珠海" />
          <pi-search
            v-model="demo3"
            search-label="珠海"
            :search-label-style="{ color: '#ff508a' }"
          />
          <pi-search
            v-model="demo3"
            search-label="珠海"
            search-icon-position="right"
            :search-icon-style="{ fontSize: '50rpx', color: 'blue' }"
            :search-label-style="{ color: '#ff508a', fontSize: '36rpx' }"
          />
        </template>
      </pi-card>

      <pi-card>
        <pi-section slot="title">右侧文本</pi-section>
        <template slot="body">
          <pi-search v-model="demo4" action-text="搜索" show-action />
          <pi-search
            v-model="demo4"
            action-text="搜索"
            :action-style="{ color: 'blue' }"
            show-action
          />
          <pi-search
            v-model="demo4"
            show-action
            search-label="珠海"
            action-text="搜索"
            search-icon-position="right"
            :search-icon-style="{ fontSize: '50rpx', color: 'blue' }"
            :action-style="{ color: 'blue', fontSize: '36rpx' }"
          />
        </template>
      </pi-card>

      <pi-card>
        <pi-section slot="title">背景颜色</pi-section>

        <template slot="body">
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
        </template>
      </pi-card>
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
