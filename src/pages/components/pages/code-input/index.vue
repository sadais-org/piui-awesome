<!--
 * @Author: zhangzhenfei
 * @Date: 2021-03-09 12:38:42
 * @LastEditTime: 2022-03-16 14:21:15
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
          <pi-code-input v-model="autoFocus" :length="4" />
        </template>
      </pi-card>
      <!-- 验证码格式化 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="验证码格式化" />
        <template slot="body">
          <pi-code-input v-model="codeFormat" :length="4" code-format="@" />
        </template>
      </pi-card>
      <!-- 密码样式 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="密码样式" />
        <template slot="body">
          <pi-code-input v-model="password" :length="4">
            <template slot="item" slot-scope="{ item }">{{ item ? '*' : '' }}</template>
          </pi-code-input>
        </template>
      </pi-card>
      <pi-card>
        <pi-section slot="title" padding="0" title="弹窗输入" />
        <template slot="body">
          <pi-button @click="modalInputShow = true">打开弹窗</pi-button>
        </template>
      </pi-card>
      <pi-modal v-model="modalInputShow" title="请输入验证码">
        <pi-code-input v-if="modalInputShow" v-model="modalInput" :length="4" auto-focus />
      </pi-modal>
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
      autoFocus: '',
      codeFormat: '9',
      password: '12',
      modalInputShow: false,
      modalInput: ''
    }
  }
}
</script>
