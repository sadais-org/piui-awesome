<template>
  <view class="pi-scroll-container">
    <pi-navbar title="switch" />
    <scroll-view class="pi-scroll" scroll-y="">
      <view class="pi-content">
        <pi-switch />
        <pi-switch type="line" />
        <pi-switch size="40" active-color="#ff508a" />
        <pi-switch size="40" active-color="#ff508a" type="line" />
        <pi-switch value="true" loading />
        <pi-switch type="line" :value="true" loading />
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Search'
}
</script>
