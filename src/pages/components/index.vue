<template>
  <view class="pi-scroll-container">
    <pi-navbar :border-bottom="false">组件</pi-navbar>
    <scroll-view class="pi-scroll" scroll-y>
      <view class="pi-content">
        <pi-grid square col="3" gap="24">
          <!-- pi-grid-item square 是不用传的，但是头条小程序不支持provide inject，所以这里还是得传-->
          <pi-grid-item
            v-for="(components, index) in baseComponents"
            :key="components.name"
            :index="index"
            bg-color="#ffffff"
            square
          >
            <view
              class="pi-h-100P pi-flex-column-center"
              @tap.stop="handleNavigate(components.name)"
            >
              {{ components.zhName }}
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
    return {}
  },
  computed: {
    baseComponents() {
      return [
        {
          name: 'navbar',
          zhName: '导航栏'
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
          name: 'calendar-panel',
          zhName: '日历面板'
        },
        {
          name: 'calendar',
          zhName: '日历'
        },
        {
          name: 'button',
          zhName: '按钮'
        },
        {
          name: 'select',
          zhName: '选择器'
        },
        {
          name: 'img',
          zhName: '图片'
        },
        {
          name: 'modal',
          zhName: '模态窗'
        },
        {
          name: 'checkbox',
          zhName: '复选框'
        },
        {
          name: 'radio',
          zhName: '单选框'
        },
        {
          name: 'tabs',
          zhName: '标签栏'
        },
        {
          name: 'switch',
          zhName: '开关'
        },
        {
          name: 'section',
          zhName: '分块'
        },
        {
          name: 'line-progress',
          zhName: '线型进度条'
        },
        {
          name: 'gap',
          zhName: '间隔槽'
        },
        {
          name: 'count-down',
          zhName: '倒计时'
        },
        {
          name: 'date-picker',
          zhName: '日期选择器'
        },
        {
          name: 'swiper',
          zhName: '轮播图'
        },
        {
          name: 'regions-select',
          zhName: '地区选择'
        },
        {
          name: 'picker',
          zhName: '选择器'
        },
        {
          name: 'stepper',
          zhName: '步进器'
        },
        {
          name: 'code-input',
          zhName: '校验码输入'
        },
        {
          name: 'form',
          zhName: '表单'
        },
        {
          name: 'input',
          zhName: '输入框'
        },
        {
          name: 'skeleton',
          zhName: '骨架屏'
        },
        {
          name: 'rate',
          zhName: '评分'
        },
        {
          name: 'waterfall',
          zhName: '瀑布流'
        },
        {
          name: 'number-keyboard',
          zhName: '数字键盘'
        },
        {
          name: 'status-bar',
          zhName: '状态栏'
        },
        {
          name: 'bottom-bar',
          zhName: '底部按钮栏'
        },
        {
          name: 'list',
          zhName: '列表'
        },
        {
          name: 'card',
          zhName: '卡片'
        }
      ]
    }
  },
  onLoad() {},
  methods: {
    handleNavigate(name) {
      this.$pi.navi.navigateTo(`pages/components/pages/${name}/index`)
    }
  }
}
</script>
