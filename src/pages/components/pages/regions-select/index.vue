<template>
  <view class="pi-scroll-container">
    <pi-navbar title="地区选择" />
    <scroll-view class="pi-scroll" scroll-y>
      <view class="pi-content">
        该组件地区数据不全，请到下载最新数据，传入regions-data（https://github.com/modood/Administrative-divisions-of-China/blob/master/dist/pca-code.json）
      </view>
      <pi-list title="地区选择">
        <pi-list-item title="地区" @tap="handleShowSelect('regions')">
          <input
            :value="form.regions.name"
            type="text"
            class="input"
            placeholder="请选择"
            disabled
          />
        </pi-list-item>
        <pi-list-item title="地区2" @tap="handleShowSelect('regions1')">
          <input
            :value="form.regions1.name"
            type="text"
            class="input"
            placeholder="请选择"
            disabled
          />
        </pi-list-item>
        <pi-list-item title="地区3" @tap="handleShowSelect('regions2')">
          <input
            :value="form.regions2.name"
            type="text"
            class="input"
            placeholder="请选择"
            disabled
          />
        </pi-list-item>
      </pi-list>
    </scroll-view>
    <pi-regions-select
      v-model="selectOptions.show"
      :regions-data="regionsData"
      :default-value="selectOptions.defaultValue"
      show-title
      height="60vh"
      toolbar-position="bottom"
      :title="selectOptions.title"
      border-radius="24rpx 24rpx 0 0"
      append-to-body
      @confirm="handleSelectConfirm"
    />
  </view>
</template>

<script>
import regions from '@/utils/regions'

export default {
  name: 'Select',
  data() {
    return {
      title: '',
      form: {
        regions: { code: '110101000000', name: '' },
        regions1: { code: '11', name: '' },
        regions2: { code: '442000000', name: '广东省中山市' }
      },
      selectOptions: {
        key: '',
        show: false,
        isMulti: false,
        defaultValue: null
      }
    }
  },
  computed: {
    regionsData() {
      return regions
    }
  },
  methods: {
    handleShowSelect(formKey) {
      this.selectOptions = {
        key: formKey,
        show: true,
        defaultValue: this.form[formKey],
        title: this.form[formKey].title
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
