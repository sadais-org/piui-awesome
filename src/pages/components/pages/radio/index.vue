<template>
  <view class="pi-scroll-container radio-demo">
    <pi-navbar title="radio 单选框" />
    <scroll-view class="pi-scroll" scroll-y>
      <pi-card>
        <pi-section slot="title" padding="0">基础用法</pi-section>
        <template slot="body">
          <pi-radio-group v-model="demo">
            <pi-radio name="a">备选项a</pi-radio>
            <pi-radio name="b">备选项b</pi-radio>
            <pi-radio name="c">备选项c</pi-radio>
          </pi-radio-group>
        </template>
      </pi-card>

      <pi-card>
        <pi-section slot="title" padding="0">
          禁用状态
          <pi-switch slot="right" v-model="demo5.disabled" size="40" active-color="#ff508a" />
        </pi-section>
        <template slot="body">
          <pi-radio-group v-model="demo5.radioGroup" :disabled="demo5.disabled">
            <pi-radio name="a">备选项a</pi-radio>
            <pi-radio name="b">备选项b</pi-radio>
            <pi-radio name="c">备选项c</pi-radio>
          </pi-radio-group>
        </template>
      </pi-card>

      <pi-card>
        <pi-section slot="title" padding="0">纵向排列</pi-section>
        <template slot="body">
          <pi-radio-group v-model="demo1" direction="vertical">
            <pi-radio name="a">备选项a</pi-radio>
            <pi-radio name="b">备选项b</pi-radio>
            <pi-radio name="c">备选项c</pi-radio>
          </pi-radio-group>
        </template>
      </pi-card>

      <pi-card>
        <pi-section slot="title" padding="0">不同形状</pi-section>
        <template slot="body">
          <pi-radio-group v-model="demo5.radioGroup" direction="vertical">
            <pi-radio :name="1" shape="square">备选项1</pi-radio>
            <pi-radio :name="2" shape="round">备选项2</pi-radio>
            <pi-radio :name="3" shape="dot">备选项3</pi-radio>
            <pi-radio :name="4" shape="text">备选项4</pi-radio>
          </pi-radio-group>
        </template>
      </pi-card>

      <pi-card>
        <pi-section slot="title" padding="0">按钮样式</pi-section>
        <template slot="body">
          <pi-radio-group v-model="buttonShape" shape="button">
            <pi-radio :name="1">选项1</pi-radio>
            <pi-radio :name="2">选项2</pi-radio>
            <pi-radio :name="3">选项3</pi-radio>
            <pi-radio :name="4">选项4</pi-radio>
          </pi-radio-group>
          <pi-radio-group
            v-model="buttonShape"
            shape="button"
            stretch
            active-mode="fill"
            custom-class="pi-mg-top-24"
          >
            <pi-radio :name="1">备选项1</pi-radio>
            <pi-radio :name="2">备选项2</pi-radio>
            <pi-radio :name="3">备选项3</pi-radio>
            <pi-radio :name="4">stretch较长的选项</pi-radio>
          </pi-radio-group>
        </template>
      </pi-card>

      <pi-card>
        <pi-section slot="title" padding="0">激活模式</pi-section>
        <template slot="body">
          <pi-radio-group v-model="demo2" active-mode="line">
            线框：
            <pi-radio name="square" shape="square">方形</pi-radio>
            <pi-radio name="round" shape="round">圆形</pi-radio>
            <pi-radio name="dot" shape="dot">圆点</pi-radio>
            <pi-radio name="text" shape="text">文字</pi-radio>
          </pi-radio-group>
          <pi-radio-group v-model="demo2" active-mode="line-circle" custom-class="pi-mg-top-24">
            线环：
            <pi-radio name="square" shape="square">方形</pi-radio>
            <pi-radio name="round" shape="round">圆形</pi-radio>
            <pi-radio name="dot" shape="dot">圆点</pi-radio>
            <pi-radio name="text" shape="text">文字</pi-radio>
          </pi-radio-group>
          <pi-radio-group v-model="demo2" active-mode="fill" custom-class="pi-mg-top-24">
            填充：
            <pi-radio name="square" shape="square">方形</pi-radio>
            <pi-radio name="round" shape="round">圆形</pi-radio>
            <pi-radio name="dot" shape="dot">圆点</pi-radio>
            <pi-radio name="text" shape="text">文字</pi-radio>
          </pi-radio-group>
          <pi-radio-group v-model="demo2" active-mode="fill-circle" custom-class="pi-mg-top-24">
            填充环：
            <pi-radio name="square" shape="square">方形</pi-radio>
            <pi-radio name="round" shape="round">圆形</pi-radio>
            <pi-radio name="dot" shape="dot">圆点</pi-radio>
            <pi-radio name="text" shape="text">文字</pi-radio>
          </pi-radio-group>
        </template>
      </pi-card>

      <pi-card>
        <pi-section slot="title" padding="0">radioGroup 设置颜色</pi-section>
        <template slot="body">
          <pi-radio-group v-model="demo3" direction="vertical">
            <pi-radio :name="1" active-color="red" shape="square">红色，代表热情</pi-radio>
            <pi-radio :name="2" active-color="blue" shape="dot">蓝色，代表冷静</pi-radio>
            <pi-radio :name="3" active-color="green" shape="text">绿色，代表生活</pi-radio>
          </pi-radio-group>
        </template>
      </pi-card>

      <pi-card>
        <pi-section padding="0">radioGroup 设置尺寸: 60</pi-section>
        <template slot="body">
          <pi-radio-group v-model="demo6" direction="vertical" size="60" icon-size="40">
            <pi-radio :name="1" active-color="red">红色，代表热情</pi-radio>
            <pi-radio :name="2" active-color="blue">蓝色，代表冷静</pi-radio>
            <pi-radio :name="3" active-color="green">绿色，代表生活</pi-radio>
          </pi-radio-group>
        </template>
      </pi-card>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Radio',
  data() {
    return {
      showcase: 'trueDisabled',
      demo: 'a',
      demo1: 'a',
      demo01: 'a',
      demo11: 'a',
      demo12: 'a',
      demo13: 'a',
      demo2: 1,
      demo3: 3,
      demo4: 1,
      buttonShape: 1,
      demo5: {
        radioGroup: 1,
        disabled: true
      },
      demo6: 1,
      type_pay: 2,
      radioGroup: [
        {
          payType: 1,
          title: '星钻支付',
          payName: 'diamondPay',
          show: false
        },
        {
          payType: 2,
          title: '微信支付',
          payName: 'wechatPay',
          show: true
        },
        {
          payType: 3,
          title: '充值卡支付',
          payName: 'cardPay',
          show: false
        }
      ]
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
