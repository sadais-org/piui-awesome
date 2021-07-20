<template>
  <view class="pi-scroll-container radio-demo">
    <pi-navbar title="radio 单选框" />
    <scroll-view class="pi-scroll" scroll-y>
      <pi-card>
        <pi-section slot="title">基础用法</pi-section>
        <template slot="body">
          <pi-radio-group v-model="demo">
            <pi-radio name="a">备选项a</pi-radio>
            <pi-radio name="b">备选项b</pi-radio>
            <pi-radio name="c">备选项c</pi-radio>
          </pi-radio-group>
        </template>
      </pi-card>

      <pi-card>
        <pi-section slot="title">
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
        <pi-section slot="title">纵向排列</pi-section>
        <template slot="body">
          <pi-radio-group v-model="demo1" direction="vertical">
            <pi-radio name="a">备选项a</pi-radio>
            <pi-radio name="b">备选项b</pi-radio>
            <pi-radio name="c">备选项c</pi-radio>
          </pi-radio-group>
        </template>
      </pi-card>

      <pi-card>
        <pi-section slot="title">不同形状</pi-section>
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
        <pi-section slot="title">激活模式</pi-section>
        <template slot="body">
          <pi-radio-group v-model="demo2" active-mode="line">
            线框：
            <pi-radio name="square" shape="square">方形</pi-radio>
            <pi-radio name="round" shape="round">圆形</pi-radio>
            <pi-radio name="dot" shape="dot">圆点</pi-radio>
            <pi-radio name="text" shape="text">文字</pi-radio>
          </pi-radio-group>
          <pi-radio-group v-model="demo2" active-mode="fill">
            填充：
            <pi-radio name="square" shape="square">方形</pi-radio>
            <pi-radio name="round" shape="round">圆形</pi-radio>
            <pi-radio name="dot" shape="dot">圆点</pi-radio>
            <pi-radio name="text" shape="text">文字</pi-radio>
          </pi-radio-group>
        </template>
      </pi-card>

      <pi-card>
        <pi-section slot="title">radioGroup 设置颜色</pi-section>
        <template slot="body">
          <pi-radio-group v-model="demo3" direction="vertical">
            <pi-radio :name="1" active-color="red">红色，代表热情</pi-radio>
            <pi-radio :name="2" active-color="blue">蓝色，代表冷静</pi-radio>
            <pi-radio :name="3" active-color="green">绿色，代表生活</pi-radio>
          </pi-radio-group>
        </template>
      </pi-card>

      <pi-card>
        <pi-section>radioGroup 设置尺寸: 60</pi-section>
        <template slot="body">
          <pi-radio-group v-model="demo6" direction="vertical" size="60" icon-size="40">
            <pi-radio :name="1" active-color="red">红色，代表热情</pi-radio>
            <pi-radio :name="2" active-color="blue">蓝色，代表冷静</pi-radio>
            <pi-radio :name="3" active-color="green">绿色，代表生活</pi-radio>
          </pi-radio-group>
        </template>
      </pi-card>
      <!-- <pi-radio-group v-model="type_pay" direction="vertical">
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
        </pi-radio-group> -->
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
