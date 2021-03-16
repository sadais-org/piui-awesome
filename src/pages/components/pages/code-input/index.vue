<<<<<<< HEAD
<template>
  <view class="pi-scroll-container">
    <pi-navbar title="验证码输入" />
    <scroll-view class="pi-scroll" scroll-y="">
      <view class="pi-content">
        <pi-section title="默认验证码输入">默认验证码输入</pi-section>
        <pi-code-input v-model="code" />
        <pi-section>均分宽度</pi-section>
        <pi-code-input v-model="code" :stretch="true" />
        <pi-section>6项验证码</pi-section>
        <pi-code-input v-model="code" length="6" />
        <pi-section>自定义样式</pi-section>
        <pi-code-input
          v-model="code"
          length="5"
          :item-style="{
            width: '64rpx',
            height: '64rpx',
            color: '#ff508a',
            borderColor: '#ff508a'
          }"
        />
        <pi-section>自定义填充样式</pi-section>
        <pi-code-input
          v-model="code"
          length="5"
          :fill-style="{ color: '#ffffff', borderColor: '#ff508a', background: '#ff508a' }"
        />
=======
<!--
 * @Author: zhangzhenfei
 * @Date: 2021-03-09 12:38:42
 * @LastEditTime: 2021-03-09 13:06:00
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
>>>>>>> merge-remote
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
<<<<<<< HEAD
  name: 'CodeInputPage',
  data() {
    return { code: '123' }
  }
}
</script>

<style></style>
=======
  name: 'CodeInput',
  data() {
    return {
      phone: ''
    }
  }
}
</script>
>>>>>>> merge-remote
