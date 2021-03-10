<template>
  <view class="pi-scroll-container">
    <pi-navbar title="模态窗" />
    <scroll-view class="pi-scroll" scroll-y>
      <view class="pi-content pi-flex-wrap">
        <pi-button type="primary" @tap="handleShowModal">
          显示
        </pi-button>
        <pi-button type="primary" custom-class="pi-mg-left-12" @tap="showModal2 = true">
          定制确定按钮背景色
        </pi-button>
      </view>
    </scroll-view>
    <pi-modal
      v-model="showModal"
      title="温馨提示"
      content="是否要升级版本"
      confirm-text="升级"
      @confirm="handleUpdate"
    />
    <pi-modal
      v-model="showModal2"
      title="温馨提示"
      content="是否要删除"
      confirm-text="删除"
      confirm-bg-color="#ff0000"
      @confirm="handleDelete"
    />
  </view>
</template>

<script>
export default {
  name: 'Modal',
  data() {
    return {
      showModal: false,
      showModal2: false
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
    }
  }
}
</script>
