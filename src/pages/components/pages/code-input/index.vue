<!--
 * @Author: zhangzhenfei
 * @Date: 2021-03-09 12:38:42
 * @LastEditTime: 2021-03-16 15:35:24
 * @LastEditors: zhangzhenfei
 * @Description: 
 * @FilePath: /piui-awesome/src/pages/components/pages/code-input/index.vue
-->
<template>
  <view class="pi-scroll-container">
    <pi-navbar title="数字输入组件" />
    <scroll-view class="pi-scroll" scroll-y="">
      <view class="pi-content">
        <pi-section desc="length=4(默认4)">输入位数</pi-section>
        <pi-code-input v-model="phone" :length="4" />
        <pi-section desc="stretch=true(默认false)">均分布局</pi-section>
        <pi-code-input v-model="phone" :length="4" stretch />
        <pi-section desc="fill-style={borderColor: #ff0000; color: #ff0000}">
          样式
        </pi-section>
        <pi-code-input
          v-model="phone"
          :length="4"
          stretch
          :fill-style="{ borderColor: '#ff0000', color: '#ff0000' }"
        />
        <pi-section desc="auto-focus=true(默认false)">键盘</pi-section>
        <pi-code-input v-model="phone" :length="4" stretch auto-focus />
        <pi-section desc="auto-focus=true； auto-focus-delay(默认350ms)">键盘</pi-section>
        <pi-code-input v-model="phone" :length="4" stretch auto-focus :auto-focus-delay="400" />
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'CodeInput',
  data() {
    return {
      phone: ''
    }
  }
}
</script>
