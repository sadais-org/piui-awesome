<template>
  <view class="pi-scroll-container">
    <pi-navbar title="模态窗" />
    <scroll-view class="pi-scroll" scroll-y>
      <!-- 基础用法 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="基础用法" />
        <template slot="body">
          <pi-button type="primary" @click="baseUsed = true">
            显示模态窗
          </pi-button>
        </template>
      </pi-card>
      <!-- 隐藏关闭按钮 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="隐藏关闭按钮" />
        <template slot="body">
          <pi-button type="primary" @click="hideCancelBtn = true">
            显示模态窗
          </pi-button>
        </template>
      </pi-card>
      <!-- 自定义确定按钮 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="自定义确定按钮" />
        <template slot="body">
          <pi-button type="primary" @click="customConfirmBtn = true">
            显示模态窗
          </pi-button>
        </template>
      </pi-card>
      <!-- 自定义取消按钮 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="自定义取消按钮" />
        <template slot="body">
          <pi-button type="primary" @click="customCancelBtn = true">
            显示模态窗
          </pi-button>
        </template>
      </pi-card>
      <!-- 自定义关闭按钮 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="自定义关闭按钮" />
        <template slot="body">
          <pi-button type="primary" @click="customCloseBtn = true">
            显示模态窗
          </pi-button>
        </template>
      </pi-card>
      <!-- 自定义slot -->
      <pi-card>
        <pi-section slot="title" padding="0" title="自定义slot" />
        <template slot="body">
          <pi-button type="primary" @click="customSlot = true">
            显示模态窗
          </pi-button>
        </template>
      </pi-card>
    </scroll-view>
    <pi-modal v-model="baseUsed" />
    <pi-modal
      v-model="hideCancelBtn"
      title="温馨提示"
      content="暂无数据"
      :cancel-btn="{
        show: false
      }"
    />
    <pi-modal
      v-model="customConfirmBtn"
      title="温馨提示"
      content="是否要删除"
      :confirm-btn="{
        text: '删除',
        bgColor: '#ff508a'
      }"
      confirm-text="删除"
      confirm-bg-color="#ff0000"
    />
    <pi-modal
      v-model="customCancelBtn"
      title="温馨提示"
      content="自定义取消按钮"
      :cancel-btn="{
        text: '删除',
        color: '#ffffff',
        bgColor: '#ff508a'
      }"
      :confirm-btn="{
        text: '更新'
      }"
    />
    <pi-modal
      v-model="customCloseBtn"
      title="温馨提示"
      content="定制关闭按钮"
      :popup="{
        closeIcon: {
          name: 'back',
          color: '#333333',
          position: 'tl',
          size: '32'
        }
      }"
    />
    <pi-modal v-model="customSlot" title="请选择时间">
      <pi-calendar-panel v-model="customSlotValue" />
    </pi-modal>
  </view>
</template>

<script>
export default {
  name: 'Modal',
  data() {
    return {
      baseUsed: false,
      hideCancelBtn: false,
      customConfirmBtn: false,
      customCancelBtn: false,
      customCloseBtn: false,
      customSlotValue: '2020-08-08',
      customSlot: false
    }
  }
}
</script>
