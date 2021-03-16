<<<<<<< HEAD
<template>
  <view class="pi-scroll-container">
    <pi-navbar title="步进器" />
    <scroll-view class="pi-scroll" scroll-y="">
      <view class="pi-content">
        <pi-section>默认展示</pi-section>
        <pi-stepper v-model="demo1" />
        <pi-section>步长：2</pi-section>
        <pi-stepper v-model="demo2" :step="2" />
        <pi-section>最小值：-2</pi-section>
        <pi-stepper v-model="demo3" :step="2" :min="-2" />
        <pi-section>最大值：20</pi-section>
        <pi-stepper v-model="demo4" :step="2" :min="-2" :max="20" />
        <pi-section>禁用</pi-section>
        <pi-stepper v-model="demo5" disabled />
        <pi-section>自定义大小</pi-section>
        <pi-stepper v-model="demo6" :input-style="{ fontSize: '44rpx' }" button-size="66" />
        <pi-section>形状：正方形</pi-section>
        <pi-stepper v-model="demo7" shape="square" />
        <pi-section>主题：填充模式</pi-section>
        <pi-stepper v-model="demo8" theme="fill" />
        <pi-section>形状：正方形填充模式</pi-section>
        <pi-stepper v-model="demo9" shape="square" theme="fill" />
=======
<!--
 * @Author: zhangzhenfei
 * @Date: 2021-03-08 17:26:33
 * @LastEditTime: 2021-03-08 17:58:03
 * @LastEditors: zhangzhenfei
 * @Description: 
 * @FilePath: /piui-awesome/src/pages/components/pages/stepper/index.vue
-->
<template>
  <view class="pi-scroll-container">
    <pi-navbar title="stepper" />
    <scroll-view class="pi-scroll" scroll-y="">
      <view class="pi-content">
        <pi-section title="基本使用" desc="设置范围、步长默认为1" />
        <pi-stepper v-model="val" :min="2" :max="12" />
        <pi-section title="设置主题" desc="theme = fill(填充) | line(镂空)" />
        <pi-stepper v-model="val1" :min="2" :max="12" theme="fill" />
        <pi-section title="修改步长、保留1位小数" desc="step=0.5; decimal=1" />
        <pi-stepper
          v-model="val2"
          :min="2"
          :max="12"
          theme="fill"
          :step="0.5"
          :disable-input="false"
          :decimal="1"
        />
>>>>>>> merge-remote
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
<<<<<<< HEAD
  name: 'Stepper',
  data() {
    return {
      demo1: 1,
      demo2: 10,
      demo3: 4,
      demo4: 12,
      demo5: 22,
      demo6: 4,
      demo7: 4,
      demo8: 4,
      demo9: 4
=======
  name: 'Swiper',
  data() {
    return {
      val: 10,
      val1: 10,
      val2: 10
>>>>>>> merge-remote
    }
  }
}
</script>
