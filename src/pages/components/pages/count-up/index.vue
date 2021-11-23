<template>
  <view class="pi-scroll-container">
    <pi-navbar title="数字滚动" />
    <scroll-view class="pi-scroll" scroll-y="">
      <pi-card padding="0">
        <pi-section slot="title" padding="24">
          基础用法
        </pi-section>
        <template slot="body">
          <view class="pi-pd-24">
            <pi-count-up start-num="0" end-num="999" />
          </view>
          <view class="pi-pd-24">
            <pi-count-up start-num="999" end-num="0" />
          </view>
        </template>
      </pi-card>
      <pi-card padding="0">
        <pi-section slot="title" padding="24">
          设置滚动动画时间
        </pi-section>
        <template slot="body">
          <view class="pi-pd-24">
            <pi-count-up start-num="0" end-num="999" duration="10000" />
          </view>
          <view class="pi-pd-24">
            <pi-count-up start-num="0" end-num="999" duration="3000" />
          </view>
        </template>
      </pi-card>
      <pi-card padding="0">
        <pi-section slot="title" padding="24">
          显示小数位
        </pi-section>
        <template slot="body">
          <view class="pi-pd-24">
            <pi-count-up start-num="0" end-num="999" decimals="1" />
          </view>
          <view class="pi-pd-24">
            <pi-count-up start-num="0" end-num="999.99" decimals="2" />
          </view>
        </template>
      </pi-card>
      <pi-card>
        <pi-section slot="title">
          显示千分位分隔符
        </pi-section>
        <template slot="body">
          <pi-count-up start-num="0" end-num="19288585993" decimals="2" thousands="," />
        </template>
      </pi-card>
      <pi-card padding="0">
        <pi-section slot="title" padding="24">
          缓动效果
        </pi-section>
        <template slot="body">
          <view class="pi-pd-24">
            <pi-count-up start-num="0" end-num="999" is-ease />
          </view>
        </template>
      </pi-card>
      <pi-card padding="0">
        <pi-section slot="title" padding="24">
          字体颜色以及大小
        </pi-section>
        <template slot="body">
          <view class="pi-pd-24">
            <pi-count-up start-num="0" end-num="999" font-size="80" />
          </view>
          <view class="pi-pd-24">
            <pi-count-up start-num="0" end-num="999" font-color="red" />
          </view>
        </template>
      </pi-card>
      <pi-card padding="0">
        <pi-section slot="title" padding="24">
          关闭自动滚动
        </pi-section>
        <template slot="body">
          <view class="pi-pd-24">
            <pi-count-up ref="countUP" start-num="0" end-num="999" :autoplay="false" />
          </view>
          <view class="btn-wrapper pi-justify-between pi-pd-bottom-32">
            <pi-button size="small" @click="handleControl('start')">开始</pi-button>
            <pi-button size="small" @click="handleControl('stop')">暂停</pi-button>
            <pi-button size="small" @click="handleControl('reset')">复原</pi-button>
          </view>
        </template>
      </pi-card>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'CountUp',
  methods: {
    handleControl(action) {
      const el = this.$refs.countUP
      switch (action) {
        case 'start':
          el.start()
          break
        case 'stop':
          el.stop()
          break
        case 'reset':
          el.reset()
          break
      }
    }
  }
}
</script>
