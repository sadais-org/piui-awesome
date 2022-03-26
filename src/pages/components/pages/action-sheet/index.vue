<template>
  <view class="pi-scroll-container">
    <pi-navbar title="动作面板" />
    <scroll-view class="pi-scroll" scroll-y>
      <pi-card padding="0">
        <pi-section slot="title" padding="24">基础使用</pi-section>
        <template slot="body">
          <pi-form show-right-icon>
            <pi-form-item label="基础使用" @click="baseUsed.show = true">
              <input
                :value="form.baseUsed"
                type="text"
                class="input"
                placeholder="请选择"
                disabled
              />
            </pi-form-item>
            <pi-form-item label="展示描述信息" @click="description.show = true">
              <input
                :value="form.description"
                type="text"
                class="input"
                placeholder="请选择"
                disabled
              />
            </pi-form-item>
            <pi-form-item label="展示取消按钮" @click="cancelText.show = true">
              <input
                :value="form.cancelText"
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
        <pi-section slot="title" padding="24">选项状态</pi-section>
        <template slot="body">
          <pi-form show-right-icon>
            <pi-form-item label="选项状态" @click="itemOption.show = true">
              <input
                :value="form.itemOption"
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
    <pi-action-sheet
      v-model="baseUsed.show"
      :items="baseUsed.items"
      @select="form.baseUsed = $event.text"
    />
    <pi-action-sheet
      v-model="description.show"
      :items="description.items"
      description="这是一段描述文字"
      @select="form.description = $event.text"
    />
    <pi-action-sheet
      v-model="cancelText.show"
      :items="cancelText.items"
      cancel-text="取消"
      @select="form.cancelText = $event.text"
    />
    <pi-action-sheet
      v-model="itemOption.show"
      :items="itemOption.items"
      @select="form.itemOption = $event.text"
    />
  </view>
</template>

<script>
export default {
  name: 'ActionSheet',
  data() {
    return {
      title: '',
      form: {
        baseUsed: '选项一',
        description: '选项二',
        cancelText: '选项三',
        itemOption: '着色选项'
      },
      baseUsed: {
        show: false,
        items: [
          { id: 1, text: '选项一' },
          { id: 2, text: '选项二' },
          { id: 3, text: '选项三' }
        ],
        defaultValue: null
      },
      description: {
        show: false,
        items: [
          { id: 1, text: '选项一' },
          { id: 2, text: '选项二' },
          { id: 3, text: '选项三' }
        ],
        defaultValue: null
      },
      cancelText: {
        show: false,
        items: [
          { id: 1, text: '选项一' },
          { id: 2, text: '选项二' },
          { id: 3, text: '选项三' }
        ],
        defaultValue: null
      },
      itemOption: {
        show: false,
        items: [
          { id: 1, text: '着色选项', color: '#ee0a24' },
          { id: 2, text: '禁用选项', disabled: true },
          { id: 3, text: '加载选项', loading: true }
        ],
        defaultValue: null
      }
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
::v-deep input {
  width: 100%;
  text-align: right;
}
</style>
