<template>
  <view class="pi-scroll-container">
    <pi-navbar title="模态窗" />
    <scroll-view class="pi-scroll" scroll-y>
      <view class="pi-content">
        <pi-section title="基础弹窗" />
        <pi-button type="primary" @click="handleShowModal">显示</pi-button>
        <pi-section title="自定义确定按钮" />
        <pi-button type="primary" @click="showModal2 = true">定制确定按钮</pi-button>
        <pi-section title="自定义取消按钮" />
        <pi-button type="primary" @click="showModal3 = true">定制取消按钮</pi-button>
        <pi-section title="自定义关闭按钮" />
        <pi-button type="primary" @click="showModal4 = true">隐藏关闭按钮</pi-button>
        <pi-button type="primary" @click="showModal5 = true">定制关闭按钮</pi-button>
      </view>
    </scroll-view>
    <pi-modal
      v-model="showModal"
      title="温馨提示"
      content="是否要升级版本"
      confirm-text="升级"
      @cancel="handleCancel"
      @confirm="handleUpdate"
    />
    <pi-modal
      v-model="showModal2"
      title="温馨提示"
      content="是否要删除"
      :confirm-btn="{
        text: '删除',
        bgColor: '#ff0000'
      }"
      confirm-text="删除"
      confirm-bg-color="#ff0000"
      @confirm="handleDelete"
    />
    <pi-modal
      v-model="showModal3"
      title="温馨提示"
      content="暂无数据"
      :cancel-btn="{
        text: '返回',
        color: '#FFFFFF',
        bgColor: '#5A7DFF'
      }"
      :confirm-btn="{
        show: false
      }"
      @cancel="handleCancel"
    />
    <pi-modal
      v-model="showModal4"
      title="温馨提示"
      content="隐藏关闭按钮"
      :popup="{
        showCloseIcon: false
      }"
    />
    <pi-modal
      v-model="showModal5"
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
  </view>
</template>

<script>
export default {
  name: 'Modal',
  data() {
    return {
      showModal: false,
      showModal2: false,
      showModal3: false,
      showModal4: false,
      showModal5: false
    }
  },
  methods: {
    handleShowModal() {
      this.showModal = true
    },
    handleUpdate() {
      console.log('点击升级了')
    },
    handleDelete() {
      console.log('delete')
    },
    handleCancel() {
      console.log('点击了返回')
    }
  }
}
</script>
