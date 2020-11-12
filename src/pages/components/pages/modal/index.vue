<template>
  <view class="pi-scroll-container">
    <pi-navbar title="模态窗" />
    <scroll-view class="pi-scroll" scroll-y>
      <view class="pi-content">
        <pi-button type="primary" custom-class="pi-mg-top-12" @tap="handleShowModal">
          显示
        </pi-button>
      </view>
    </scroll-view>
    <pi-modal v-model="showModal" border-radius="20" title="温馨提示" />
  </view>
</template>

<script>
export default {
  name: 'Modal',
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    handleShowModal() {
      this.showModal = true
    }
  }
}
</script>
