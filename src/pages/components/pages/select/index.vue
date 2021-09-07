<template>
  <view class="pi-scroll-container">
    <pi-navbar title="select 选择器" />
    <scroll-view class="pi-scroll" scroll-y>
      <pi-card padding="0">
        <pi-section slot="title" padding="24" title="基础用法" />
        <template slot="body">
          <pi-form border>
            <pi-form-item label="地区" show-right-icon @click="baseUsed.show = true">
              <input
                :value="baseUsed.defaultValue.text"
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
        <pi-section slot="title" padding="24" title="多选模式" />
        <template slot="body">
          <pi-form border>
            <pi-form-item label="地区" show-right-icon @click="multi.show = true">
              <input
                :value="multi.defaultValue.map(i => i.text).join('，')"
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
        <pi-section slot="title" padding="24" title="顶部工具栏" />
        <template slot="body">
          <pi-form border>
            <pi-form-item label="地区" show-right-icon @click="topToolbar.show = true">
              <input
                :value="topToolbar.defaultValue.text"
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
        <pi-section slot="title" padding="24" title="复选框定制" />
        <template slot="body">
          <pi-form border>
            <pi-form-item label="地区" show-right-icon @click="checkbox.show = true">
              <input
                :value="checkbox.defaultValue.text"
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
        <pi-section slot="title" padding="24" title="顶部工具栏slot定制" />
        <template slot="body">
          <pi-form border>
            <pi-form-item label="地区" show-right-icon @click="topToolbarSlot.show = true">
              <input
                :value="topToolbarSlot.defaultValue.text"
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
    <!-- 基础用法 -->
    <pi-select
      v-model="baseUsed.show"
      :items="baseUsed.items"
      :single-cancel="false"
      :default-value="baseUsed.defaultValue"
      :popup-select="{
        showTitle: true,
        title: '请选择地区'
      }"
      @confirm="baseUsed.defaultValue = $event"
    />
    <!-- 多选模式 -->
    <pi-select
      v-model="multi.show"
      :items="multi.items"
      is-multi
      :default-value="multi.defaultValue"
      :popup-select="{
        showTitle: true,
        title: '请选择身份'
      }"
      @confirm="multi.defaultValue = $event"
    />
    <!-- 顶部工具栏 -->
    <pi-select
      v-model="topToolbar.show"
      :items="topToolbar.items"
      :default-value="topToolbar.defaultValue"
      :popup-select="{
        showTitle: false,
        toolbarPosition: 'top'
      }"
      @confirm="topToolbar.defaultValue = $event"
    />
    <!-- 复选框定制 -->
    <pi-select
      v-model="checkbox.show"
      :items="checkbox.items"
      :single-cancel="false"
      :default-value="checkbox.defaultValue"
      :popup-select="{
        showTitle: true,
        title: '请选择地区'
      }"
      :selected-checkbox="{
        border: 0,
        activeMode: 'line-circle',
        iconSize: 40
      }"
      @confirm="baseUsed.defaultValue = $event"
    />
    <!-- 顶部工具栏slot定制 -->
    <pi-select
      ref="topToolbarSlot"
      v-model="topToolbarSlot.show"
      :items="topToolbarSlotItems"
      :default-value="topToolbarSlot.defaultValue"
      :popup-select="{
        showTitle: false,
        toolbarPosition: 'none'
      }"
      @confirm="topToolbarSlot.defaultValue = $event"
    >
      <view slot="header" class="pi-align-center pi-content">
        <view class="pi-pd-right-24" @tap="topToolbarSlot.show = false">取消</view>
        <pi-search v-model="topToolbarSlot.keywrod" class="pi-flex-sub" />
        <view class="pi-pd-left-24 pi-primary" @tap="handleConfirmToolbarSlot">确定</view>
      </view>
    </pi-select>
  </view>
</template>

<script>
export default {
  name: 'Select',
  data() {
    return {
      baseUsed: {
        show: false,
        items: [
          { id: 'beijing', text: '北京' },
          { id: 'shanghai', text: '上海', disabled: true },
          { id: 'zhuhai', text: '珠海' }
        ],
        defaultValue: { id: 'zhuhai', text: '珠海' }
      },
      multi: {
        show: false,
        items: [
          { id: 'partyMember', text: '党员', disabled: true },
          { id: 'member', text: '团员' },
          { id: 'masses', text: '群众' },
          { id: 'renmin', text: '人民' },
          { id: 'guanyuan', text: '官员' },
          { id: 'dangyuan', text: '党员' }
        ],
        defaultValue: [
          { id: 'member', text: '团员' },
          { id: 'masses', text: '群众' }
        ]
      },
      topToolbar: {
        show: false,
        items: [
          { id: 'A', text: '工程A' },
          { id: 'B', text: '工程B' },
          { id: 'C', text: '工程C' }
        ],
        defaultValue: { id: 'C', text: '工程C' }
      },
      checkbox: {
        show: false,
        items: [
          { id: 'beijing', text: '北京' },
          { id: 'shanghai', text: '上海', disabled: true },
          { id: 'zhuhai', text: '珠海' }
        ],
        defaultValue: { id: 'zhuhai', text: '珠海' }
      },
      topToolbarSlot: {
        show: false,
        keywrod: '',
        items: [
          { id: 'A', text: '工程A' },
          { id: 'AB', text: '工程AB' },
          { id: 'ABC', text: '工程ABC' },
          { id: 'D', text: '工程D' },
          { id: 'E', text: '工程E' },
          { id: 'F', text: '工程F' },
          { id: 'G', text: '工程G' }
        ],
        defaultValue: { id: 'D', text: '工程D' }
      }
    }
  },
  computed: {
    topToolbarSlotItems() {
      return this.topToolbarSlot.items.filter(item =>
        item.text.includes(this.topToolbarSlot.keywrod)
      )
    }
  },
  methods: {
    handleConfirmToolbarSlot() {
      this.$refs.topToolbarSlot.handleConfirm()
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  text-align: right;
}
</style>
