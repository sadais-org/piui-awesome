<template>
  <view class="pi-scroll-container">
    <pi-navbar title="input" />
    <scroll-view class="pi-scroll" scroll-y="">
      <pi-form title="文字表单">
        <pi-form-item label="名称"><pi-input /></pi-form-item>
      </pi-form>
      <pi-gap />
      <pi-form title="文字标题加粗表单">
        <pi-form-item label="名称" :label-style="{ fontWeight: 500 }"><pi-input /></pi-form-item>
      </pi-form>
      <pi-gap />
      <pi-form title="结合form表单使用">
        <pi-form-item label="姓名"><pi-input /></pi-form-item>
        <pi-form-item label="性别">
          <pi-checkbox-group v-model="checkboxGroupMax">
            <pi-checkbox name="male">男</pi-checkbox>
            <pi-checkbox name="female">女</pi-checkbox>
          </pi-checkbox-group>
        </pi-form-item>
        <pi-form-item label="姓名姓名姓名姓名"><pi-input /></pi-form-item>
      </pi-form>
      <pi-gap />
      <pi-form title="label右对齐，input左对齐" label-align="right" input-align="left">
        <pi-form-item label="姓名"><pi-input /></pi-form-item>
        <pi-form-item label="性别">
          <pi-checkbox-group v-model="checkboxGroupMax">
            <pi-checkbox name="male">男</pi-checkbox>
            <pi-checkbox name="female">女</pi-checkbox>
          </pi-checkbox-group>
        </pi-form-item>
        <pi-form-item label="姓名姓名姓名姓名"><pi-input /></pi-form-item>
      </pi-form>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Input',
  data() {
    return {
      checkboxGroupMax: ['male']
    }
  }
}
</script>
