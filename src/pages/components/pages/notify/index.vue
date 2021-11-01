<template>
  <view class="pi-scroll-container">
    <pi-navbar title="消息通知" />
    <pi-notify
      ref="notify"
      :message="notifyMsg[itemClick]"
      :type="itemClick"
      :color="customConfig.color"
      :bg-color="customConfig.bgColor"
    />
    <scroll-view class="pi-scroll" scroll-y>
      <!-- 基础用法 -->
      <pi-card padding="0">
        <pi-section slot="title" padding="24" title="基础用法" />
        <template slot="body">
          <pi-list-item @click="baseNotifyClick()">
            基础用法
          </pi-list-item>
        </template>
      </pi-card>
      <!-- 通知类型 -->
      <pi-card padding="0">
        <pi-section slot="title" padding="24" title="通知类型" />
        <template slot="body">
          <pi-list-item
            v-for="item in itemNotifies"
            :key="item.notify"
            @click="itemNotifyClick(item)"
          >
            {{ item.notify }}
          </pi-list-item>
        </template>
      </pi-card>
      <!-- 自定义配置 -->
      <pi-card padding="0">
        <pi-section slot="title" padding="24" title="通知类型" />
        <template slot="body">
          <pi-list-item @click="customNotifyClick()">
            自定义字体颜色和背景色
          </pi-list-item>
          <pi-list-item @click="customDurationClick()">
            自定义显示时长
          </pi-list-item>
        </template>
      </pi-card>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Notify',
  data() {
    return {
      itemClick: 'base', // 选中的列表项
      customClick: false // 是否点击自定义配置项
    }
  },
  computed: {
    notifyMsg() {
      return {
        base: '这是一条消息通知',
        primary: '床前明月光，疑是地上霜',
        success: '恭喜你，答对了✔',
        danger: '危险，请勿靠近！',
        warning: '劳逸结合，休息一下⏰',
        info: '坐太久了，出去走走吧~',
        customDuration: '这是一条很长很长很长很长......'
      }
    },
    itemNotifies() {
      return [
        { notify: '主要通知', type: 'primary' },
        { notify: '成功通知', type: 'success' },
        { notify: '危险通知', type: 'danger' },
        { notify: '警告通知', type: 'warning' },
        { notify: '提示通知', type: 'info' }
      ]
    },
    customConfig() {
      return {
        color: this.customClick ? 'purple' : '',
        bgColor: this.customClick ? 'pink' : ''
      }
    }
  },
  methods: {
    baseNotifyClick() {
      this.itemClick = 'base'
      if (this.customClick) this.customClick = false
      this.$refs.notify.showNotify()
    },
    itemNotifyClick(item) {
      this.itemClick = item.type
      if (this.customClick) this.customClick = false
      this.$refs.notify.showNotify()
    },
    customNotifyClick() {
      this.customClick = true
      this.itemClick = ''
      this.notifyMsg[this.itemClick] = '可以自定义设置你喜欢的颜色和背景色'
      this.$refs.notify.showNotify()
    },
    customDurationClick() {
      this.itemClick = 'customDuration'
      if (this.customClick) this.customClick = false
      this.$refs.notify.showNotify({
        duration: 15000
      })
    }
  }
}
</script>
