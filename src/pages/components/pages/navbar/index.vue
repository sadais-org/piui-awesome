<template>
  <view class="pi-scroll-container">
    <pi-navbar
      title="自定义导航栏"
      show-home
      capsule-theme="dark"
      back-icon-color="#333333"
      home-icon-color="#333333"
      background="transparent"
      :title-style="{ fontSize: '36rpx', fontWeight: 500, color: '#333333' }"
      :custom-style="{
        background: 'url(http://huozi.sadais.com/img/banner_bg.png) no-repeat 100% 100%'
      }"
    />
    <scroll-view class="pi-scroll" scroll-y="">
      <pi-navbar title="取消fixed" back-text="返回" :fixed="false" />
      <pi-navbar back-icon-name="barrage" :fixed="false">自定义图标</pi-navbar>
      <pi-navbar back-icon-name="barrage" back-text="笔芯" :fixed="false">
        自定义返回名称
      </pi-navbar>
      <pi-navbar :show-back="false" :fixed="false">
        无返回
      </pi-navbar>
      <pi-navbar
        back-icon-name="barrage"
        back-text="笔芯"
        background="linear-gradient(to right, #c0c0aa, #1cefff)"
        :fixed="false"
      >
        自定义背景色
      </pi-navbar>
      <pi-navbar
        back-icon-name="barrage"
        back-text="大笔芯"
        background="linear-gradient(to top, #200122, #6f0000)"
        back-icon-color="#ffffff"
        back-icon-size="48rpx"
        :back-text-style="{ color: '#ffffff' }"
        title="自定义导航文字"
        :title-style="{ fontSize: '48rpx', fontWeight: 500, color: '#ffffff' }"
        :fixed="false"
      />
      <pi-navbar :fixed="false">
        <view>default slot</view>
      </pi-navbar>
      <pi-navbar :fixed="false" :show-home="true">
        <view>显示主页按钮</view>
      </pi-navbar>
      <pi-navbar :fixed="false" title="slot right">
        <view slot="right" class=" pi-pd-right-24 pi-icon-add pi-fz-46 pi-primary" />
      </pi-navbar>
      <pi-navbar :fixed="false" title="slot left">
        <view slot="left" class=" pi-pd-left-24 pi-icon-add pi-fz-46 pi-primary" />
      </pi-navbar>
      <pi-navbar :fixed="false">
        <pi-search slot="title" show-action :action-style="{ paddingRight: '18rpx' }" />
      </pi-navbar>
      <pi-navbar :fixed="false">
        <pi-tabs v-model="demo2.currentItem" :items="demo2.tabItems" slider-bar-width="60" />
      </pi-navbar>
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

<style></style>
