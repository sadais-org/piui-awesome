<template>
  <view class="pi-scroll-container">
    <pi-navbar title="Marquee-跑马灯" />
    <scroll-view class="pi-scroll pi-flex-column" scroll-y>
      <pi-section>水平方向文本轮播</pi-section>
      <pi-marquee :speed="0.1">
        <pi-marquee-item v-for="(text, index) in textList" :key="index">
          <span style="height: 44px; line-height: 44px; font-size: 28rpx">{{ text }}</span>
        </pi-marquee-item>
      </pi-marquee>
      <pi-section>水平方向Banner轮播</pi-section>
      <pi-marquee :speed="0.2">
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
      <pi-section>垂直方向Banner轮播</pi-section>
      <pi-marquee class="custom-height" :speed="0.2" direction="vertical">
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
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'MarqueeDemo',
  data() {
    return {
      textList: [
        '好好学习，天天向上',
        '打折大优惠，亏本大买卖',
        '好好学习，天天向上',
        '打折大优惠，亏本大买卖',
        '好好学习，天天向上',
        '打折大优惠，亏本大买卖'
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
