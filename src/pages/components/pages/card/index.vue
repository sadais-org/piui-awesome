<template>
  <view class="pi-scroll-container">
    <pi-navbar title="card" />
    <scroll-view class="pi-scroll" scroll-y="">
      <pi-card title="默认卡片" />
      <pi-card>
        <pi-section slot="title" padding="0" title="设置title slot：pi-section" show-right-icon />
      </pi-card>
      <pi-card title="自定义卡片内容">
        <template slot="body">
          最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。
        </template>
      </pi-card>
      <pi-card title="自定义卡片内容和脚部">
        <template slot="body">
          最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。
        </template>
        <view slot="footer" class="pi-justify-end">
          <pi-button type="primary" size="small">确认</pi-button>
        </view>
      </pi-card>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Search',
  methods: {
    handleNewsClick() {
      console.log('点击了新闻')
    }
  }
}
</script>
