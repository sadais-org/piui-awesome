<template>
  <view class="pi-scroll-container">
    <view class="pi-grid-2 border">
      <view v-for="style in baseStyles" :key="style.name">
        <view class=" pi-square" @tap.stop="handleNavigate">
          <view class="pi-flex-column-center">{{ style.zhName }}</view>
        </view>
      </view>
    </view>
    <view class="pi-fixed-bottom pd-bottom-20">
      <text class="pi-fz-20">{{ title }}</text>
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
  methods: {}
}
</script>

<style></style>
