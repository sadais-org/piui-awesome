<template>
  <view class="pi-scroll-container">
    <pi-navbar title="表单form" />
    <scroll-view class="pi-scroll" scroll-y="">
      <pi-form ref="form" :model="form" title="文字表单">
        <pi-form-item prop="name" label="姓名"><pi-input v-model="form.name" /></pi-form-item>
        <pi-form-item label="名称">
          <pi-input />
          <view slot="right">秒</view>
        </pi-form-item>
        <pi-form-item label="名称">
          <pi-input />
          <view slot="right" class="pi-align-center">
            <view class="pi-pd-right-6">月</view>
            <pi-icon name="unfold" size="34" custom-class="pi-primary" />
          </view>
        </pi-form-item>
        <pi-form-item label="名称">
          <pi-stepper v-model="stepper" shape="square" />
        </pi-form-item>
        <pi-form-item label="名称">
          <view class="pi-justify-end pi-align-center">
            <pi-input
              custom-class="pi-w-100 pi-h-60 pi-text-center"
              placeholder=""
              value="1"
              :custom-style="{ backgroundColor: '#F5F5F5', borderRadius: '8rpx' }"
            />
            <view class="pi-pd-lr-10">-</view>
            <pi-input
              custom-class="pi-w-100 pi-h-60 pi-text-center"
              placeholder=""
              value="10"
              :custom-style="{ backgroundColor: '#F5F5F5', borderRadius: '8rpx' }"
            />
          </view>
          <view slot="right">档</view>
        </pi-form-item>
        <pi-form-item label="备注">
          <pi-input
            type="textarea"
            placeholder="请输入备注"
            :custom-style="{ backgroundColor: '#f5f5f5', padding: '24rpx', borderRadius: '8rpx' }"
          />
        </pi-form-item>
        <pi-form-item label="姓名">
          <pi-radio-group value="a" shape="text" active-mode="fill">
            <pi-radio name="a">我是a</pi-radio>
            <pi-radio name="b">我是b</pi-radio>
            <pi-radio name="c">我是c</pi-radio>
          </pi-radio-group>
        </pi-form-item>
        <pi-form-item prop="intro" label="简介">
          <pi-input v-model="form.intro" type="textarea" placeholder="请输入简介" />
        </pi-form-item>
        <pi-form-item label="姓别">
          <pi-radio-group value="male" shape="text" active-mode="fill">
            <pi-radio name="male">男</pi-radio>
            <pi-radio name="female">女</pi-radio>
          </pi-radio-group>
        </pi-form-item>
        <pi-form-item label="名称"><pi-input /></pi-form-item>
        <pi-form-item label="姓名"><pi-input /></pi-form-item>
        <pi-form-item label="性别">
          <pi-checkbox-group v-model="checkboxGroupMax">
            <pi-checkbox name="male">男</pi-checkbox>
            <pi-checkbox name="female">女</pi-checkbox>
          </pi-checkbox-group>
        </pi-form-item>
        <pi-form-item label="姓名姓名姓名姓名"><pi-input /></pi-form-item>
        <pi-form-item label="名称">
          <pi-checkbox-group :value="['1', '2']" shape="text" active-mode="fill">
            <pi-checkbox name="1">选项1</pi-checkbox>
            <pi-checkbox name="2">选项2</pi-checkbox>
            <pi-checkbox name="3">选项3</pi-checkbox>
          </pi-checkbox-group>
        </pi-form-item>
      </pi-form>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Input',
  data() {
    return {
      form: {
        name: '',
        intro: ''
      },
      checkboxGroupMax: ['male'],
      stepper: 1
    }
  },
  onReady() {
    const rules = {
      name: [
        {
          required: true,
          message: '请输入姓名',
          // 可以单个或者同时写两个触发验证方式
          trigger: ['change', 'blur']
        }
      ],
      intro: [
        {
          min: 5,
          message: '简介不能少于5个字',
          trigger: 'change'
        }
      ]
    }
    this.$refs.form.setRules(rules)
  }
}
</script>
