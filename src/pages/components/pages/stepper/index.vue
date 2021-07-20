<!--
 * @Author: zhangzhenfei
 * @Date: 2021-03-08 17:26:33
 * @LastEditTime: 2021-04-01 23:58:57
 * @LastEditors: zhangzhenfei
 * @Description: 
 * @FilePath: \piui-awesome\src\pages\components\pages\stepper\index.vue
-->
<template>
  <view class="pi-scroll-container">
    <pi-navbar title="stepper 步进器" />
    <scroll-view class="pi-scroll" scroll-y="">
      <pi-card>
        <pi-section slot="title" title="基础用法" />
        <template slot="body">
          <pi-stepper v-model="val" :min="2" :max="12" />
        </template>
      </pi-card>

      <pi-card>
        <pi-section slot="title" title="禁用步进器" />
        <template slot="body">
          <pi-stepper v-model="val4" :min="2" :max="12" disabled />
        </template>
      </pi-card>

      <pi-card>
        <pi-section slot="title" title="自定义按钮颜色" />

        <template slot="body">
          <view><pi-stepper v-model="val1" :min="2" :max="12" button-color="#00e09e" /></view>
          <view class="pi-mg-top-20">
            <pi-stepper v-model="val1" :min="2" :max="12" button-color="#ffaabb" />
          </view>
        </template>
      </pi-card>

      <pi-card>
        <pi-section slot="title" title="按钮形状" />

        <template slot="body">
          <view class="pi-align-center">
            <text class="pi-mg-right-18">方形按钮</text>
            <pi-stepper v-model="val2" :min="2" :max="12" shape="square" />
          </view>
          <view class="pi-mg-top-20 pi-align-center">
            <text class="pi-mg-right-18">圆形按钮</text>
            <pi-stepper v-model="val2" :min="2" :max="12" shape="round" />
          </view>
        </template>
      </pi-card>

      <pi-card>
        <pi-section slot="title" title="设置实底模式主题" />

        <template slot="body">
          <view><pi-stepper v-model="val3" :min="2" :max="12" theme="fill" /></view>
          <view class="pi-mg-tb-20">
            <pi-stepper v-model="val3" :min="2" :max="12" theme="fill" shape="square" />
          </view>
        </template>
      </pi-card>

      <pi-card>
        <pi-section slot="title" title="显示输入框" />

        <template slot="body">
          <view class="pi-flex-column">
            <pi-section slot="title" title="步长设置" />
            <view class="pi-align-center">
              <text class="pi-mg-right-18 pi-fz-16">步长为0.5</text>
              <pi-stepper
                v-model="val6"
                :min="2"
                :max="12"
                :step="0.5"
                :disable-input="false"
                :decimal="1"
              />
            </view>
            <view class="pi-align-center pi-mg-top-16">
              <text class="pi-mg-right-38 pi-fz-16">步长为5</text>
              <pi-stepper v-model="val06" :min="5" :max="30" :step="5" :disable-input="false" />
            </view>
          </view>
        </template>
      </pi-card>

      <pi-card>
        <pi-section slot="title" title="只显示减少按钮" />
        <template slot="body">
          <pi-stepper v-model="val7" :min="2" :max="12" :show-subtract="false" />
        </template>
      </pi-card>

      <pi-card>
        <pi-section slot="title" title="只显示增加按钮" />
        <template slot="body">
          <pi-stepper v-model="val8" :min="2" :max="12" :show-add="false" class="pi-mg-lr-50" />
        </template>
      </pi-card>

      <pi-card>
        <pi-section slot="title" title="固定两位小数（步长0.03）" />
        <template slot="body">
          <pi-stepper
            v-model="val9"
            :min="2"
            :max="12"
            :disable-input="false"
            :step="0.03"
            :decimal="2"
          />
        </template>
      </pi-card>

      <pi-card>
        <pi-section slot="title" title="自定义按钮大小" />
        <template slot="body">
          <pi-stepper v-model="val10" :min="2" :max="12" :button-size="80" />
        </template>
      </pi-card>

      <pi-card>
        <pi-section slot="title" title="设置输入框宽度" />
        <template slot="body">
          <pi-stepper v-model="val11" :min="2" :max="12" :input-width="200" />
        </template>
      </pi-card>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Stepper',
  data() {
    return {
      val: 10,
      val1: 10,
      val2: 10,
      val3: 10,
      val4: 10,
      val5: 10,
      val6: 10,
      val06: 10,
      val7: 10,
      val8: 10,
      val9: 10,
      val10: 10,
      val11: 10
    }
  }
}
</script>
