<template>
  <view class="pi-scroll-container">
    <pi-navbar title="Rate评分" />
    <scroll-view class="pi-scroll" scroll-y="">
      <view class="pi-content">
        <pi-section>普通评分</pi-section>
        <pi-rate />
        <pi-section>双向绑定值：{{ syncRate }}</pi-section>
        <pi-rate v-model="syncRate" />
        <pi-section>自定义颜色</pi-section>
        <pi-rate v-model="syncRate" unselected-color="#ff2d51" selected-color="#ff508a" />
        <pi-section>图标镂空</pi-section>
        <pi-rate v-model="syncRate" selected-icon="biaoxing" selected-color="#ff508a" />
        <pi-section>自定义图标</pi-section>
        <pi-rate v-model="syncRate" unselected-icon="praise" selected-icon="praise-fill" />
        <pi-section>禁用评分</pi-section>
        <pi-rate v-model="disRate" disabled />
        <pi-section>调整间距</pi-section>
        <pi-rate v-model="syncRate" :gutter="38" />
        <pi-section>大尺寸</pi-section>
        <pi-rate v-model="syncRate" size="60" />
        <pi-section>自定义数量</pi-section>
        <pi-rate v-model="syncRate" :count="8" />
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Rate',
  data() {
    return {
      syncRate: 3,
      disRate: 2
    }
  }
}
</script>
