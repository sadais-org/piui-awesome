<template>
  <view class="pi-scroll-container">
    <pi-navbar title="底部按钮栏" />
    <scroll-view class="pi-scroll" scroll-y>
      <pi-list>
        <pi-card v-for="item in 99" :key="item" :title="item + '. 标题'">{{ item }}</pi-card>
      </pi-list>
    </scroll-view>
    <pi-bottom-bar>
      <pi-button type="primary" width="100%">确认</pi-button>
    </pi-bottom-bar>
  </view>
</template>

<script>
export default {
  name: 'BottomBar'
}
</script>

<style lang="scss" scoped></style>
