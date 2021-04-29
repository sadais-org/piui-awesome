<template>
  <view class="pi-scroll-container radio-demo">
    <pi-navbar title="radio 单选框" />
    <scroll-view class="pi-scroll" scroll-y>
      <view class="pi-content">
        <pi-section>基础样式</pi-section>
        <pi-radio-group v-model="showcase" direction="vertical">
          <pi-radio name="default" class="pi-mg-bottom-10">默认单选框</pi-radio>
          <pi-radio name="fillRadio" active-mode="fill">实底单选框</pi-radio>
          <pi-radio name="defaultCustomColor" active-color="#0092fe">
            自定义颜色线框
          </pi-radio>
          <pi-radio name="fillCustomColor" active-color="#07c160" active-mode="fill">
            自定义颜色填充
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
          <pi-radio name="a">单选框 a</pi-radio>
          <pi-radio name="b">单选框 b</pi-radio>
          <pi-radio name="c">单选框 c</pi-radio>
        </pi-radio-group>
        <pi-section>圆点模式</pi-section>
        <pi-radio-group v-model="demo01" shape="dot" @change="handleRadioGroupChange">
          <pi-radio name="a">单选框 a</pi-radio>
          <pi-radio name="b">单选框 b</pi-radio>
          <pi-radio name="c">单选框 c</pi-radio>
        </pi-radio-group>
        <pi-section>圆点填充模式</pi-section>
        <pi-radio-group
          v-model="demo11"
          shape="dot"
          active-mode="fill"
          @change="handleRadioGroupChange"
        >
          <pi-radio name="a">单选框 a</pi-radio>
          <pi-radio name="b">单选框 b</pi-radio>
          <pi-radio name="c">单选框 c</pi-radio>
        </pi-radio-group>
        <pi-section>文本模式</pi-section>
        <pi-radio-group v-model="demo12" shape="text" @change="handleRadioGroupChange">
          <pi-radio name="a">单选框 a</pi-radio>
          <pi-radio name="b">单选框 b</pi-radio>
          <pi-radio name="c">单选框 c</pi-radio>
        </pi-radio-group>
        <pi-section>文本填充模式</pi-section>
        <pi-radio-group
          v-model="demo13"
          shape="text"
          active-mode="fill"
          @change="handleRadioGroupChange"
        >
          <pi-radio name="a">单选框 a</pi-radio>
          <pi-radio name="b">单选框 b</pi-radio>
          <pi-radio name="c">单选框 c</pi-radio>
        </pi-radio-group>
        <pi-section>radioGroup 纵向排列</pi-section>
        <pi-radio-group v-model="demo2" direction="vertical">
          <pi-radio :name="1" active-color="red">红色，代表热情</pi-radio>
          <pi-radio :name="2" active-color="blue">蓝色，代表冷静</pi-radio>
          <pi-radio :name="3" active-color="green">绿色，代表生活</pi-radio>
        </pi-radio-group>
        <pi-section>
          是否禁用
          <pi-switch slot="right" v-model="demo5.disabled" size="40" active-color="#ff508a" />
        </pi-section>
        <pi-radio-group v-model="demo5.radioGroup" direction="vertical" :disabled="demo5.disabled">
          <pi-radio :name="1" active-color="red">红色，代表热情</pi-radio>
          <pi-radio :name="2" active-color="blue">蓝色，代表冷静</pi-radio>
          <pi-radio :name="3" active-color="green">绿色，代表生活</pi-radio>
        </pi-radio-group>
        <pi-section>radioGroup 设置填充模式</pi-section>
        <pi-radio-group v-model="demo4" direction="vertical" shape="round" active-mode="fill">
          <pi-radio :name="1" disabled active-color="red">红色，代表热情</pi-radio>
          <pi-radio :name="2" active-color="blue">蓝色，代表冷静</pi-radio>
          <pi-radio :name="3" active-color="green">绿色，代表生活</pi-radio>
        </pi-radio-group>
        <pi-section>radioGroup 设置颜色</pi-section>
        <pi-radio-group v-model="demo3" direction="vertical" active-color="#ff508a">
          <pi-radio :name="1" active-mode="fill">红色，代表热情</pi-radio>
          <pi-radio :name="2">蓝色，代表冷静</pi-radio>
          <pi-radio :name="3" disabled>绿色，代表生活</pi-radio>
        </pi-radio-group>
        <pi-section>radioGroup 设置尺寸: 60</pi-section>
        <pi-radio-group v-model="demo6" direction="vertical" size="60" icon-size="40">
          <pi-radio :name="1" active-mode="fill" active-color="red">红色，代表热情</pi-radio>
          <pi-radio :name="2" active-color="blue">蓝色，代表冷静</pi-radio>
          <pi-radio :name="3" disabled active-color="green">绿色，代表生活</pi-radio>
        </pi-radio-group>
        <pi-radio-group v-model="type_pay" direction="vertical">
          <template v-for="item in radioGroup">
            <view
              :key="item.payType"
              class="pi-align-center pi-pd-tb-36 border-bottom"
              @tap="showcase = item.payType"
            >
              <pi-img :src="item.icon" width="40" class="pi-mg-right-10" />
              <view class="pi-w-100P pi-justify-between pi-align-center">
                <text class="title">{{ item.title }}</text>
                <pi-radio
                  :disabled="item.show"
                  :name="item.payType"
                  :custom-style="{ margin: 0 }"
                  active-mode="fill"
                />
              </view>
            </view>
          </template>
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
      showcase: 'trueDisabled',
      demo1: 'a',
      demo01: 'a',
      demo11: 'a',
      demo12: 'a',
      demo13: 'a',
      demo2: 1,
      demo3: 3,
      demo4: 1,
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
