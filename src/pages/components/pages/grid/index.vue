<template>
  <view class="pi-scroll-container">
    <pi-navbar title="grid宫格布局" />
    <scroll-view class="pi-scroll" scroll-y>
      <!-- 基础用法 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="基础用法" desc="一行4列 col:4" />
        <template slot="body">
          <pi-grid square col="4" :gap="13">
            <pi-grid-item v-for="index in 12" :key="index" :index="index - 1">
              <view class="pi-h-100P pi-flex-column-center">{{ index }}</view>
            </pi-grid-item>
          </pi-grid>
        </template>
      </pi-card>
      <!-- 九宫格 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="九宫格" desc="col:3" />
        <template slot="body">
          <pi-grid square col="3">
            <pi-grid-item v-for="index in 9" :key="index" :index="index - 1">
              <view class="pi-h-100P pi-flex-column-center">{{ index }}</view>
            </pi-grid-item>
          </pi-grid>
        </template>
      </pi-card>
      <!-- 每列间隔 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="每列间隔" desc="col:6 gap:20" />
        <template slot="body">
          <pi-grid square col="6" :gap="20">
            <pi-grid-item v-for="index in 18" :key="index" :index="index - 1">
              <view class="pi-h-100P pi-flex-column-center">{{ index }}</view>
            </pi-grid-item>
          </pi-grid>
        </template>
      </pi-card>
      <!-- 隐藏边框 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="隐藏边框" desc="border: false" />
        <template slot="body">
          <pi-grid :border="false" square col="5">
            <pi-grid-item v-for="index in 15" :key="index" :index="index - 1">
              <view class="pi-h-100P pi-flex-column-center">{{ index }}</view>
            </pi-grid-item>
          </pi-grid>
        </template>
      </pi-card>
      <!-- 菜单图标 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="菜单图标" desc="slot pi-icon" />
        <template slot="body">
          <pi-grid square col="4" :gap="13">
            <pi-grid-item v-for="(icon, index) in icons" :key="icon.id" :index="index">
              <view class="pi-h-100P pi-flex-column-center">
                <pi-icon :name="icon.font_class" custom-class="pi-primary pi-fz-48" dot />
                <view class="pi-fz-24 pi-mg-top-8 pi-light-gray pi-text-nowrap">
                  {{ icon.name }}
                </view>
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
  name: 'Grid',
  data() {
    return {
      icons: [
        {
          name: '活动日程',
          font_class: 'activity-fill'
        },
        {
          name: '过滤器',
          font_class: 'filter-fill'
        },
        {
          name: '消息',
          font_class: 'message-copy'
        },
        {
          name: '过滤',
          font_class: 'filter'
        },
        {
          name: '不可见',
          font_class: 'eyeclose-fill'
        },
        {
          name: '可见',
          font_class: 'eye'
        },
        {
          name: '增加',
          font_class: 'add'
        },
        {
          name: '活动信息',
          font_class: 'activity'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
