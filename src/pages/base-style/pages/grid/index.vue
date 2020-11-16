<template>
  <view class="pi-scroll-container">
    <pi-navbar title="grid宫格布局" />
    <scroll-view class="pi-scroll" scroll-y>
      <view class="pi-content">
        <pi-section title="系统功能（一行四列）" />
        <pi-grid square col="4">
          <pi-grid-item v-for="glyph in demo1" :key="glyph.id">
            <view class="pi-h-100P pi-flex-column-center">
              <pi-icon :name="glyph.font_class" custom-class="pi-primary pi-fz-48" dot />
              <view class="pi-fz-24 pi-mg-top-8 pi-light-gray pi-text-nowrap">
                {{ glyph.name }}
              </view>
            </view>
          </pi-grid-item>
        </pi-grid>
        <pi-section title="系统功能（一行三列）" />
        <pi-grid square col="3">
          <pi-grid-item v-for="glyph in demo2" :key="glyph.id">
            <view class="pi-h-100P pi-flex-column-center">
              <pi-icon :name="glyph.font_class" custom-class="pi-primary pi-fz-48" dot />
              <view class="pi-fz-24 pi-mg-top-8 pi-light-gray pi-text-nowrap">
                {{ glyph.name }}
              </view>
            </view>
          </pi-grid-item>
        </pi-grid>
        <pi-section title="系统功能（一行三列无边框）" />
        <pi-grid square col="3" :border="false">
          <pi-grid-item v-for="glyph in demo2" :key="glyph.id">
            <view class="pi-h-100P pi-flex-column-center">
              <pi-icon :name="glyph.font_class" custom-class="pi-primary pi-fz-48" dot />
              <view class="pi-fz-24 pi-mg-top-8 pi-light-gray pi-text-nowrap">
                {{ glyph.name }}
              </view>
            </view>
          </pi-grid-item>
        </pi-grid>
        <pi-section title="系统功能（一行四列）" desc="宫格间隔12px（带边框）" />
        <pi-grid square col="4" gap="12">
          <pi-grid-item v-for="(glyph, index) in demo1" :key="glyph.id" :index="index">
            <view class="pi-h-100P pi-flex-column-center">
              <pi-icon :name="glyph.font_class" custom-class="pi-primary pi-fz-48" dot />
              <view class="pi-fz-24 pi-mg-top-8 pi-light-gray pi-text-nowrap">
                {{ glyph.name }}
              </view>
            </view>
          </pi-grid-item>
        </pi-grid>
        <pi-section title="系统功能（一行四列）" desc="宫格间隔12px（背景灰色）" :line="false" />
        <pi-grid square col="4" gap="12">
          <pi-grid-item
            v-for="(glyph, index) in demo1"
            :key="glyph.id"
            :index="index"
            bg-color="#f5f5f5"
            :border="false"
          >
            <view class="pi-h-100P pi-flex-column-center">
              <pi-icon :name="glyph.font_class" custom-class="pi-primary pi-fz-48" dot />
              <view class="pi-fz-24 pi-mg-top-8 pi-light-gray pi-text-nowrap">
                {{ glyph.name }}
              </view>
            </view>
          </pi-grid-item>
        </pi-grid>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Grid',
  data() {
    return {
      demo1: [
        {
          icon_id: '7008885',
          name: '活动日程',
          font_class: 'activity-fill',
          unicode: 'e6df',
          unicode_decimal: 59103
        },
        {
          icon_id: '6184755',
          name: '过滤器',
          font_class: 'filter-fill',
          unicode: 'e8c3',
          unicode_decimal: 59587
        },
        {
          icon_id: '15854981',
          name: '消息',
          font_class: 'message-copy',
          unicode: 'e8c5',
          unicode_decimal: 59589
        },
        {
          icon_id: '4503673',
          name: '过滤',
          font_class: 'filter',
          unicode: 'e6c7',
          unicode_decimal: 59079
        },
        {
          icon_id: '9489063',
          name: '不可见',
          font_class: 'eyeclose-fill',
          unicode: 'e65d',
          unicode_decimal: 58973
        },
        {
          icon_id: '4687294',
          name: '可见',
          font_class: 'eye',
          unicode: 'e60c',
          unicode_decimal: 58892
        },
        {
          icon_id: '7008886',
          name: '增加',
          font_class: 'add',
          unicode: 'e6e4',
          unicode_decimal: 59108
        },
        {
          icon_id: '7008884',
          name: '活动信息',
          font_class: 'activity',
          unicode: 'e6de',
          unicode_decimal: 59102
        }
      ],
      demo2: [
        {
          icon_id: '7008885',
          name: '活动日程',
          font_class: 'activity-fill',
          unicode: 'e6df',
          unicode_decimal: 59103
        },
        {
          icon_id: '6184755',
          name: '过滤器',
          font_class: 'filter-fill',
          unicode: 'e8c3',
          unicode_decimal: 59587
        },
        {
          icon_id: '15854981',
          name: '消息',
          font_class: 'message-copy',
          unicode: 'e8c5',
          unicode_decimal: 59589
        },
        {
          icon_id: '4503673',
          name: '过滤',
          font_class: 'filter',
          unicode: 'e6c7',
          unicode_decimal: 59079
        },
        {
          icon_id: '9489063',
          name: '不可见',
          font_class: 'eyeclose-fill',
          unicode: 'e65d',
          unicode_decimal: 58973
        },
        {
          icon_id: '4687294',
          name: '可见',
          font_class: 'eye',
          unicode: 'e60c',
          unicode_decimal: 58892
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
