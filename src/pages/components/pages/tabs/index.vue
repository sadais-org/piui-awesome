<template>
  <view class="pi-scroll-container">
    <pi-navbar title="标签栏" />
    <scroll-view class="pi-scroll" scroll-y>
      <view class="pi-content">
        <view>
          <view>默认tabs（不设定sliderBarWidth）</view>
          <pi-tabs v-model="demo1.currentItem" :items="demo1.tabItems" />
        </view>
        <view>
          <view>sliderBarWidth固定</view>
          <pi-tabs v-model="demo2.currentItem" :items="demo2.tabItems" slider-bar-width="60" />
        </view>
        <view>
          <view>
            <view>显示滚动槽</view>
            <view>activeColor蓝色</view>
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
            <view>标签是否自动撑开</view>
            <pi-tabs
              v-model="demo4.currentItem"
              :items="demo4.tabItems"
              stretch
              active-color="green"
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
      }
    }
  }
}
</script>
