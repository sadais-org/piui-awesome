<template>
  <view class="pi-scroll-container">
    <pi-navbar title="列表" />
    <scroll-view class="pi-scroll" scroll-y>
      <pi-list title="基础列表">
        <pi-list-item v-for="item in 4" :key="item">{{ item }}</pi-list-item>
      </pi-list>
      <pi-list title="右侧文字">
        <pi-list-item v-for="item in 4" :key="item" :extra-text="`第${item}行`">
          {{ item }}
        </pi-list-item>
      </pi-list>
      <pi-list title="禁用行">
        <pi-list-item v-for="item in 4" :key="item" disabled>
          {{ item }}
        </pi-list-item>
      </pi-list>
      <pi-list title="隐藏右侧图标">
        <pi-list-item v-for="item in 4" :key="item" :show-right-icon="false">
          {{ item }}
        </pi-list-item>
      </pi-list>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'List'
}
</script>

<style lang="scss" scoped></style>
