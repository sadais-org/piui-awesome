<template>
  <view class="pi-scroll-container">
    <pi-navbar title="线型进度条" />
    <scroll-view class="pi-scroll" scroll-y>
      <pi-card padding="0">
        <pi-section slot="title" padding="24" title="基础用法" />
        <template slot="body">
          <view class="pi-flex-column pi-pd-24  pi-justify-between" style="height: 100px;">
            <pi-line-progress width="200" percent="40" />
            <pi-line-progress percent="50" />
            <pi-line-progress percent="60" :round="false" />
            <pi-line-progress height="30" percent="70" />
          </view>
        </template>
      </pi-card>

      <pi-card padding="0">
        <pi-section slot="title" padding="24" title="百分比显隐" />
        <template slot="body">
          <view class="pi-flex-column pi-pd-24  pi-justify-between" style="height: 100px;">
            <pi-line-progress width="200" percent="40" />
            <pi-line-progress percent="50" />
            <pi-line-progress percent="60" :round="false" :show-percent="false" />
            <pi-line-progress height="30" percent="70" :show-percent="false" />
          </view>
        </template>
      </pi-card>

      <pi-card padding="0">
        <pi-section slot="title" padding="24" title="自定义颜色" />
        <template slot="body">
          <view class="pi-flex-column pi-pd-24  pi-justify-between" style="height: 100px;">
            <pi-line-progress width="200" percent="40" />
            <pi-line-progress active-color="red" percent="50" />
            <pi-line-progress
              inactive-color="black"
              percent="60"
              :round="false"
              :show-percent="false"
            />
            <pi-line-progress
              active-color="green"
              inactive-color="red"
              height="30"
              percent="70"
              :show-percent="false"
            />
          </view>
        </template>
      </pi-card>

      <pi-card padding="0">
        <pi-section slot="title" padding="24" title="条纹、动态效果" />
        <template slot="body">
          <view class="pi-flex-column pi-pd-24  pi-justify-between" style="height: 80px;">
            <pi-line-progress percent="100" striped />
            <pi-line-progress percent="100" striped striped-active />
            <pi-line-progress active-color="green" percent="100" striped striped-active />
          </view>
        </template>
      </pi-card>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Search'
}
</script>
