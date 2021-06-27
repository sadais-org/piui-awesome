<!--
 * @Author: zhangzhenfei
 * @Date: 2021-03-09 12:38:42
 * @LastEditTime: 2021-06-27 17:41:41
 * @LastEditors: zhangzhenfei
 * @Description:
 * @FilePath: /piui-awesome/src/pages/components/pages/code-input/index.vue
-->
<template>
  <view class="pi-scroll-container">
    <pi-navbar title="codeInput 校验码输入" />
    <scroll-view class="pi-scroll" scroll-y>
      <!-- 基础用法 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="基础用法" />
        <template slot="body">
          <pi-code-input v-model="baseUsed" :length="4" />
        </template>
      </pi-card>
      <!-- 输入项长度 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="输入项长度：6" />
        <template slot="body">
          <pi-code-input v-model="length" :length="6" />
        </template>
      </pi-card>
      <!-- 均分布局 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="均分布局" />
        <template slot="body">
          <pi-code-input v-model="stretch" :length="4" stretch />
        </template>
      </pi-card>
      <!-- 输入项样式 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="输入项样式" />
        <template slot="body">
          <pi-code-input
            v-model="styles"
            :item-style="{ borderRadius: '25%', borderColor: '#ff508a', color: '#ff508a' }"
          />
        </template>
      </pi-card>
      <!-- 已填输入项样式 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="已填输入项样式" />
        <template slot="body">
          <pi-code-input
            v-model="fillStyles"
            :length="4"
            :fill-style="{
              fontWeight: '700',
              borderColor: '#ff508a',
              color: '#000'
            }"
          />
        </template>
      </pi-card>
      <!-- 自动拉起键盘输入 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="自动拉起键盘输入" />
        <template slot="body">
          <pi-code-input v-model="autoFocus" :length="4" auto-focus />
        </template>
      </pi-card>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'CodeInput',
  data() {
    return {
      baseUsed: '314',
      length: '314159',
      stretch: '',
      styles: '',
      fillStyles: '',
      autoFocus: ''
    }
  }
}
</script>
