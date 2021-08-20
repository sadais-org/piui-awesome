<template>
  <view class="pi-scroll-container">
    <pi-navbar title="Marquee-跑马灯" />
    <scroll-view class="pi-scroll pi-flex-column" scroll-y>
      <!-- 基础用法 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="基础用法" desc="slot text" />
        <template slot="body">
          <pi-marquee :speed="0.06">
            <pi-marquee-item v-for="(text, index) in baseUsed" :key="index">
              <span>{{ text }}</span>
            </pi-marquee-item>
          </pi-marquee>
        </template>
      </pi-card>
      <!-- 图片轮播 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="图片轮播" desc="slot img" />
        <template slot="body">
          <pi-marquee :speed="0.06">
            <pi-marquee-item v-for="(url, index) in pics" :key="index">
              <pi-img
                width="100vw"
                height="440"
                mode="aspectFill"
                :custom-style="{ background: '#cccccc' }"
                :src="url"
              />
            </pi-marquee-item>
          </pi-marquee>
        </template>
      </pi-card>
      <!-- 垂直方向轮播 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="基础用法" desc="direction=vertical" />
        <template slot="body">
          <pi-marquee direction="vertical">
            <pi-marquee-item v-for="(text, index) in baseUsed" :key="index">
              <span>{{ text }}</span>
            </pi-marquee-item>
          </pi-marquee>
        </template>
      </pi-card>
      <!-- 图片垂直轮播 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="图片垂直轮播" desc="direction=vertical" />
        <template slot="body">
          <pi-marquee class="custom-height" :speed="0.1" direction="vertical">
            <pi-marquee-item v-for="(url, index) in pics" :key="index">
              <pi-img
                width="100vw"
                height="440"
                mode="aspectFill"
                :custom-style="{ background: '#cccccc' }"
                :src="url"
              />
            </pi-marquee-item>
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
        '北国风光，千里冰封，万里雪飘。望长城内外，惟余莽莽；大河上下，顿失滔滔。山舞银蛇，原驰蜡象，欲与天公试比高。须晴日，看红装素裹，分外妖娆。',
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
.custom-height {
  height: 880rpx !important;
}
</style>
