<template>
  <view class="pi-scroll-container">
    <pi-navbar title="导航栏" />
    <scroll-view class="pi-scroll" scroll-y>
      <pi-card>
        <pi-section slot="title" padding="0" title="取消固定顶部" />
        <template slot="body">
          <pi-navbar title="取消fixed" :fixed="false" />
        </template>
      </pi-card>
      <pi-card>
        <pi-section slot="title" padding="0" title="超长导航栏，自动剪裁添加省略号" />
        <template slot="body">
          <pi-navbar
            show-back
            through-title-width="400"
            title="超长导航栏，自动剪裁添加省略号"
            :fixed="false"
          />
        </template>
      </pi-card>
      <pi-card>
        <pi-section slot="title" padding="0" title="自定义返回按钮" />
        <template slot="body">
          <pi-navbar back-icon-name="scan" :fixed="false" :show-back="true">
            自定义返回图标
          </pi-navbar>
        </template>
      </pi-card>
      <pi-card>
        <pi-section slot="title" padding="0" title="自定义返回按钮" />
        <template slot="body">
          <pi-navbar back-icon-name="scan" back-text="后退" :fixed="false" :show-back="true">
            自定义返回名称
          </pi-navbar>
        </template>
      </pi-card>
      <pi-card>
        <pi-section slot="title" padding="0" title="隐藏返回按钮" />
        <template slot="body">
          <pi-navbar :show-back="false" :fixed="false">隐藏返回按钮</pi-navbar>
        </template>
      </pi-card>
      <pi-card>
        <pi-section slot="title" padding="0" title="自定义导航栏样式" />
        <template slot="body">
          <pi-navbar
            back-icon-name="scan"
            back-text="后退"
            background="linear-gradient(to right, #e0eafc, #cfdef3)"
            :fixed="false"
            :show-back="true"
          >
            自定义背景颜色
          </pi-navbar>
          <pi-navbar
            back-icon-name="scan"
            back-text="回退"
            background="#76b852"
            back-icon-color="#ffffff"
            :back-text-style="{ color: '#ffffff' }"
            title="自定义导航文字"
            :title-style="{ color: '#ffffff' }"
            :fixed="false"
            :show-back="true"
          />
        </template>
      </pi-card>
      <pi-card padding="0">
        <pi-section slot="title" padding="24" title="插槽示例" />
        <template slot="body">
          <pi-navbar :fixed="false" :show-back="true">
            <view>默认插槽</view>
          </pi-navbar>
          <pi-navbar :fixed="false" title="左边插槽">
            <view slot="left" class="pi-pd-left-24 pi-icon-add pi-fz-46 pi-primary" />
          </pi-navbar>
          <pi-navbar :fixed="false">
            <view slot="title">标题靠左</view>
          </pi-navbar>
          <pi-navbar :fixed="false" title="右边插槽" :show-back="true">
            <view slot="right" class="pi-pd-right-24 pi-icon-add pi-fz-46 pi-primary" />
          </pi-navbar>
        </template>
      </pi-card>
      <pi-card padding="0">
        <pi-section slot="title" padding="24" title="示例" />
        <template slot="body">
          <pi-navbar :fixed="false">
            <pi-search slot="title" show-action :action-style="{ paddingRight: '18rpx' }" />
          </pi-navbar>
          <pi-navbar :fixed="false">
            <pi-tabs v-model="demo2.currentItem" :items="demo2.tabItems" slider-bar-width="60" />
          </pi-navbar>
        </template>
      </pi-card>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      demo2: {
        currentItem: { id: 'member' },
        tabItems: [
          { id: 'member', text: '团员' },
          { id: 'masses', text: '群众' },
          { id: 'title', text: '标题' }
        ]
      }
    }
  }
}
</script>
