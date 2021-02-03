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
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'CodeInputPage',
  data() {
    return { code: '123' }
  }
}
</script>

<style></style>
