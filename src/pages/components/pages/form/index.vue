<template>
  <view class="pi-scroll-container">
    <pi-navbar title="表单form" />
    <scroll-view class="pi-scroll" scroll-y="">
      <pi-card padding="0">
        <pi-form
          slot="body"
          label-width="200"
          :model="form"
          title="基础用法"
          border
          error-type="toast"
        >
          <pi-form-item required label-width="300" prop="name" label="姓名">
            <pi-input v-model="form.name" />
          </pi-form-item>
          <pi-form-item required label-width="300" prop="age" label="年龄">
            <pi-input v-model="form.age" type="number" />
          </pi-form-item>
          <pi-form-item required label-width="300" prop="sex" label="性别">
            <pi-radio-group v-model="form.sex" shape="dot">
              <pi-radio name="male">男</pi-radio>
              <pi-radio name="female">女</pi-radio>
            </pi-radio-group>
          </pi-form-item>
          <pi-form-item required label-width="300" prop="notice" label="自动通知">
            <pi-switch v-model="form.notice" />
          </pi-form-item>
          <pi-form-item label="参与活动" prop="activity">
            <pi-checkbox-group v-model="form.activity" shape="text" active-mode="fill">
              <pi-checkbox name="1">活动1</pi-checkbox>
              <pi-checkbox name="2">活动2</pi-checkbox>
            </pi-checkbox-group>
          </pi-form-item>
          <pi-form-item prop="intro" label="自我介绍" wrap input-align="left">
            <pi-input v-model="form.intro" type="textarea" placeholder="请输入" />
          </pi-form-item>
        </pi-form>
      </pi-card>

      <pi-card padding="0">
        <pi-form slot="body" :model="form" title="表单标题：禁用" desc="表单描述" border disabled>
          <pi-form-item label="名称">
            <pi-input />
            <view slot="right">秒</view>
          </pi-form-item>
        </pi-form>
      </pi-card>

      <pi-card>
        <pi-section slot="title" padding="0" title="label参数设置" />
        <template slot="body">
          <view class="pi-mg-bottom-24">对齐方式</view>
          <pi-radio-group v-model="labelAlign" shape="dot">
            <pi-radio name="left">左对齐</pi-radio>
            <pi-radio name="center">居中对齐</pi-radio>
            <pi-radio name="right">右对齐</pi-radio>
          </pi-radio-group>
          <view class="pi-mg-tb-24">宽度</view>
          <pi-radio-group v-model="labelWidth" shape="dot">
            <pi-radio :name="120">宽度120</pi-radio>
            <pi-radio :name="200">宽度200</pi-radio>
            <pi-radio :name="300">宽度300</pi-radio>
          </pi-radio-group>

          <pi-form :model="form" :label-align="labelAlign" :label-width="labelWidth">
            <pi-form-item required prop="name" label="姓名">
              <pi-input v-model="form.name" />
            </pi-form-item>
            <pi-form-item required prop="age" label="手机号">
              <pi-input v-model="form.age" type="number" />
            </pi-form-item>
            <pi-form-item required prop="age" label="是否预约">
              <pi-switch v-model="form.notice" />
            </pi-form-item>
          </pi-form>
        </template>
      </pi-card>

      <pi-card padding="0">
        <template slot="body">
          <pi-form title="标签换行" :model="form1" wrap input-align="left">
            <pi-form-item required prop="name" label="姓名">
              <pi-input v-model="form1.name" />
            </pi-form-item>
            <pi-form-item required prop="age" label="手机号">
              <pi-input v-model="form1.age" type="number" />
            </pi-form-item>
            <pi-form-item required prop="age" label="是否预约">
              <pi-switch v-model="form1.notice" />
            </pi-form-item>
          </pi-form>
        </template>
      </pi-card>

      <pi-card padding="0">
        <template slot="body">
          <pi-form
            ref="form"
            title="表单校验"
            :model="form2"
            border
            error-type="message"
            :wrap="false"
            input-align="right"
          >
            <pi-form-item prop="name" label="姓名">
              <pi-input v-model="form2.name" />
            </pi-form-item>
            <pi-form-item prop="intro" label="简介" wrap input-align="left">
              <pi-input v-model="form2.intro" type="textarea" placeholder="请输入简介" />
            </pi-form-item>
            <pi-form-item>
              <pi-button type="primary" @click="handleSubmitForm">提交</pi-button>
              <pi-button type="secondary" @click="handleResetForm">重置</pi-button>
            </pi-form-item>
          </pi-form>
        </template>
      </pi-card>
      <pi-gap />
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
        intro: '',
        age: 12,
        sex: 'male'
      },
      form1: {
        name: '张三',
        intro: '',
        age: 12,
        sex: 'male'
      },
      form2: {
        name: '张三',
        intro: ''
      },
      labelAlign: 'left',
      labelWidth: 120,
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
