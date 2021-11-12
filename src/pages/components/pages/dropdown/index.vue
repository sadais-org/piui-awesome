<!--
  组件说明：
  参考源：uview下拉菜单
  优势说明：
  1、v-model绑定改为父级绑定，以数组方式传递参数
  2、新增多个Item数据时，可以横向滚动展示，解决内容过多时布局效果
  3、新增选中展示，可将下拉内容标记并展示到一级栏目中并高亮
  4、新增图标自定义设置
  5、点击弹出层基于模块位置定位（uview下拉菜单是永远固定在屏幕上方）
  6、自定义样式
  注意：
  1、注意当前下拉筛选组件的父级层高避免内容被其它元素覆盖，页面多个时可参下Demo中效果实现
-->
<template>
  <view class="pi-scroll-container">
    <pi-navbar title="DropDown" />
    <scroll-view class="pi-scroll" scroll-y>
      <pi-divider />
      <!-- zIndex 处理当前页有多个时，能够不被互相覆盖 -->
      <!-- 多个下拉组件时，不能放到pi-card里面，在小程序z-index无效！！ -->
      <view
        class="pi-rela card pi-mg-24"
        :style="{ zIndex: zIndex === 0 ? 1 : 0 }"
        @click="handleClick(0)"
      >
        <view class="pi-pd-lr-24 pi-solid-bottom-2"><pi-section title="基础用法" /></view>
        <view class="pi-pd-24">
          <pi-dropdown ref="dropdown" v-model="dropdownVal" active-color="#f90">
            <pi-dropdown-item name="综合" icon="order" :option="options1" />
            <pi-dropdown-item name="折扣" :option="options2" />
          </pi-dropdown>
        </view>
      </view>
      <view
        class="pi-rela card pi-mg-24"
        :style="{ zIndex: zIndex === 1 ? 1 : 0 }"
        @click="handleClick(1)"
      >
        <view class="pi-pd-lr-24 pi-solid-bottom-2"><pi-section title="自定义样式" /></view>
        <view class="pi-pd-24">
          <pi-dropdown
            ref="dropdown"
            v-model="dropdownVal1"
            active-color="#f90"
            :custom-style="customStyle"
            :content-style="contentStyle"
            @change="handleChangeVal"
          >
            <pi-dropdown-item name="综合" icon="list" :option="options1" />
            <pi-dropdown-item name="折扣" :option="options2" />
            <pi-dropdown-item name="尺寸大小" :option="options3" />
            <pi-dropdown-item name="其它选项" :option="options4" />
          </pi-dropdown>
        </view>
      </view>
      <view
        class="pi-rela card pi-mg-24"
        :style="{ zIndex: zIndex === 2 ? 1 : 0 }"
        @click="handleClick(2)"
      >
        <view class="pi-pd-lr-24 pi-solid-bottom-2"><pi-section title="插槽使用" /></view>
        <view class="pi-pd-24">
          <pi-dropdown
            ref="dropdown"
            v-model="dropdownVal2"
            active-color="#f90"
            :custom-style="customStyle"
            :content-style="contentStyle"
            :mask="{ background: 'rgba(9, 46, 71, 67%)', duration: 100 }"
            @change="handleChangeVal"
          >
            <pi-dropdown-item name="综合" :option="options1" />
            <pi-dropdown-item name="折扣" :option="options2" />
            <pi-dropdown-item name="自定义项">
              <!-- 插槽内容 -->
              <pi-grid :border="false" col="3" class="pi-mg-top-20">
                <pi-grid-item v-for="index in 6" :key="index" :index="index - 1">
                  <view
                    class="pi-h-100P pi-flex-column-center pi-pd-tb-20"
                    :class="{ 'pi-bg-fourth pi-white': index === chooseIndex }"
                    @tap="handleSelect('选项', index)"
                  >
                    选项{{ index }}
                  </view>
                </pi-grid-item>
              </pi-grid>
              <view class="pi-pd-30 pi-text-right">
                <pi-button width="100%" type="primary" size="medium" @click="handleCloseDropdown">
                  确定
                </pi-button>
              </view>
              <!-- 插槽内容 End -->
            </pi-dropdown-item>
          </pi-dropdown>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'DropDown',
  data() {
    return {
      zIndex: 0, // 页面存在多个时，需要把外层容器设置层高
      dropdownVal: [], // 绑定默认值
      dropdownVal1: [1, 3, ''], // 绑定默认值
      dropdownVal2: ['', 2, ''], // 绑定默认值
      // option 数据
      options1: [
        {
          name: '默认排序',
          id: 1
        },
        {
          name: '信用',
          id: 2
        },
        {
          name: '价格优先',
          id: 3
        }
      ],
      options2: [
        {
          name: '包邮',
          id: 1
        },
        {
          name: '全球购',
          id: 2
        },
        {
          name: '半折',
          id: 3
        },
        {
          name: '免费包邮',
          id: 4
        },
        {
          name: '折扣排序',
          id: 5
        }
      ],
      options3: [
        {
          name: '小',
          id: 1
        },
        {
          name: '中',
          id: 2
        },
        {
          name: '大',
          id: 3
        }
      ],
      options4: [
        {
          name: '你点我试试',
          id: 1
        },
        {
          name: '还可以吧',
          id: 2
        }
      ],
      customStyle: {
        height: '80rpx',
        background: '#fff',
        borderRadius: '14rpx'
      },
      contentStyle: {
        background: '#f5f5f5',
        borderRadius: '14rpx',
        overflow: 'hidden'
      },
      // 插槽内容
      chooseIndex: '',
      selectVal: ''
    }
  },
  methods: {
    // 操作变更结果
    handleChangeVal(val) {
      console.log('选择结果', val)
    },
    // 设置父窗口层高，解决页面多个时覆盖问题
    handleClick(val) {
      this.zIndex = val
    },
    // 选择对应的select项
    handleSelect(text, index) {
      this.selectVal = text + index
      this.chooseIndex = index
    },
    // 自定义插槽内容触发关闭事件
    handleCloseDropdown() {
      // 找到对应的下标插入
      this.selectVal && this.$pi.toast.info(this.selectVal)
      this.$refs.dropdown.closeMask()
    }
  }
}
</script>

<style scoped>
.card {
  background: #ffffff;
  border-radius: 24rpx;
  box-shadow: 0 2rpx 16rpx 0 #edeef1;
}
</style>
