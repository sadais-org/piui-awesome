<template>
  <view class="pi-scroll-container">
    <pi-navbar title="section" />
    <scroll-view class="pi-scroll" scroll-y="">
      <view class="pi-content">
        <pi-section title="默认分块" />
        <pi-section title="默认分块" desc="带描述" />
        <pi-section title="显示右箭头" extra-text="更多" show-right-icon />
        <pi-section title="不显示左侧竖线" extra-text="更多" :line="false" show-right-icon />
        <pi-section title="显示下边框" extra-text="更多" border show-right-icon />
        <pi-section>
          Slot标题
        </pi-section>
        <pi-section>
          Slot标题
          <text slot="desc">slot desc</text>
        </pi-section>
        <pi-section show-right-icon :right-icon="{ name: 'next', color: '#cccccc' }">
          <pi-loading show />
          <text class="pi-mg-left-10">放个loading，改变右侧icon</text>
        </pi-section>
        <pi-section title="新闻" extra-text="更多" show-right-icon />
        <pi-section title="右插槽">
          <view slot="right">筛选</view>
        </pi-section>
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
