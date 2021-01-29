<template>
  <view class="pi-scroll-container">
    <pi-navbar :border-bottom="false">基础样式</pi-navbar>
    <scroll-view class="pi-scroll" scroll-y>
      <view class="pi-content">
        <pi-grid square>
          <pi-grid-item v-for="(style, index) in baseStyles" :key="style.name" :index="index">
            <view class="pi-h-100P pi-flex-column-center" @tap.stop="handleNavigate(style.name)">
              {{ style.zhName }}
            </view>
          </pi-grid-item>
        </pi-grid>
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
    baseStyles() {
      return [
        {
          name: 'icon',
          zhName: '图标'
        },
        {
          name: 'layout',
          zhName: '布局'
        },
        {
          name: 'theme',
          zhName: '主题'
        },
        {
          name: 'font',
          zhName: '字体'
        },
        {
          name: 'border',
          zhName: '边框'
        },
        {
          name: 'grid',
          zhName: '宫格'
        },
        {
          name: 'list',
          zhName: '列表'
        }
      ]
    }
  },
  onLoad() {},
  methods: {
    handleNavigate(name) {
      this.$pi.navi.navigateTo(`pages/base-style/pages/${name}/index`)
    }
  }
}
</script>

<style></style>
