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
      <pi-form title="左侧输入表单">
        <pi-form-item label="名称名称名称" input-align="left"><pi-input /></pi-form-item>
      </pi-form>
      <pi-gap />
      <pi-form title="左侧icon表单" label-width="60">
        <pi-form-item input-align="left">
          <pi-icon slot="label" name="commentfill" size="50" custom-class="pi-primary" />
          <pi-input placeholder="请输入你的手机号" />
        </pi-form-item>
      </pi-form>
      <pi-gap />
      <pi-form title="必填短内容文本">
        <pi-form-item required label="名称"><pi-input /></pi-form-item>
      </pi-form>
      <pi-gap />
      <pi-form title="文本输入+单位">
        <pi-form-item label="名称">
          <pi-input />
          <view slot="right">秒</view>
        </pi-form-item>
      </pi-form>
      <pi-gap />
      <pi-form title="文本输入+单位选择">
        <pi-form-item label="名称">
          <pi-input />
          <view slot="right" class="pi-align-center">
            <view class="pi-pd-right-6">月</view>
            <pi-icon name="unfold" size="34" custom-class="pi-primary" />
          </view>
        </pi-form-item>
      </pi-form>
      <pi-gap />
      <pi-form title="选择框">
        <pi-form-item label="名称">
          <pi-input />
          <pi-icon slot="right" name="right" size="34" color="#cccccc" />
        </pi-form-item>
      </pi-form>
      <pi-gap />
      <pi-form title="步进器">
        <pi-form-item label="名称">
          <pi-stepper v-model="stepper" shape="square" />
        </pi-form-item>
      </pi-form>
      <pi-gap />
      <pi-form title="两个输入框">
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
      </pi-form>
      <pi-gap />
      <pi-form title="label单独占一行" input-align="left" wrap>
        <pi-form-item label="备注">
          <pi-input type="textarea" placeholder="请输入备注" />
        </pi-form-item>
        <pi-form-item label="备注">
          <pi-input
            type="textarea"
            placeholder="请输入备注"
            :custom-style="{ backgroundColor: '#f5f5f5', padding: '24rpx', borderRadius: '8rpx' }"
          />
        </pi-form-item>
      </pi-form>
      <pi-gap />
      <pi-form title="表单Form单项选择">
        <pi-form-item label="姓名">
          <pi-radio-group value="a" shape="text" active-mode="fill">
            <pi-radio name="a">我是a</pi-radio>
            <pi-radio name="b">我是b</pi-radio>
            <pi-radio name="c">我是c</pi-radio>
          </pi-radio-group>
        </pi-form-item>
      </pi-form>
      <pi-gap />
      <pi-form title="表单Form单项选择(换行)" input-align="left" wrap>
        <pi-form-item label="姓别">
          <pi-radio-group value="male" shape="text" active-mode="fill">
            <pi-radio name="male">男</pi-radio>
            <pi-radio name="female">女</pi-radio>
          </pi-radio-group>
        </pi-form-item>
        <pi-form-item label="名称"><pi-input /></pi-form-item>
      </pi-form>
      <pi-gap />
      <pi-form
        title="label右对齐，input左对齐"
        label-align="right"
        input-align="left"
        label-width="300"
      >
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
      <pi-form title="表单Form多选" input-align="right">
        <pi-form-item label="名称">
          <pi-checkbox-group :value="['1', '2']" shape="text" active-mode="fill">
            <pi-checkbox name="1">选项1</pi-checkbox>
            <pi-checkbox name="2">选项2</pi-checkbox>
            <pi-checkbox name="3">选项3</pi-checkbox>
          </pi-checkbox-group>
        </pi-form-item>
      </pi-form>
      <pi-gap />
      <pi-form title="表单Form多选换行" input-align="left" wrap>
        <pi-form-item label="名称">
          <pi-checkbox-group :value="['1', '2']" shape="text" active-mode="fill">
            <pi-checkbox name="1">选项1</pi-checkbox>
            <pi-checkbox name="2">选项2</pi-checkbox>
            <pi-checkbox name="3">选项3</pi-checkbox>
          </pi-checkbox-group>
        </pi-form-item>
      </pi-form>
      <pi-gap />
      <pi-form title="表单Form多选换行（纵向排列）" input-align="left" wrap>
        <pi-form-item label="名称">
          <pi-checkbox-group
            :value="['1', '2']"
            shape="text"
            active-mode="fill"
            direction="vertical"
          >
            <pi-checkbox name="1">选项1</pi-checkbox>
            <pi-checkbox name="2">选项2</pi-checkbox>
            <pi-checkbox name="3">选项3</pi-checkbox>
          </pi-checkbox-group>
        </pi-form-item>
      </pi-form>
      <pi-gap />
      <pi-form title="选择人（自定义label）" input-align="left">
        <pi-form-item label="名称">
          <view slot="label" class=" pi-align-center">
            <pi-img src="https://m.sadais.com/images.jpeg" width="88" shape="round" />
            <view class="pi-mg-left-12">黄系息</view>
          </view>
          <pi-checkbox slot="right" :value="true" active-mode="fill" />
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
      checkboxGroupMax: ['male'],
      stepper: 1
    }
  }
}
</script>
