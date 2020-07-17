<template>
  <view class="pi-scroll-container">
    <pi-navbar />
    <view class="pi-grid-2 border">
      <view v-for="style in baseStyles" :key="style.name">
        <view class=" pi-square" @tap.stop="handleNavigate(style.name)">
          <view class="pi-flex-column-center">{{ style.zhName }}</view>
        </view>
      </view>
    </view>
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
          name: 'gird',
          zhName: '宫格'
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
