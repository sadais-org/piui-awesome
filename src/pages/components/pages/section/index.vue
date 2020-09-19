<template>
  <view class="pi-scroll-container">
    <pi-navbar title="section" />
    <scroll-view class="pi-scroll" scroll-y="">
      <view class="pi-content">
        <pi-section title="周边设施" />
        <pi-section title="学区学位" desc="助你一臂之力" />
        <pi-section title="一条龙服务" extra-text="更多" show-right-icon />
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style></style>
