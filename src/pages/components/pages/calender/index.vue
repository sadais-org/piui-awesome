<template>
  <view class="pi-scroll-container">
    <pi-navbar title="搜索框" />
    <scroll-view class="pi-scroll" scroll-y="">
      <view class="pi-content">
        <pi-calender />
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Search'
}
</script>
