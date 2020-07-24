<template>
  <view class="pi-scroll-container">
    <pi-navbar title="选择器" />
    <scroll-view class="pi-scroll" scroll-y>
      <view class="pi-form pi-content">
        <view class="item required" @tap="handleShowSelect('area')">
          <view class="label">地区</view>
          <input :value="form.area.text" type="text" class="input" placeholder="请选择" disabled />
        </view>
        <view class="item required" @tap="handleShowSelect('gender')">
          <view class="label">性别</view>
          <input
            :value="form.gender.text"
            type="text"
            class="input"
            placeholder="请选择"
            disabled
          />
        </view>
        <view class="item required" @tap="handleShowSelect('identity')">
          <view class="label">身份</view>
          <input
            :value="form.identity.map(i => i.text).join('，')"
            type="text"
            class="input"
            placeholder="请选择"
            disabled
          />
        </view>
      </view>
    </scroll-view>
    <pi-select
      v-model="selectOptions.show"
      :items="selectOptions.items"
      :is-multi="selectOptions.isMulti"
      :default-value="selectOptions.defaultValue"
      append-to-body
      @confirm="handleSelectConfirm"
    />
  </view>
</template>

<script>
export default {
  name: 'Select',
  data() {
    return {
      form: {
        area: { id: 'zhuhai', text: '珠海' },
        gender: { id: 'famale', text: '女' },
        identity: [
          { id: 'member', text: '团员' },
          { id: 'masses', text: '群众' }
        ]
      },
      selectOptions: {
        key: '',
        show: false,
        items: [],
        isMulti: false,
        defaultValue: null
      }
    }
  },
  methods: {
    handleShowSelect(formKey) {
      const formKeySelectMap = {
        area: {
          isMulti: false,
          items: [
            { id: 'beijing', text: '北京' },
            { id: 'shanghai', text: '上海' },
            { id: 'zhuhai', text: '珠海' }
          ]
        },
        gender: {
          isMulti: false,
          items: [
            { id: 'male', text: '男' },
            { id: 'famale', text: '女' }
          ]
        },
        identity: {
          isMulti: true,
          items: [
            { id: 'partyMember', text: '党员' },
            { id: 'member', text: '团员' },
            { id: 'masses', text: '群众' }
          ]
        }
      }
      this.selectOptions = {
        key: formKey,
        show: true,
        defaultValue: this.form[formKey],
        ...formKeySelectMap[formKey]
      }
    },
    handleSelectConfirm(value) {
      this.form[this.selectOptions.key] = value
      return true
    }
  }
}
</script>
