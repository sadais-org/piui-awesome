<template>
  <view class="pi-scroll-container">
    <pi-navbar />
    <scroll-view class="pi-scroll" scroll-y>
      <view class="pi-grid-2 border">
        <view v-for="components in baseComponents" :key="components.name">
          <view class=" pi-square" @tap.stop="handleNavigate(components.name)">
            <view class="pi-flex-column-center">{{ components.zhName }}</view>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello4'
    }
  },
  computed: {
    baseComponents() {
      return [
        {
          name: 'navbar',
          zhName: '自定义导航栏'
        },
        {
          name: 'search',
          zhName: '搜索框'
        },
        {
          name: 'mask',
          zhName: '遮罩层'
        },
        {
          name: 'popup',
          zhName: '弹出层'
        },
        {
          name: 'divider',
          zhName: '分割线'
        },
        {
          name: 'loading',
          zhName: '加载中'
        },
        {
          name: 'calender',
          zhName: '日历'
        }
      ]
    }
  },
  onLoad() {},
  methods: {
    handleNavigate(name) {
      this.$piTools.navi.navigateTo(`pages/components/pages/${name}/index`)
    }
  }
}
</script>

<style></style>
