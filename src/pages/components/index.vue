<template>
  <view class="pi-scroll-container">
    <view class="pi-grid-2 border">
      <view v-for="components in baseComponents" :key="components.name">
        <view class=" pi-square" @tap.stop="handleNavigate(components.name)">
          <view class="pi-flex-column-center">{{ components.zhName }}</view>
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
      this.$piTools.navi.navigateTo(`pages/components/pages/${name}/index`)
    }
  }
}
</script>

<style></style>
