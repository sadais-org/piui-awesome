<template>
  <view class="pi-scroll-container">
    <pi-navbar title="表单form" />
    <scroll-view class="pi-scroll" scroll-y="">
      <pi-form
        ref="form"
        label-width="200"
        input-align="right"
        :model="form"
        title="表单校验"
        border
        error-type="toast"
      >
        <pi-form-item required label-width="300" prop="name" label="姓名">
          <pi-input v-model="form.name" />
        </pi-form-item>
        <pi-form-item prop="intro" label="简介">
          <pi-input v-model="form.intro" type="textarea" placeholder="请输入简介" />
        </pi-form-item>
        <pi-form-item>
          <pi-button type="primary" @click="handleSubmitForm">提交</pi-button>
          <pi-button class="pi-mg-left-24" type="secondary" @click="handleResetForm">
            重置
          </pi-button>
        </pi-form-item>
      </pi-form>
      <pi-form :model="form" title="表单演示" border>
        <pi-form-item label="名称">
          <pi-input />
          <view slot="right">秒</view>
        </pi-form-item>
        <pi-form-item label="名称">
          <pi-input />
          <pi-icon slot="right" name="right" size="34" custom-class="pi-primary" />
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
        name: '张三',
        intro: '三个字'
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
          required: true,
          message: '请输入简介',
          // 可以单个或者同时写两个触发验证方式
          trigger: ['change', 'blur']
        },
        {
          min: 5,
          message: '简介不能少于5个字',
          trigger: 'change'
        }
      ]
    }
    this.$refs.form.setRules(rules)
  },
  methods: {
    handleSubmitForm() {
      this.$refs.form.validation()
    },
    handleResetForm() {
      this.$refs.form.resetValidation()
    }
  }
}
</script>
