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
          v-model="fillRoundCustomColor"
          active-color="#07c160"
          active-mode="fill"
          shape="round"
        >
          自定义颜色填充圆形
        </pi-checkbox>
        <pi-checkbox
          v-model="disabled"
          active-color="#07c160"
          active-mode="fill"
          shape="round"
          disabled
        >
          禁用
        </pi-checkbox>
        <pi-checkbox
          v-model="trueDisabled"
          active-color="#07c160"
          active-mode="fill"
          shape="round"
          disabled
        >
          禁用
        </pi-checkbox>
        <view>checkboxGroup 最多选择2个</view>
        <pi-checkbox-group
          ref="checkboxGroup"
          v-model="checkboxGroupMax"
          max="2"
          @change="handleCheckboxGroupChange"
        >
          <pi-checkbox name="a">复选框 a</pi-checkbox>
          <pi-checkbox name="b">复选框 b</pi-checkbox>
          <pi-checkbox name="c">复选框 c</pi-checkbox>
        </pi-checkbox-group>
        <view>checkboxGroup 纵向排列</view>
        <pi-checkbox-group ref="checkboxGroup" v-model="checkboxGroupVertical" direction="vertical">
          <pi-checkbox :name="1">红色，代表热情</pi-checkbox>
          <pi-checkbox :name="2">蓝色，代表冷静</pi-checkbox>
          <pi-checkbox :name="3">绿色，代表生活</pi-checkbox>
        </pi-checkbox-group>
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
      fillCustomColor: false,
      fillRoundCustomColor: false,
      disabled: false,
      trueDisabled: true,
      checkboxGroupMax: ['a'],
      checkboxGroupVertical: [1, 2]
    }
  },
  methods: {
    handleCheckboxGroupChange(val) {
      console.log(val)
    }
  }
}
</script>
