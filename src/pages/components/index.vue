<template>
  <view class="pi-scroll-container">
    <pi-navbar :border-bottom="false">组件</pi-navbar>
    <scroll-view class="pi-scroll" scroll-y>
      <pi-card v-for="comp in components" :key="comp.name">
        <pi-section slot="title" padding="0" :title="comp.title" />
        <template slot="body">
          <pi-grid square col="3" gap="24">
            <!-- pi-grid-item square 是不用传的，但是头条小程序不支持provide inject，所以这里还是得传-->
            <pi-grid-item
              v-for="(component, index) in comp.components"
              :key="component.name"
              :index="index"
              bg-color="#ffffff"
              square
            >
              <view
                class="pi-h-100P pi-flex-column-center"
                @tap.stop="handleNavigate(component.name)"
              >
                {{ component.zhName }}
              </view>
            </pi-grid-item>
          </pi-grid>
        </template>
      </pi-card>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    components() {
      return [
        {
          name: 'layout',
          title: '布局组件',
          components: [
            {
              name: 'status-bar',
              zhName: '状态栏'
            },
            {
              name: 'bottom-bar',
              zhName: '底部按钮栏'
            },
            {
              name: 'navbar',
              zhName: '导航栏'
            },
            {
              name: 'gap',
              zhName: '间隔槽'
            },
            {
              name: 'section',
              zhName: '区块'
            },
            {
              name: 'grid',
              zhName: '宫格'
            },
            {
              name: 'list',
              zhName: '列表'
            },
            {
              name: 'swiper',
              zhName: '轮播'
            },
            {
              name: 'card',
              zhName: '卡片'
            },
            {
              name: 'waterfall',
              zhName: '瀑布流'
            },
            {
              name: 'tabs',
              zhName: '标签栏'
            },
            {
              name: 'marquee',
              zhName: '跑马灯'
            }
          ]
        },
        {
          name: 'basic',
          title: '基础组件',
          components: [
            {
              name: 'icon',
              zhName: '图标'
            },
            {
              name: 'badge',
              zhName: '徽标'
            },
            {
              name: 'img',
              zhName: '图片'
            },
            {
              name: 'search',
              zhName: '搜索框'
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
              name: 'button',
              zhName: '按钮'
            },
            {
              name: 'line-progress',
              zhName: '线型进度条'
            },
            {
              name: 'count-down',
              zhName: '倒计时'
            },
            {
              name: 'swiper',
              zhName: '轮播图'
            },
            {
              name: 'skeleton',
              zhName: '骨架屏'
            },
            {
              name: 'pagination',
              zhName: '分页组件'
            }
          ]
        },
        {
          name: 'popup',
          title: '弹窗组件',
          components: [
            {
              name: 'mask',
              zhName: '遮罩层'
            },
            {
              name: 'popup',
              zhName: '弹出层'
            },
            {
              name: 'popup-select',
              zhName: '弹出选择'
            },
            {
              name: 'calendar',
              zhName: '日历'
            },
            {
              name: 'select',
              zhName: '选择器'
            },
            {
              name: 'modal',
              zhName: '模态窗'
            },
            {
              name: 'date-picker',
              zhName: '日期选择器'
            },
            {
              name: 'regions-select',
              zhName: '地区选择'
            },
            {
              name: 'picker',
              zhName: '选择器'
            }
          ]
        },
        {
          name: 'form',
          title: '表单组件',
          components: [
            {
              name: 'form',
              zhName: '表单'
            },
            {
              name: 'calendar-panel',
              zhName: '日历面板'
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
              name: 'switch',
              zhName: '开关'
            },
            {
              name: 'code-input',
              zhName: '校验码输入'
            },
            {
              name: 'stepper',
              zhName: '步进器'
            },
            {
              name: 'input',
              zhName: '输入框'
            },
            {
              name: 'rate',
              zhName: '评分'
            },
            {
              name: 'number-keyboard',
              zhName: '数字键盘'
            },
            {
              name: 'upload-img',
              zhName: '图片上传'
            }
          ]
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
