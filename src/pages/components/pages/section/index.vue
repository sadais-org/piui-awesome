<template>
  <view class="pi-scroll-container">
    <pi-navbar title="section" />
    <scroll-view class="pi-scroll" scroll-y="">
      <!-- 基础用法 -->
      <pi-card>
        <template slot="body">
          <pi-section title="基础用法" />
        </template>
      </pi-card>
      <!-- 带描述 -->
      <pi-card>
        <template slot="body">
          <pi-section title="基础用法" desc="带描述" />
        </template>
      </pi-card>
      <!-- 显示右箭头 -->
      <pi-card>
        <template slot="body">
          <pi-section title="显示右箭头" extra-text="更多" show-right-icon />
        </template>
      </pi-card>
      <!-- 隐藏左侧竖线 -->
      <pi-card>
        <template slot="body">
          <pi-section title="隐藏左侧竖线" extra-text="更多" :line="false" show-right-icon />
        </template>
      </pi-card>
      <!-- 自定义左侧竖线样式 -->
      <pi-card>
        <template slot="body">
          <pi-section
            title="自定义左侧竖线样式"
            extra-text="更多"
            :line-style="{ width: '12rpx', backgroundColor: '#ff508a' }"
            show-right-icon
          />
        </template>
      </pi-card>
      <!-- 显示下边框 -->
      <pi-card>
        <template slot="body">
          <pi-section title="显示下边框" extra-text="更多" border show-right-icon />
        </template>
      </pi-card>
      <!-- 自定义标题 -->
      <pi-card>
        <template slot="body">
          <pi-section show-right-icon>
            <pi-loading show />
            <text>自定义标题</text>
          </pi-section>
        </template>
      </pi-card>
      <!-- 自定义右侧箭头 -->
      <pi-card>
        <template slot="body">
          <pi-section
            title="自定义右侧箭头"
            show-right-icon
            :right-icon="{ name: 'next', color: '#cccccc' }"
          />
        </template>
      </pi-card>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Search'
}
</script>
