<template>
  <view class="pi-scroll-container">
    <pi-navbar title="select 选择器" />
    <scroll-view class="pi-scroll" scroll-y>
      <pi-list title="单选模式">
        <pi-list-item title="地区" @tap="handleShowSelect('area')">
          <input :value="form.area.text" type="text" class="input" placeholder="请选择" disabled />
        </pi-list-item>
        <pi-list-item title="性别" @tap="handleShowSelect('gender')">
          <input
            :value="form.gender.text"
            type="text"
            class="input"
            placeholder="请选择"
            disabled
          />
        </pi-list-item>
      </pi-list>
      <pi-list title="多选模式">
        <pi-list-item title="身份" @tap="handleShowSelect('identity')">
          <input
            :value="form.identity.map(i => i.text).join('，')"
            type="text"
            class="input"
            placeholder="请选择"
            disabled
          />
        </pi-list-item>
      </pi-list>
    </scroll-view>
    <pi-select
      v-model="selectOptions.show"
      :items="selectOptions.items"
      :is-multi="selectOptions.isMulti"
      :single-cancel="false"
      :default-value="selectOptions.defaultValue"
      :popup-select="{
        showTitle: true,
        title: '请选择'
      }"
      height="60vh"
      :item-height="150"
      slot-toolbar
      @confirm="handleSelectConfirm"
    >
      <pi-code-input slot="header" :length="6" />
    </pi-select>
  </view>
</template>

<script>
export default {
  name: 'Select',
  data() {
    return {
      title: '',
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
          title: '选择地区',
          isMulti: false,
          items: [
            { id: 'beijing', text: '北京' },
            { id: 'shanghai', text: '上海', disabled: true },
            { id: 'zhuhai', text: '珠海' }
          ]
        },
        gender: {
          title: '选择性别',
          isMulti: false,
          items: [
            { id: 'male', text: '男' },
            { id: 'famale', text: '女' }
          ]
        },
        identity: {
          title: '选择身份',
          isMulti: true,
          items: [
            { id: 'partyMember', text: '党员', disabled: true },
            { id: 'member', text: '团员' },
            { id: 'masses', text: '群众' },
            { id: 'renmin', text: '人民' },
            { id: 'guanyuan', text: '官员' },
            { id: 'dangyuan', text: '党员' }
          ]
        }
      }
      this.selectOptions = {
        key: formKey,
        show: true,
        defaultValue: this.form[formKey],
        title: this.form[formKey].title,
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

<style lang="scss" scoped>
input {
  text-align: right;
}
</style>
