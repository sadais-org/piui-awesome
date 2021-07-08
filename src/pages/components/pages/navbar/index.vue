<template>
  <view class="pi-scroll-container">
    <pi-navbar
      title="自定义导航栏"
      :show-back="true"
      back-text="返回"
      show-home
      capsule-theme="dark"
      back-icon-color="#333333"
      home-icon-color="#333333"
    />
    <scroll-view class="pi-scroll" scroll-y="">
      <pi-section title="取消固定在顶部" custom-class="pi-mg-top-10" />
      <pi-navbar title="取消fixed" :fixed="false" />
      <pi-navbar
        show-back
        through-title-width="400"
        title="超长导航栏，自动剪裁添加省略号"
        :fixed="false"
      />
      <pi-section title="自定义返回按钮" custom-class="pi-mg-top-10" />
      <pi-navbar back-icon-name="barrage" :fixed="false" :show-back="true">
        自定义返回图标
      </pi-navbar>
      <pi-navbar back-icon-name="barrage" back-text="笔芯" :fixed="false" :show-back="true">
        自定义返回名称
      </pi-navbar>
      <pi-navbar :show-back="false" :fixed="false">无返回</pi-navbar>
      <pi-section title="自定义导航栏样式" custom-class="pi-mg-top-10" />
      <pi-navbar
        back-icon-name="barrage"
        back-text="笔芯"
        background="linear-gradient(to right, #c0c0aa, #1cefff)"
        :fixed="false"
        :show-back="true"
      >
        自定义背景颜色
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
        :show-back="true"
      />
      <pi-section title="插槽用法" custom-class="pi-mg-top-10" />
      <pi-navbar :fixed="false" :show-back="true">
        <view>默认插槽</view>
      </pi-navbar>
      <pi-navbar :fixed="false" title="左边插槽">
        <view slot="left" class="pi-pd-left-24 pi-icon-add pi-fz-46 pi-primary" />
      </pi-navbar>
      <pi-navbar :fixed="false" title="右边插槽" :show-back="true">
        <view slot="right" class="pi-pd-right-24 pi-icon-add pi-fz-46 pi-primary" />
      </pi-navbar>
      <pi-section title="示例--搜索导航栏" custom-class="pi-mg-top-10" />
      <pi-navbar :fixed="false">
        <pi-search slot="title" show-action :action-style="{ paddingRight: '18rpx' }" />
      </pi-navbar>
      <pi-section title="示例--分页导航栏" custom-class="pi-mg-top-10" />
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
