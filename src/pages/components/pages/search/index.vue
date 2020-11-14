<template>
  <view class="pi-scroll-container">
    <pi-navbar title="搜索框" />
    <scroll-view class="pi-scroll" scroll-y="">
      <view class="pi-content">
        <pi-section>默认搜索框</pi-section>
        <pi-search />
        <pi-section>方形搜索框</pi-section>
        <pi-search shape="square" />
        <pi-section>设置searchLabel</pi-section>
        <pi-search
          search-label="珠海"
          :search-label-style="{ color: '#ff508a', fontSize: '36rpx' }"
        />
        <pi-section>设置clearTrigger: 'focus'</pi-section>
        <pi-search clear-trigger="focus" />
        <pi-section>显示搜索action</pi-section>
        <pi-search clear-trigger="focus" show-action action-text="确定" />
        <pi-section>搜索按钮放在右边</pi-section>
        <pi-search shape="square" search-icon-position="right" clear-trigger="focus" />
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
