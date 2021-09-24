<template>
  <view class="pi-scroll-container">
    <pi-navbar title="Marquee-跑马灯" />
    <scroll-view class="pi-scroll pi-flex-column" scroll-y>
      <!-- 基础用法 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="基础用法" desc="slot text" />
        <template slot="body">
          <pi-marquee :speed="60" :items="baseUsed">
            <view slot="item" slot-scope="{ item }">
              {{ item }}
            </view>
          </pi-marquee>
        </template>
      </pi-card>
      <!-- 图片轮播 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="图片轮播" desc="slot img" />
        <template slot="body">
          <pi-marquee :speed="60" :items="pics">
            <pi-img
              slot="item"
              slot-scope="{ item }"
              width="100%"
              height="440"
              mode="aspectFill"
              :custom-style="{ background: '#cccccc', width: 'calc(100vw - 52px)' }"
              :src="item"
            />
          </pi-marquee>
        </template>
      </pi-card>
      <!-- 垂直方向轮播 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="方向控制" desc="direction=bt(bottom to top)" />
        <template slot="body">
          <pi-marquee
            direction="bt"
            :speed="20"
            :custom-style="{ height: '14px' }"
            :items="baseUsed"
          >
            <view slot="item" slot-scope="{ item }">{{ item }}</view>
          </pi-marquee>
        </template>
      </pi-card>
      <pi-card>
        <pi-section slot="title" padding="0" title="方向控制" desc="direction=tb(top to bottom)" />
        <template slot="body">
          <pi-marquee
            direction="tb"
            :speed="20"
            :custom-style="{ height: '14px' }"
            :items="baseUsed"
          >
            <view slot="item" slot-scope="{ item }">{{ item }}</view>
          </pi-marquee>
        </template>
      </pi-card>
      <pi-card>
        <pi-section slot="title" padding="0" title="方向控制" desc="direction=rl(right to left)" />
        <template slot="body">
          <pi-marquee direction="rl" :speed="20" :items="baseUsed">
            <view slot="item" slot-scope="{ item }">{{ item }}</view>
          </pi-marquee>
        </template>
      </pi-card>
      <pi-card>
        <pi-section slot="title" padding="0" title="方向控制" desc="direction=lr(left to right)" />
        <template slot="body">
          <pi-marquee direction="lr" :speed="20" :items="baseUsed">
            <view slot="item" slot-scope="{ item }">{{ item }}</view>
          </pi-marquee>
        </template>
      </pi-card>
      <!-- 图片垂直轮播 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="图片垂直轮播" desc="direction=bt" />
        <template slot="body">
          <pi-marquee custom-class="custom-height" :speed="100" direction="bt" :items="pics">
            <pi-img
              slot="item"
              slot-scope="{ item }"
              width="100%"
              height="440"
              mode="aspectFill"
              :custom-style="{ background: '#cccccc' }"
              :src="item"
            />
          </pi-marquee>
        </template>
      </pi-card>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'MarqueeDemo',
  data() {
    return {
      baseUsed: [
        '江山如此多娇，引无数英雄竞折腰。惜秦皇汉武，略输文采；唐宗宋祖，稍逊风骚。一代天骄，成吉思汗，只识弯弓射大雕。俱往矣，数风流人物，还看今朝。'
      ],
      pics: [
        'https://img0.baidu.com/it/u=103721101,4076571305&fm=26&fmt=auto&gp=0.jpg',
        'https://img0.baidu.com/it/u=283451891,2015119390&fm=26&fmt=auto&gp=0.jpg',
        'https://img0.baidu.com/it/u=1570224879,3082274194&fm=253&fmt=auto&app=120&f=JPEG?w=432&h=288',
        'https://img2.baidu.com/it/u=1728522718,1340994382&fm=26&fmt=auto&gp=0.jpg'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .custom-height {
  height: 880rpx !important;
}
</style>
