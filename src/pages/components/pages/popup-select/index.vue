<template>
  <view class="pi-scroll-container">
    <pi-navbar title="弹出选择" />
    <scroll-view class="pi-scroll" scroll-y>
      <!-- 基础用法 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="基础用法" />
        <template slot="body">
          <pi-button type="primary" @click="baseUsed = true">
            显示弹出选择
          </pi-button>
        </template>
      </pi-card>
      <!-- 自定义高度 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="自定义高度" desc="height: 400rpx" />
        <template slot="body">
          <pi-button type="primary" @click="customHeight = true">
            显示弹出选择
          </pi-button>
        </template>
      </pi-card>
      <!-- 顶部操作栏 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="顶部操作栏" desc="toolbarPosition: 'top'" />
        <template slot="body">
          <pi-button type="primary" @click="toolbarPosition = true">
            显示弹出选择
          </pi-button>
        </template>
      </pi-card>
      <!-- 显示标题 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="显示标题" desc="showTitle: true" />
        <template slot="body">
          <pi-button type="primary" @click="showTitle = true">
            显示弹出选择
          </pi-button>
        </template>
      </pi-card>
      <!-- 显示取消按钮 -->
      <pi-card>
        <pi-section
          slot="title"
          padding="0"
          title="显示取消按钮"
          desc="cancel-btn: { show: true }"
        />
        <template slot="body">
          <pi-button type="primary" @click="showCancelBtn = true">
            显示弹出选择
          </pi-button>
        </template>
      </pi-card>
      <!-- 自定义底部按钮 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="自定义底部按钮" />
        <template slot="body">
          <pi-button type="primary" @click="customBtns = true">
            显示弹出选择
          </pi-button>
        </template>
      </pi-card>
    </scroll-view>
    <pi-popup-select v-model="baseUsed" />
    <pi-popup-select v-model="customHeight" height="400rpx" />
    <pi-popup-select v-model="toolbarPosition" toolbar-position="top" />
    <pi-popup-select v-model="showTitle" show-title />
    <pi-popup-select v-model="showCancelBtn" :cancel-btn="{ show: true }" />
    <pi-popup-select
      v-model="customBtns"
      :confirm-btn="{ show: true, type: 'warn', round: true }"
      :cancel-btn="{ show: true, type: 'line', round: true }"
    />
  </view>
</template>

<script>
export default {
  name: 'Select',
  data() {
    return {
      baseUsed: false,
      customHeight: false,
      toolbarPosition: false,
      showTitle: false,
      showCancelBtn: false,
      customBtns: false
    }
  }
}
</script>
