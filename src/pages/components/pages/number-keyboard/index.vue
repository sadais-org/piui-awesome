<template>
  <view class="pi-scroll-container">
    <pi-navbar title="numberkeyboard 数字键盘" />
    <scroll-view class="pi-scroll" scroll-y>
      <pi-form ref="form" :model="form" title="数字键盘" border error-type="toast">
        <pi-form-item prop="baseUsed" label="默认数字键盘" @click="form.baseUsed.show = true">
          <pi-input v-model="form.baseUsed.value" />
        </pi-form-item>
        <pi-form-item prop="showTitle" label="显示标题" @click="form.showTitle.show = true">
          <pi-input v-model="form.showTitle.value" />
        </pi-form-item>
        <pi-form-item prop="demo3" label="身份证号键盘" @click="form.extraKey.show = true">
          <pi-input v-model="form.extraKey.value" />
        </pi-form-item>
        <pi-form-item prop="grayKeyboard" label="灰底键盘" @click="form.grayKeyboard.show = true">
          <pi-input v-model="form.grayKeyboard.value" />
        </pi-form-item>
        <pi-form-item
          prop="keyBackgroundColor"
          label="自定义键盘颜色"
          @click="form.keyBackgroundColor.show = true"
        >
          <pi-input v-model="form.keyBackgroundColor.value" />
        </pi-form-item>
        <pi-form-item prop="customSlot" label="自定义插槽" @click="form.customSlot.show = true">
          <pi-input v-model="form.customSlot.value" />
        </pi-form-item>
      </pi-form>
    </scroll-view>
    <pi-number-keyboard
      v-model="form.baseUsed.value"
      :show="form.baseUsed.show"
      @close="form.baseUsed.show = false"
    />
    <pi-number-keyboard
      v-model="form.showTitle.value"
      :show="form.showTitle.show"
      :popup-select="{
        showTitle: true
      }"
      @close="form.showTitle.show = false"
    />
    <pi-number-keyboard
      v-model="form.extraKey.value"
      :show="form.extraKey.show"
      extra-key="X"
      @close="form.extraKey.show = false"
    />
    <pi-number-keyboard
      v-model="form.grayKeyboard.value"
      :show="form.grayKeyboard.show"
      background-color="#f5f5f5"
      key-background-color="#ffffff"
      @close="form.grayKeyboard.show = false"
    />
    <pi-number-keyboard
      v-model="form.keyBackgroundColor.value"
      :show="form.keyBackgroundColor.show"
      :key-style="{ color: '#ffffff', backgroundColor: '#5a7dff' }"
      @close="form.keyBackgroundColor.show = false"
    />
    <pi-number-keyboard
      v-model="form.customSlot.value"
      :show="form.customSlot.show"
      :key-style="{ color: '#ffffff', backgroundColor: '#5a7dff' }"
      :popup-select="{
        showTitle: true,
        title: '请输入验证码'
      }"
      @close="form.customSlot.show = false"
    >
      <view slot="header" class="pi-justify-center pi-mg-tb-20">
        <pi-code-input v-model="form.customSlot.value" :length="6" align="center" />
      </view>
    </pi-number-keyboard>
  </view>
</template>

<script>
export default {
  name: 'NumberKeyboard',
  data() {
    return {
      title: '',
      form: {
        baseUsed: {
          show: false,
          value: 100
        },
        showTitle: {
          show: false,
          value: 130
        },
        extraKey: {
          show: false,
          value: 134
        },
        grayKeyboard: {
          show: false,
          value: '110102199907178435'
        },
        keyBackgroundColor: {
          show: false,
          value: 13415
        },
        customSlot: {
          show: false,
          value: 123
        }
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
