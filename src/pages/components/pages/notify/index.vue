<template>
  <view class="pi-scroll-container">
    <pi-navbar title="消息通知" />
    <scroll-view class="pi-scroll pi-pd-bottom-24" scroll-y>
      <!-- 基础用法 -->
      <pi-card padding="0">
        <pi-section slot="title" padding="24" title="基础用法" />
        <template slot="body">
          <pi-list-item @click="baseUsed = true">
            基础用法
          </pi-list-item>
        </template>
      </pi-card>
      <!-- 通知类型 -->
      <pi-card padding="0">
        <pi-section slot="title" padding="24" title="通知类型" />
        <template slot="body">
          <pi-list-item @click="primary = true">
            主要通知
          </pi-list-item>
          <pi-list-item @click="success = true">
            成功通知
          </pi-list-item>
          <pi-list-item @click="danger = true">
            危险通知
          </pi-list-item>
          <pi-list-item @click="warning = true">
            警告通知
          </pi-list-item>
          <pi-list-item @click="info = true">
            提示通知
          </pi-list-item>
        </template>
      </pi-card>
      <!-- 自定义配置 -->
      <pi-card padding="0">
        <pi-section slot="title" padding="24" title="自定义配置" />
        <template slot="body">
          <pi-list-item @click="customConfig = true">
            自定义字体颜色和背景色
          </pi-list-item>
          <pi-list-item @click="multiLine = true">
            换行显示
          </pi-list-item>
          <pi-list-item @click="singleLine = true">
            单行显示，自动隐藏显示省略号
          </pi-list-item>
        </template>
      </pi-card>
    </scroll-view>
    <!-- 基础用法 -->
    <pi-notify v-model="baseUsed" message="大吉大利，今晚吃鸡~" />
    <!-- 主要通知 -->
    <pi-notify v-model="primary" type="primary" message="床前明月光，疑是地上霜" />
    <!-- 成功通知 -->
    <pi-notify v-model="success" type="success" message="恭喜你，答对了✔" />
    <!-- 危险通知 -->
    <pi-notify v-model="danger" type="danger" message="危险，请勿靠近！" />
    <!-- 警告通知 -->
    <pi-notify v-model="warning" type="warning" message="劳逸结合，休息一下⏰" />
    <!-- 提示通知 -->
    <pi-notify v-model="info" type="info" message="坐太久了，出去走走吧~" />
    <!-- 自定义配置 -->
    <pi-notify
      v-model="customConfig"
      color="#ffffff"
      bg-color="#ff508a"
      message="可以自定义设置你喜欢的颜色和背景色"
    />
    <pi-notify
      v-model="multiLine"
      message="多行文本显示，超长文本自动隐藏显示省略号，可以显示更多内容"
    />
    <pi-notify
      v-model="singleLine"
      single-line
      message="单行文本显示，超长文本自动隐藏显示省略号，优化用户体验~"
    />
  </view>
</template>

<script>
export default {
  name: 'Notify',
  data() {
    return {
      baseUsed: false,
      primary: false,
      success: false,
      danger: false,
      warning: false,
      info: false,
      customConfig: false,
      multiLine: false,
      singleLine: false
    }
  }
}
</script>
