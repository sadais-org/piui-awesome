<template>
  <view class="pi-scroll-container">
    <pi-navbar title="标签栏" />
    <scroll-view class="pi-scroll pi-pd-bottom-60" scroll-y>
      <pi-card>
        <pi-section slot="title" padding="0" title="基础用法" />
        <template slot="body">
          <pi-tabs v-model="baseUsed.currentItem" :items="baseUsed.tabItems" />
        </template>
      </pi-card>
      <pi-card>
        <pi-section
          slot="title"
          padding="0"
          title="固定sliderBar宽度"
          desc="slider-bar-width: 60"
        />
        <template slot="body">
          <pi-tabs
            v-model="sliderBarWidth.currentItem"
            :items="sliderBarWidth.tabItems"
            slider-bar-width="60"
          />
        </template>
      </pi-card>
      <pi-card>
        <pi-section slot="title" padding="0" title="显示滚动槽" desc="show-slider-bar-guide" />
        <template slot="body">
          <pi-tabs
            v-model="showSliderBarGuide.currentItem"
            :items="showSliderBarGuide.tabItems"
            slider-bar-width="60"
            active-color="blue"
            show-slider-bar-guide
          />
        </template>
      </pi-card>
      <pi-card>
        <pi-section slot="title" padding="0" title="标签均分宽度" desc="stretch" />
        <template slot="body">
          <pi-tabs
            v-model="stretch.currentItem"
            :items="stretch.tabItems"
            stretch
            active-color="green"
          />
        </template>
      </pi-card>
      <pi-card>
        <pi-section slot="title" padding="0" title="自定义标签" />
        <template slot="body">
          <pi-tabs
            v-model="itemStyle.currentItem"
            :items="itemStyle.tabItems"
            :item-style="{ color: '#333333', fontWeight: 600 }"
            stretch
            :show-slider-bar="false"
            active-text-color="#ffffff"
            :active-item-style="{
              backgroundColor: '#ff508a',
              borderRadius: '12rpx'
            }"
            @change="handleChangeItem"
          />
        </template>
      </pi-card>
      <pi-card>
        <pi-section slot="title" padding="0" title="自定义激活标签" />
        <template slot="body">
          <pi-tabs
            v-model="activeItemStyle.currentItem"
            :items="activeItemStyle.tabItems"
            slider-bar-width="60"
            active-text-color="#222222"
            active-color="#ff508a"
            :show-slider-bar-guide="false"
            :active-item-style="{
              fontSize: '48rpx',
              fontWeight: '600',
              color: '#ff508a'
            }"
            :item-style="{
              fontSize: '32rpx',
              color: '#666666'
            }"
          />
        </template>
      </pi-card>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Tabs',
  data() {
    return {
      baseUsed: {
        currentItem: { id: 'recommend' },
        tabItems: [
          { id: 'product', text: '宝贝' },
          { id: 'evaluation', text: '评价' },
          { id: 'detail', text: '详情' },
          { id: 'discover', text: '发现好物' },
          { id: 'recommend', text: '推荐我的好宝贝' },
          { id: 'share', text: '分享' }
        ]
      },
      sliderBarWidth: {
        currentItem: { id: 'product' },
        tabItems: [
          { id: 'product', text: '宝贝' },
          { id: 'evaluation', text: '评价' },
          { id: 'detail', text: '详情' },
          { id: 'discover', text: '发现好物' },
          { id: 'recommend', text: '推荐我的好宝贝' },
          { id: 'share', text: '分享' }
        ]
      },
      showSliderBarGuide: {
        currentItem: { id: 'detail' },
        tabItems: [
          { id: 'product', text: '宝贝' },
          { id: 'evaluation', text: '评价' },
          { id: 'detail', text: '详情' },
          { id: 'discover', text: '发现好物' },
          { id: 'recommend', text: '推荐我的好宝贝' },
          { id: 'share', text: '分享' }
        ]
      },
      stretch: {
        currentItem: { id: 'c' },
        tabItems: [
          { id: 'a', text: 'A' },
          { id: 'b', text: 'B' },
          { id: 'c', text: 'C' },
          { id: 'd', text: 'D' }
        ]
      },
      itemStyle: {
        currentItem: { id: 'c' },
        tabItems: [
          { id: 'a', text: 'A' },
          { id: 'b', text: 'B' },
          { id: 'c', text: 'C' },
          { id: 'd', text: 'D' },
          { id: 'e', text: 'E' }
        ]
      },
      activeItemStyle: {
        currentItem: { id: '1' },
        tabItems: [
          { id: '1', text: '全部' },
          { id: '2', text: '家电' },
          { id: '5', text: '奢侈品' },
          { id: '3', text: '家具' },
          { id: '4', text: '服装' },
          { id: '6', text: '其他' }
        ]
      }
    }
  },
  methods: {
    handleChangeItem(val) {
      console.log('切换到' + val.text)
    }
  }
}
</script>
