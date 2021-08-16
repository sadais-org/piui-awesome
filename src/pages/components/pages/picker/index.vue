<template>
  <view class="pi-scroll-container">
    <pi-navbar title="选择器" />
    <scroll-view class="pi-scroll" scroll-y>
      <pi-card padding="0">
        <pi-section slot="title" padding="24">基础使用</pi-section>
        <template slot="body">
          <pi-form show-right-icon>
            <pi-form-item label="地区（单列）" @tap="handleShowPicker('area')">
              <input
                :value="form.area.text"
                type="text"
                class="input"
                placeholder="请选择"
                disabled
              />
            </pi-form-item>
            <pi-form-item label="性别（多列）" @tap="handleShowPicker('gender')">
              <input
                :value="form.gender.text"
                type="text"
                class="input"
                placeholder="请选择"
                disabled
              />
            </pi-form-item>
            <pi-form-item label="身份（多列联动）" @tap="handleShowPicker('identity')">
              <input
                :value="form.identity.text"
                type="text"
                class="input"
                placeholder="请选择"
                disabled
              />
            </pi-form-item>
          </pi-form>
        </template>
      </pi-card>

      <pi-card padding="0">
        <pi-section slot="title" padding="24">popupSelect配置</pi-section>
        <template slot="body">
          <pi-form show-right-icon>
            <pi-form-item
              label="身份（多列联动）"
              @tap="handleShowPicker('identity', 'popupSelect')"
            >
              <input
                :value="form.identity.text"
                type="text"
                class="input"
                placeholder="请选择"
                disabled
              />
            </pi-form-item>
          </pi-form>
        </template>
      </pi-card>

      <pi-card padding="0">
        <pi-section slot="title" padding="24">自定义按钮</pi-section>
        <template slot="body">
          <pi-form show-right-icon>
            <pi-form-item label="身份（多列联动）" @tap="handleShowBtnSelect">
              <input
                :value="form.area.text"
                type="text"
                class="input"
                placeholder="请选择"
                disabled
              />
            </pi-form-item>
          </pi-form>
        </template>
      </pi-card>
    </scroll-view>
    <pi-picker
      v-model="pickerOptions.show"
      :items="pickerOptions.items"
      :type="pickerOptions.type"
      :default-value="pickerOptions.defaultValue"
      :confirm-btn="pickerOptions.confirmBtn"
      :cancel-btn="pickerOptions.cancelBtn"
      @confirm="handlePickerConfirm"
    />
  </view>
</template>

<script>
export default {
  name: 'Picker',
  data() {
    return {
      title: '',
      form: {
        area: {
          value: [1],
          text: '上海'
        },
        gender: {
          value: [1, 1],
          text: '美国，女'
        },
        identity: {
          value: [2, 0, 2],
          text: '群众，老板，王五'
        }
      },
      pickerOptions: {
        key: '',
        show: false,
        items: [],
        type: 'single',
        defaultValue: null
      }
    }
  },
  methods: {
    handleShowPicker(formKey, config) {
      const configMap = {
        popupSelect: {
          showTitle: true,
          title: 'popupSelect配置',
          borderRadius: '24rpx 24rpx 0 0',
          titlePadding: '32rpx',
          height: '80%',
          toolbarPosition: 'top'
        }
      }

      const formKeyPickerMap = {
        area: {
          title: 'default-value = [1]',
          type: 'single',
          items: [
            { id: 'beijing', text: '北京' },
            { id: 'shanghai', text: '上海' },
            { id: 'zhuhai', text: '珠海' }
          ]
        },
        gender: {
          title: 'default-value = [1, 1]',
          type: 'multi',
          items: [
            [
              { id: 'china', text: '中国' },
              { id: 'us', text: '美国' },
              { id: 'uk', text: '英国' },
              { id: 'ru', text: '俄罗斯' }
            ],
            [
              { id: 'male', text: '男' },
              { id: 'famale', text: '女' },
              { id: 'unknown', text: '未知' }
            ]
          ]
        },
        identity: {
          title: 'default-value = [2, 0, 2]',
          type: 'multi-auto',
          items: [
            {
              id: 'partyMember',
              text: '党员',
              children: [
                { id: 'shuji', text: '书记' },
                { id: 'member', text: '支书' },
                { id: 'committee', text: '村委员' }
              ]
            },
            {
              id: 'member',
              text: '团员',
              children: [
                { id: 'header', text: '队长' },
                { id: 'pacesetter', text: '标兵' }
              ]
            },
            {
              id: 'qunzhong',
              text: '群众',
              children: [
                {
                  id: 'boss',
                  text: '老板',
                  children: [
                    { id: 'person1', text: '张三' },
                    { id: 'person2', text: '李四' },
                    { id: 'person3', text: '王五' },
                    { id: 'person4', text: '赵六' }
                  ]
                },
                { id: 'worker', text: '打工仔' },
                { id: 'farmer', text: '农民' }
              ]
            }
          ]
        }
      }
      this.pickerOptions = {
        key: formKey,
        show: true,
        defaultValue: this.form[formKey].value,
        [config]: configMap[config],
        ...formKeyPickerMap[formKey]
      }
    },

    handleShowBtnSelect() {
      this.pickerOptions = {
        key: 'area',
        show: true,
        defaultValue: [1],
        title: '自定义按钮',
        type: 'single',
        items: [
          { id: 'beijing', text: '北京' },
          { id: 'shanghai', text: '上海' },
          { id: 'zhuhai', text: '珠海' }
        ],
        confirmBtn: { show: true, type: 'warn', round: true },
        cancelBtn: { show: true, type: 'line', round: true }
      }
    },

    handlePickerConfirm(value) {
      const formField = this.form[this.pickerOptions.key]
      formField.value = value

      if (this.pickerOptions.type === 'single') {
        formField.text = this.pickerOptions.items[value[0]].text
      }
      if (this.pickerOptions.type === 'multi') {
        formField.text = this.pickerOptions.items.map((item, i) => item[value[i]].text).join('，')
      }

      if (this.pickerOptions.type === 'multi-auto') {
        let columns = this.pickerOptions.items
        formField.text = value
          .map((val, index) => {
            const returnValue = columns[val].text
            if (columns[val].children) {
              columns = columns[val].children
            }
            return returnValue
          })
          .join('，')
      }

      return true
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep input {
  width: 100%;
  text-align: right;
}
</style>
