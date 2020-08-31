<template>
  <view class="pi-scroll-container">
    <pi-navbar title="checkbox" />
    <scroll-view class="pi-scroll" scroll-y="">
      <view class="pi-content">
        <pi-checkbox v-model="defaultCheckbox">默认复选框</pi-checkbox>
        <pi-checkbox v-model="fillCheckbox" active-mode="fill">实底复选框</pi-checkbox>
        <pi-checkbox v-model="defaultCustomColor" active-color="#0092fe">
          自定义颜色线框
        </pi-checkbox>
        <pi-checkbox v-model="fillCustomColor" active-color="#07c160" active-mode="fill">
          自定义颜色填充
        </pi-checkbox>
        <pi-checkbox
          v-model="fillCustomColor"
          active-color="#07c160"
          active-mode="fill"
          shape="round"
        >
          自定义颜色填充
        </pi-checkbox>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Checkbox',
  data() {
    return {
      defaultCheckbox: false,
      fillCheckbox: false,
      defaultCustomColor: false,
      fillCustomColor: false
    }
  }
}
</script>
