<template>
  <view class="pi-scroll-container">
    <pi-navbar title="input" />
    <scroll-view class="pi-scroll" scroll-y="">
      <pi-card>
        <template slot="body">
          <pi-form title="基础用法">
            <pi-form-item label="名称"><pi-input v-model="name" /></pi-form-item>
          </pi-form>
        </template>
      </pi-card>

      <pi-card>
        <template slot="body">
          <pi-form title="禁用状态">
            <pi-form-item label="名称"><pi-input v-model="name" disabled /></pi-form-item>
          </pi-form>
        </template>
      </pi-card>

      <pi-card>
        <template slot="body">
          <pi-form title="密码输入框">
            <pi-form-item label="密码"><pi-input v-model="password" password /></pi-form-item>
          </pi-form>
        </template>
      </pi-card>

      <pi-card>
        <template slot="body">
          <pi-form title="输入框类型" wrap>
            <pi-form-item label="文本域">
              <pi-input v-model="textarea" type="textarea" />
            </pi-form-item>
            <pi-form-item label="普通文本">
              <pi-input v-model="text" type="text" />
            </pi-form-item>
            <pi-form-item label="数字">
              <pi-input v-model="number" type="number" />
            </pi-form-item>
            <pi-form-item label="身份证">
              <pi-input v-model="idcard" type="idcard" />
            </pi-form-item>
            <pi-form-item label="带小数点的数字">
              <pi-input v-model="digit" type="digit" />
            </pi-form-item>
          </pi-form>
        </template>
      </pi-card>

      <pi-card>
        <template slot="body">
          <pi-form title="长度限制" wrap>
            <pi-form-item label="限制10个字符">
              <pi-input v-model="textarea1" maxlength="10" />
            </pi-form-item>
            <pi-form-item label="限制30个字符">
              <pi-input v-model="textarea2" type="textarea" maxlength="30" />
            </pi-form-item>
          </pi-form>
        </template>
      </pi-card>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Input',
  data() {
    return {
      name: '李伟兰',
      password: '',
      textarea: '',
      textarea1: '',
      textarea2: '',
      text: '',
      digit: '',
      idcard: '',
      number: 0,
      checkboxGroupMax: ['male'],
      stepper: 1
    }
  }
}
</script>
