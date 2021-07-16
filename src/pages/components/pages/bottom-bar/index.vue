<template>
  <view class="pi-scroll-container">
    <pi-navbar title="底部按钮栏" />
    <scroll-view class="pi-scroll" scroll-y>
      <pi-card padding="0">
        <pi-section slot="title" padding="24" title="底部双按钮" />
        <template slot="body">
          <pi-bottom-bar border-top="none" custom-class="pi-align-center">
            <pi-button type="secondary" style="width: 50%;" width="100%" class="pi-mg-right-24">
              忽略
            </pi-button>
            <pi-button type="primary" style="width: 50%;" width="100%">确认</pi-button>
          </pi-bottom-bar>
        </template>
      </pi-card>

      <pi-card padding="0">
        <pi-section slot="title" padding="24" title="底部三按钮" />
        <template slot="body">
          <pi-bottom-bar border-top="none" custom-class="pi-align-center">
            <pi-button type="secondary" style="width: 50%;" width="100%" class="pi-mg-right-24">
              忽略
            </pi-button>
            <pi-button type="warn" style="width: 50%;" width="100%" class="pi-mg-right-24">
              销毁
            </pi-button>
            <pi-button type="primary" style="width: 50%;" width="100%">确认</pi-button>
          </pi-bottom-bar>
        </template>
      </pi-card>

      <pi-card v-for="item in 99" :key="item" :title="item + '. 标题'">{{ item }}</pi-card>
    </scroll-view>
    <pi-bottom-bar>
      <pi-button type="primary" width="100%">确认</pi-button>
    </pi-bottom-bar>
  </view>
</template>

<script>
export default {
  name: 'BottomBar'
}
</script>

<style lang="scss" scoped></style>
