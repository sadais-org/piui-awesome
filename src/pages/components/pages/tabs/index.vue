<template>
  <view class="pi-scroll-container">
    <pi-navbar title="标签栏" />
    <scroll-view class="pi-scroll" scroll-y>
      <view class="pi-content">
        <view>
          <pi-section>
            默认tabs
            <text slot="desc">不设定sliderBarWidth</text>
          </pi-section>
          <pi-tabs v-model="demo1.currentItem" :items="demo1.tabItems" />
        </view>
        <view>
          <pi-section>
            固定sliderBar宽度
            <text slot="desc">sliderBarWidth: 60</text>
          </pi-section>
          <pi-tabs v-model="demo2.currentItem" :items="demo2.tabItems" slider-bar-width="60" />
        </view>
        <view>
          <view>
            <pi-section title="显示滚动槽"><text slot="desc">activeColor蓝色</text></pi-section>
            <pi-tabs
              v-model="demo3.currentItem"
              :items="demo3.tabItems"
              slider-bar-width="60"
              active-color="blue"
              show-slider-bar-guide
            />
          </view>
        </view>
        <view>
          <view>
            <pi-section>
              标签自动撑开
              <text slot="desc">平分宽度</text>
            </pi-section>
            <pi-tabs
              v-model="demo4.currentItem"
              :items="demo4.tabItems"
              stretch
              active-color="green"
            />
          </view>
        </view>
        <view>
          <view>
            <pi-section>自定义样式</pi-section>
            <pi-tabs
              v-model="demo5.currentItem"
              :items="demo5.tabItems"
              :item-style="{ color: '#333333', fontWeight: 600 }"
              stretch
              :show-slider-bar="false"
              active-text-color="#ffffff"
              :active-item-style="{
                backgroundColor: '#ff508a',
                borderRadius: '12rpx'
              }"
              @change="changeItem"
            />
          </view>
        </view>
        <view>
          <view>
            <pi-section>
              自定义样式
            </pi-section>
            <pi-tabs
              v-model="tabs.currentItem"
              :items="tabs.tabItems"
              slider-bar-width="60"
              active-text-color="#222222"
              active-color="#4784FE"
              :show-slider-bar-guide="false"
              :active-item-style="{
                fontSize: '48rpx',
                fontWeight: '600',
                fontFamily: 'PingFangSC-Semibold, PingFang SC;'
              }"
              :item-style="{
                fontSize: '32rpx',
                fontFamily: 'PingFangSC-Semibold, PingFang SC;',
                color: '#666666'
              }"
            />
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Tabs',
  data() {
    return {
      demo1: {
        currentItem: { id: 'b' },
        tabItems: [
          { id: 'member', text: '团员', tag: '最帅' },
          { id: 'masses', text: '群众', tag: '最美' },
          { id: 'b', text: '我是一只小鸟', tag: '最美' },
          { id: 'c', text: '测试很长很长很长', tag: '最美' },
          { id: 'test', text: '短', tag: '最美' }
        ]
      },
      demo2: {
        currentItem: { id: 'b' },
        tabItems: [
          { id: 'member', text: '团员', tag: '最帅' },
          { id: 'masses', text: '群众', tag: '最美' },
          { id: 'b', text: '我是一只小鸟', tag: '最美' },
          { id: 'c', text: '测试很长很长很长', tag: '最美' },
          { id: 'test', text: '短', tag: '最美' }
        ]
      },
      demo6: {
        currentItem: { id: 'b' },
        tabItems: [
          { id: 'member', text: '团员', tag: '最帅' },
          { id: 'masses', text: '群众', tag: '最美' },
          { id: 'b', text: '我是一只小鸟', tag: '最美' },
          { id: 'c', text: '测试很长很长很长', tag: '最美' },
          { id: 'test', text: '短', tag: '最美' }
        ]
      },
      demo3: {
        currentItem: { id: 'c' },
        tabItems: [
          { id: 'member', text: '团员', tag: '最帅' },
          { id: 'masses', text: '群众', tag: '最美' },
          { id: 'b', text: '我是一只小鸟', tag: '最美' },
          { id: 'c', text: '测试很长很长很长', tag: '最美' },
          { id: 'test', text: '短', tag: '最美' },
          { id: 'x', text: '测试', tag: '最美' },
          { id: 'b2', text: '测试2', tag: '最美' },
          { id: 'b11', text: '母婴', tag: '最美' }
        ]
      },
      demo4: {
        currentItem: { id: 'c' },
        tabItems: [
          { id: 'a', text: 'A', tag: '最帅' },
          { id: 'b', text: 'B', tag: '最美' },
          { id: 'c', text: 'C', tag: '最美' },
          { id: 'd', text: 'D', tag: '最美' }
        ]
      },
      demo5: {
        currentItem: { id: 'c' },
        tabItems: [
          { id: 'a', text: 'A', tag: '最帅' },
          { id: 'b', text: 'B', tag: '最美' },
          { id: 'c', text: 'C', tag: '最美' },
          { id: 'd', text: 'D', tag: '最美' },
          { id: 'e', text: 'E', tag: '最美' }
        ]
      },
      tabs: {
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
    changeItem(val) {
      console.log('切换到' + val.text)
    }
  }
}
</script>
