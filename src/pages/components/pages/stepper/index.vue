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
        <pi-section title="修改步长" desc="step=0.5" />
        <pi-stepper
          v-model="val2"
          :min="2"
          :max="12"
          theme="fill"
          :step="0.5"
          :disable-input="false"
          :decimal="2"
        />
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Swiper',
  data() {
    return {
      val: 10,
      val1: 10,
      val2: 10
    }
  }
}
</script>
