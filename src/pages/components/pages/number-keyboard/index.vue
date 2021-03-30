<template>
  <view class="pi-scroll-container">
    <pi-navbar title="numberkeyboard 数字键盘" />
    <scroll-view class="pi-scroll" scroll-y>
      <pi-form ref="form" :model="form" title="表单校验" border error-type="toast">
        <pi-form-item prop="code" label="默认数字键盘">
          <pi-input v-model="form.code" @focus="handleInputFocus('code')" />
        </pi-form-item>
        <pi-form-item prop="demo2" label="数字键盘没有标题">
          <pi-input v-model="form.demo2" @focus="handleInputFocus('demo2')" />
        </pi-form-item>
        <pi-form-item prop="demo3" label="身份证号键盘">
          <pi-input v-model="form.demo3" @focus="handleInputFocus('demo3')" />
        </pi-form-item>
        <pi-form-item prop="demo4" label="自定义键盘颜色">
          <pi-input v-model="form.demo4" @focus="handleInputFocus('demo4')" />
        </pi-form-item>
      </pi-form>
    </scroll-view>
    <pi-number-keyboard
      v-model="form[keyboardOptions.key]"
      :show="keyboardOptions.show"
      :default-value="keyboardOptions.defaultValue"
      :show-title="keyboardOptions.showTitle"
      :title="keyboardOptions.title"
      :extra-key="keyboardOptions.extraKey"
      :key-background-color="keyboardOptions.keyBackgroundColor"
      border-radius="24rpx 24rpx 0 0"
      append-to-body
      @close="keyboardOptions.show = false"
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
        code: 30,
        demo2: 100,
        demo3: 44,
        demo4: 555
      },
      keyboardOptions: {
        key: 'code',
        show: false,
        showTitle: true,
        extraKey: '',
        keyBackgroundColor: ''
      }
    }
  },
  methods: {
    handleInputFocus(prop) {
      const keyboardPropMap = {
        code: { showTitle: true, extraKey: '', keyBackgroundColor: '' },
        demo2: { showTitle: false, extraKey: '', keyBackgroundColor: '' },
        demo3: { showTitle: false, extraKey: 'X', keyBackgroundColor: '' },
        demo4: { showTitle: true, extraKey: '.', keyBackgroundColor: '#4b5cc4' }
      }
      this.keyboardOptions = {
        ...this.keyboardOptions,
        ...keyboardPropMap[prop],
        key: prop,
        show: true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  text-align: right;
}
</style>
