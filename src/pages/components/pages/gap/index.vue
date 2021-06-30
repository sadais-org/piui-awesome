<template>
  <view class="pi-scroll-container">
    <pi-navbar title="间隔槽" />
    <scroll-view class="pi-scroll" scroll-y>
      <!-- 基础用法 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="基础用法" />
        <template slot="body">
          <pi-gap />
        </template>
      </pi-card>
      <!-- 基础用法 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="背景颜色" />
        <template slot="body">
          <pi-gap background="#f50" margin-bottom="50" />
          <pi-gap background="#ff508a" margin-bottom="50" />
          <pi-gap background="#5a7dff" />
        </template>
      </pi-card>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Gap'
}
</script>
