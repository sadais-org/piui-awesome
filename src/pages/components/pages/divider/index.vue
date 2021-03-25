<template>
  <view class="pi-scroll-container">
    <pi-navbar title="分割线" />
    <scroll-view class="pi-scroll" scroll-y="">
      <view class="pi-content">
        <pi-section>基础示例</pi-section>
        <pi-divider>标题</pi-divider>
        <pi-divider :custom-style="{ margin: '20rpx 0' }">
          <p>
            ------
            <br />
            内容
            <br />
            ------
          </p>
        </pi-divider>
        <pi-section>分割线颜色</pi-section>
        <pi-divider
          border-color="#ff5500"
          content-position="left"
          :custom-style="{ margin: '48rpx 0' }"
        >
          #FF5500
        </pi-divider>
        <pi-divider
          border-color="#0b65d1"
          content-position="left"
          :custom-style="{ margin: '48rpx 0' }"
        >
          #0B65D1
        </pi-divider>
        <pi-divider
          border-color="#e02020"
          content-position="left"
          :custom-style="{ margin: '48rpx 0' }"
        >
          #E02020
        </pi-divider>

        <pi-section>插槽位置</pi-section>
        <pi-divider content-position="left" :custom-style="{ margin: '48rpx 0' }">
          content left
        </pi-divider>
        <pi-divider content-position="center" :custom-style="{ margin: '48rpx 0' }">
          content center
        </pi-divider>
        <pi-divider content-position="right" :custom-style="{ margin: '48rpx 0' }">
          content right
        </pi-divider>

        <pi-section>分割线样式</pi-section>
        <pi-divider
          :halfline="false"
          border-style="dashed"
          content-position="left"
          :custom-style="{ margin: '48rpx 0' }"
        >
          dashed
        </pi-divider>
        <pi-divider
          :halfline="false"
          border-style="dotted"
          content-position="left"
          :custom-style="{ margin: '48rpx 0' }"
        >
          dotted
        </pi-divider>
        <pi-divider
          :halfline="false"
          border-style="groove"
          content-position="left"
          :custom-style="{ margin: '48rpx 0' }"
        >
          groove
        </pi-divider>
        <pi-section>自定义样式</pi-section>
        <pi-divider border-color="#ff508a" :custom-style="{ margin: '48rpx 0' }">
          <view class="pi-fz-48 pi-fw-500 pi-gray">自定义分割线</view>
        </pi-divider>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style></style>
