<!--
 * @Author: zhangzhenfei
 * @Date: 2021-03-09 12:38:42
 * @LastEditTime: 2021-03-30 18:42:53
 * @LastEditors: zhangzhenfei
 * @Description: 
 * @FilePath: \piui-awesome\src\pages\components\pages\code-input\index.vue
-->
<template>
  <view class="pi-scroll-container">
    <pi-navbar title="codeInput 校验码输入" />
    <scroll-view class="pi-scroll" scroll-y>
      <view class="pi-content">
        <pi-section>基础用法</pi-section>
        <pi-code-input v-model="val" :length="4" />
        <pi-section>每项验证码样式</pi-section>
        <pi-code-input
          v-model="val1"
          :length="4"
          :item-style="{ borderRadius: '25%', borderColor: '#44cef6', color: '#003472' }"
        />
        <pi-section>已填项验证码样式</pi-section>
        <pi-code-input
          v-model="val2"
          :length="4"
          :fill-style="{
            fontWeight: '700',
            marginRight: '50rpx',
            borderColor: '#41555d',
            color: '#000'
          }"
        />
        <pi-section>均分布局</pi-section>
        <pi-code-input v-model="val3" :length="4" stretch />
        <pi-section>自动拉起键盘输入</pi-section>
        <pi-code-input v-model="val4" :length="4" stretch auto-focus />
        <pi-section>自动拉起键盘延时</pi-section>
        <pi-code-input v-model="val5" :length="4" stretch auto-focus :auto-focus-delay="1000" />
        <pi-section>自定义长度</pi-section>
        <pi-code-input v-model="val6" :length="6" :item-style="{ margin: '10rpx 16rpx' }" />
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'CodeInput',
  data() {
    return {
      val: '',
      val1: '',
      val2: '',
      val3: '',
      val4: '',
      val5: '',
      val6: ''
    }
  }
}
</script>
