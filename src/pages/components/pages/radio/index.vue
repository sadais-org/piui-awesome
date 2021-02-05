<template>
  <view class="pi-scroll-container radio-demo">
    <pi-navbar title="radio" />
    <scroll-view class="pi-scroll" scroll-y="">
      <view class="pi-content">
        <pi-section>showcase</pi-section>
        <pi-radio-group v-model="showcase">
          <pi-radio name="default">默认复选框</pi-radio>
          <pi-radio name="fillRadio" active-mode="fill">实底复选框</pi-radio>
          <pi-radio name="defaultCustomColor" active-color="#0092fe">
            自定义颜色线框
          </pi-radio>
          <pi-radio name="fillCustomColor" active-color="#07c160" active-mode="fill">
            自定义颜色填充
          </pi-radio>
          <pi-radio
            name="fillRoundCustomColor"
            active-color="#07c160"
            active-mode="fill"
            shape="round"
          >
            自定义颜色填充圆形
          </pi-radio>
          <pi-radio
            name="disabled"
            active-color="#07c160"
            active-mode="fill"
            shape="round"
            disabled
          >
            禁用
          </pi-radio>
          <pi-radio
            name="trueDisabled"
            active-color="#07c160"
            active-mode="fill"
            shape="round"
            disabled
          >
            禁用
          </pi-radio>
        </pi-radio-group>
        <pi-section>方形模式</pi-section>
        <pi-radio-group v-model="demo1" shape="square" @change="handleRadioGroupChange">
          <pi-radio name="a">a</pi-radio>
          <pi-radio name="b">b</pi-radio>
          <pi-radio name="c">c</pi-radio>
        </pi-radio-group>
        <pi-section>圆点模式</pi-section>
        <pi-radio-group v-model="demo1" shape="dot" @change="handleRadioGroupChange">
          <pi-radio name="a">a</pi-radio>
          <pi-radio name="b">b</pi-radio>
          <pi-radio name="c">c</pi-radio>
        </pi-radio-group>
        <pi-section>圆点填充模式模式</pi-section>
        <pi-radio-group
          v-model="demo11"
          shape="dot"
          active-mode="fill"
          @change="handleRadioGroupChange"
        >
          <pi-radio name="a">a</pi-radio>
          <pi-radio name="b">b</pi-radio>
          <pi-radio name="c">c</pi-radio>
        </pi-radio-group>
        <pi-section>文本模式</pi-section>
        <pi-radio-group v-model="demo12" shape="text" @change="handleRadioGroupChange">
          <pi-radio name="a">我是a</pi-radio>
          <pi-radio name="b">我是b</pi-radio>
          <pi-radio name="c">我是c</pi-radio>
        </pi-radio-group>
        <pi-section>文本填充模式</pi-section>
        <pi-radio-group
          v-model="demo13"
          shape="text"
          active-mode="fill"
          @change="handleRadioGroupChange"
        >
          <pi-radio name="a">我是a</pi-radio>
          <pi-radio name="b">我是b</pi-radio>
          <pi-radio name="c">我是c</pi-radio>
        </pi-radio-group>
        <pi-section>radioGroup 纵向排列</pi-section>
        <pi-radio-group v-model="demo2" direction="vertical">
          <pi-radio :name="1">红色，代表热情</pi-radio>
          <pi-radio :name="2">蓝色，代表冷静</pi-radio>
          <pi-radio :name="3">绿色，代表生活</pi-radio>
        </pi-radio-group>
        <pi-section>
          是否禁用
          <pi-switch slot="right" v-model="demo5.disabled" size="40" active-color="#ff508a" />
        </pi-section>
        <pi-radio-group v-model="demo3" direction="vertical" :disabled="demo5.disabled">
          <pi-radio :name="1">红色，代表热情</pi-radio>
          <pi-radio :name="2">蓝色，代表冷静</pi-radio>
          <pi-radio :name="3">绿色，代表生活</pi-radio>
        </pi-radio-group>
        <pi-section>radioGroup 设置填充模式</pi-section>
        <pi-radio-group v-model="demo4" direction="vertical" shape="round" active-mode="fill">
          <pi-radio :name="1" disabled>红色，代表热情</pi-radio>
          <pi-radio :name="2">蓝色，代表冷静</pi-radio>
          <pi-radio :name="3">绿色，代表生活</pi-radio>
        </pi-radio-group>
        <pi-section>radioGroup 设置颜色</pi-section>
        <pi-radio-group v-model="demo5" direction="vertical" active-color="#ff508a">
          <pi-radio :name="1" active-mode="fill">红色，代表热情</pi-radio>
          <pi-radio :name="2">蓝色，代表冷静</pi-radio>
          <pi-radio :name="3" disabled>绿色，代表生活</pi-radio>
        </pi-radio-group>
        <pi-section>radioGroup 设置size: 60</pi-section>
        <pi-radio-group v-model="demo6" size="60" icon-size="40">
          <pi-radio :name="1" active-mode="fill">红色，代表热情</pi-radio>
          <pi-radio :name="2">蓝色，代表冷静</pi-radio>
          <pi-radio :name="3" disabled>绿色，代表生活</pi-radio>
        </pi-radio-group>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Radio',
  data() {
    return {
      showcase: 'fillRadio',
      demo1: 'a',
      demo11: 'a',
      demo12: 'a',
      demo13: 'a',
      demo2: 1,
      demo3: 1,
      demo4: 1,
      demo5: 1,
      demo6: 1
    }
  },
  methods: {
    handleRadioGroupChange(val) {
      console.log(val)
    }
  }
}
</script>

<style lang="scss" scoped>
.radio-demo {
  ::v-deep .pi-check-wrap {
    padding: 10rpx 0;
  }
}
</style>
