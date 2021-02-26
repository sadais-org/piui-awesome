<template>
  <view class="pi-scroll-container">
    <pi-navbar title="选择器" />
    <scroll-view class="pi-scroll" scroll-y>
      <pi-form ref="form" :model="form" title="表单校验" border error-type="toast">
        <pi-form-item prop="code" label="验证码">
          <pi-input v-model="form.code" @focus="handleInputFocus('code')" />
        </pi-form-item>
      </pi-form>
    </scroll-view>
    <pi-number-keyboard
      v-model="form[keyboardOptions.key]"
      :show="keyboardOptions.show"
      :default-value="keyboardOptions.defaultValue"
      show-title
      :title="keyboardOptions.title"
      border-radius="24rpx 24rpx 0 0"
      append-to-body
      @change="handleKeyboardChange"
    />
  </view>
</template>

<script>
export default {
  name: 'NumberKeyboard',
  data() {
    return {
      title: '',
      form: {
        code: 30
      },
      keyboardOptions: {
        key: 'code',
        show: false,
        items: [],
        isMulti: false,
        defaultValue: null
      }
    }
  },
  methods: {
    handleInputFocus(prop) {
      this.keyboardOptions.key = prop
      this.keyboardOptions.show = true
    },
    handleKeyboardChange(value) {
      this.form[this.keyboardOptions.key] = value
      return true
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  text-align: right;
}
</style>
