<template>
  <view class="pi-scroll-container checkbox-demo">
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
        <pi-section>
          是否禁用
          <pi-switch slot="right" v-model="demo5.disabled" size="40" active-color="#ff508a" />
        </pi-section>
        <pi-checkbox-group
          ref="checkboxGroup"
          v-model="demo5.checkboxGroup"
          direction="vertical"
          :disabled="demo5.disabled"
        >
          <pi-checkbox :name="1">红色，代表热情</pi-checkbox>
          <pi-checkbox :name="2">蓝色，代表冷静</pi-checkbox>
          <pi-checkbox :name="3">绿色，代表生活</pi-checkbox>
        </pi-checkbox-group>
        <view>checkboxGroup 设置填充模式</view>
        <pi-checkbox-group
          ref="checkboxGroup"
          v-model="demo2.checkboxGroup"
          direction="vertical"
          shape="round"
          active-mode="fill"
        >
          <pi-checkbox :name="1" disabled>红色，代表热情</pi-checkbox>
          <pi-checkbox :name="2">蓝色，代表冷静</pi-checkbox>
          <pi-checkbox :name="3">绿色，代表生活</pi-checkbox>
        </pi-checkbox-group>
        <view>checkboxGroup 设置颜色</view>
        <pi-checkbox-group
          ref="checkboxGroup"
          v-model="demo3.checkboxGroup"
          direction="vertical"
          active-color="#ff508a"
        >
          <pi-checkbox :name="1" active-mode="fill">红色，代表热情</pi-checkbox>
          <pi-checkbox :name="2">蓝色，代表冷静</pi-checkbox>
          <pi-checkbox :name="3" disabled>绿色，代表生活</pi-checkbox>
        </pi-checkbox-group>
        <view>checkboxGroup 设置size: 60</view>
        <pi-checkbox-group
          ref="checkboxGroup"
          v-model="demo4.checkboxGroup"
          size="60"
          icon-size="40"
        >
          <pi-checkbox :name="1" active-mode="fill">红色，代表热情</pi-checkbox>
          <pi-checkbox :name="2">蓝色，代表冷静</pi-checkbox>
          <pi-checkbox :name="3" disabled>绿色，代表生活</pi-checkbox>
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
      fillCheckbox: true,
      defaultCustomColor: false,
      fillCustomColor: false,
      fillRoundCustomColor: false,
      disabled: false,
      trueDisabled: true,
      checkboxGroupMax: ['a'],
      checkboxGroupVertical: [1, 2],
      demo1: {
        checkboxGroup: [2, 3]
      },
      demo2: {
        checkboxGroup: [1]
      },
      demo3: {
        checkboxGroup: [1, 3]
      },
      demo4: {
        checkboxGroup: [1]
      },
      demo5: {
        checkboxGroup: [1],
        disabled: true
      }
    }
  },
  methods: {
    handleCheckboxGroupChange(val) {
      console.log(val)
    }
  }
}
</script>

<style lang="scss" scoped>
.checkbox-demo {
  ::v-deep .pi-check-wrap {
    padding: 10rpx 0;
    margin-right: 32rpx;
  }
}
</style>
