<template>
  <view class="pi-scroll-container">
    <pi-navbar title="Rate评分" />
    <scroll-view class="pi-scroll" scroll-y="">
      <pi-card padding="0">
        <pi-section slot="title" padding="24">基础用法：{{ syncRate }}分</pi-section>
        <template slot="body">
          <view class="pi-pd-24">
            <pi-rate v-model="syncRate" />
          </view>
        </template>
      </pi-card>

      <pi-card padding="0">
        <pi-section slot="title" padding="24">自定义颜色</pi-section>
        <template slot="body">
          <view class="pi-pd-24">
            <view class="pi-align-center">
              未选中 ( unselectedColor )：
              <pi-rate v-model="syncRate1" unselected-color="#ff2d51" />
            </view>
            <view class="pi-align-center pi-mg-tb-16">
              选中 ( selectedColor )：
              <pi-rate v-model="syncRate1" selected-color="#ff508a" />
            </view>
            <view class="pi-align-center pi-mg-tb-16">
              两者都有：
              <pi-rate v-model="syncRate1" unselected-color="#ff2d51" selected-color="#ff508a" />
            </view>
          </view>
        </template>
      </pi-card>

      <pi-card padding="0">
        <pi-section slot="title" padding="24">自定义图标</pi-section>
        <template slot="body">
          <view class="pi-pd-24">
            <view class="pi-align-center">
              未选中 ( unselectedIcon )：
              <pi-rate v-model="syncRate2" unselected-icon="praise" />
            </view>
            <view class="pi-align-center pi-mg-tb-16">
              选中 ( selectedIcon )：
              <pi-rate v-model="syncRate2" selected-icon="praise" selected-color="#ff508a" />
            </view>
            <view class="pi-align-center pi-mg-tb-16">
              两者都有：
              <pi-rate
                v-model="syncRate2"
                unselected-icon="praise"
                selected-icon="praise-fill"
                unselected-color="#ff2d51"
                selected-color="#ff508a"
              />
            </view>
          </view>
        </template>
      </pi-card>

      <pi-card padding="0">
        <pi-section slot="title" padding="24" desc="size设置图标大小">自定义大小</pi-section>
        <template slot="body">
          <view class="pi-pd-24">
            <view class="pi-align-center">
              size = "24"：
              <pi-rate v-model="syncRate" size="24" />
            </view>
            <view class="pi-align-center pi-mg-tb-16">
              size = "48"：
              <pi-rate v-model="syncRate" size="48" />
            </view>
            <view class="pi-align-center pi-mg-tb-16">
              size = "72"：
              <pi-rate v-model="syncRate" size="72" />
            </view>
          </view>
        </template>
      </pi-card>

      <pi-card padding="0">
        <pi-section slot="title" padding="24" desc="count设置图标数量">自定义数量</pi-section>
        <template slot="body">
          <view class="pi-pd-24">
            <view class="pi-align-center">
              count = "5"：
              <pi-rate v-model="syncRate3" :count="5" />
            </view>
            <view class="pi-align-center pi-mg-tb-16">
              count = "8"：
              <pi-rate v-model="syncRate3" :count="8" />
            </view>
            <view class="pi-align-center pi-mg-tb-16">
              count = "10"：
              <pi-rate v-model="syncRate3" :count="10" />
            </view>
          </view>
        </template>
      </pi-card>

      <pi-card padding="0">
        <pi-section slot="title" padding="24" desc="gutter设置图标间距">图标间距</pi-section>
        <template slot="body">
          <view class="pi-pd-24">
            <view class="pi-align-center">
              gutter = "20"：
              <pi-rate v-model="syncRate3" :gutter="20" />
            </view>
            <view class="pi-align-center pi-mg-tb-16">
              gutter = "40"：
              <pi-rate v-model="syncRate3" :gutter="40" />
            </view>
            <view class="pi-align-center pi-mg-tb-16">
              gutter = "60"：
              <pi-rate v-model="syncRate3" :gutter="60" />
            </view>
          </view>
        </template>
      </pi-card>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Rate',
  data() {
    return {
      syncRate: 3,
      syncRate1: 3,
      syncRate2: 3,
      syncRate3: 3,
      disRate: 2
    }
  }
}
</script>
