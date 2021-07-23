<template>
  <view class="pi-scroll-container">
    <pi-navbar title="Popup" />
    <scroll-view class="pi-scroll" scroll-y>
      <!-- 基础用法 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="基础用法" />
        <template slot="body">
          <pi-button type="primary" @click="baseUsed.show = true">
            显示弹出层
          </pi-button>
        </template>
      </pi-card>
      <!-- 设置弹出高度（非内容撑开） -->
      <pi-card>
        <pi-section slot="title" padding="0" title="设置弹出高度" desc="非内容撑开" />
        <template slot="body">
          <pi-button type="primary" @click="customHeight.show = true">
            显示弹出层
          </pi-button>
        </template>
      </pi-card>
      <!-- 弹出位置 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="弹出位置" desc="position" />
        <template slot="body">
          <pi-grid col="2" gap="24" :border="false">
            <pi-grid-item :index="0">
              <pi-button type="primary" @click="handleShowPosition('top')">
                上方弹出
              </pi-button>
            </pi-grid-item>
            <pi-grid-item :index="1">
              <pi-button type="primary" @click="handleShowPosition('bottom')">
                下方弹出
              </pi-button>
            </pi-grid-item>
            <pi-grid-item :index="2">
              <pi-button type="primary" @click="handleShowPosition('left')">
                左侧弹出
              </pi-button>
            </pi-grid-item>
            <pi-grid-item :index="3">
              <pi-button type="primary" @click="handleShowPosition('right')">
                右侧弹出
              </pi-button>
            </pi-grid-item>
          </pi-grid>
        </template>
      </pi-card>
      <!-- 背景颜色 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="背景颜色" desc="background" />
        <template slot="body">
          <pi-button type="primary" @click="background.show = true">
            显示弹出层
          </pi-button>
        </template>
      </pi-card>
      <!-- 圆角 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="圆角" desc="borderRadius" />
        <template slot="body">
          <pi-button type="primary" @click="borderRadius.show = true">
            显示弹出层
          </pi-button>
        </template>
      </pi-card>
      <!-- 是否显示关闭按钮 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="是否显示关闭按钮" />
        <template slot="body">
          <pi-grid col="2" gap="24" :border="false">
            <pi-grid-item :index="0">
              <pi-button type="primary" @click="handleShowCloseIcon(true)">
                显示关闭按钮
              </pi-button>
            </pi-grid-item>
            <pi-grid-item :index="1">
              <pi-button type="primary" @click="handleShowCloseIcon(false)">
                隐藏关闭按钮
              </pi-button>
            </pi-grid-item>
          </pi-grid>
        </template>
      </pi-card>
      <!-- 自定义关闭按钮 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="自定义关闭按钮" />
        <template slot="body">
          <pi-button type="primary" @click="closeIcon.show = true">
            显示弹出层
          </pi-button>
        </template>
      </pi-card>
    </scroll-view>
    <!-- 基础用法 popup -->
    <pi-popup v-model="baseUsed.show">
      <view style="height: 800rpx;" />
    </pi-popup>
    <!-- 设置弹出高度（非内容撑开） -->
    <pi-popup
      v-model="customHeight.show"
      :custom-style="{
        height: '50%'
      }"
    />
    <!-- 弹出位置 popup -->
    <pi-popup v-model="position.show" :position="position.position">
      <view :style="[position.style]" />
    </pi-popup>
    <!-- 背景颜色 -->
    <pi-popup v-model="background.show" background="rgba(0, 0, 0, 0.8)">
      <view style="height: 800rpx;" />
    </pi-popup>
    <!-- 圆角设置 -->
    <pi-popup v-model="borderRadius.show" border-radius="48rpx 48rpx 0 0">
      <view style="height: 800rpx;" />
    </pi-popup>
    <!-- 是否显示关闭按钮 -->
    <pi-popup v-model="showCloseIcon.show" :show-close-icon="showCloseIcon.closeIcon">
      <view style="height: 800rpx;" />
    </pi-popup>
    <!-- 自定义关闭按钮 -->
    <pi-popup v-model="closeIcon.show" :close-icon="closeIcon.closeIcon">
      <view style="height: 100vh;" />
    </pi-popup>
  </view>
</template>

<script>
export default {
  name: 'PopupPage',
  data() {
    return {
      baseUsed: {
        show: false
      },
      customHeight: false,
      position: {
        show: false,
        position: 'top',
        style: { width: '100%', height: '800rpx' }
      },
      background: {
        show: false
      },
      borderRadius: {
        show: false
      },
      showCloseIcon: {
        show: false,
        closeIcon: true
      },
      closeIcon: {
        show: false,
        closeIcon: {
          name: 'back',
          padding: '32rpx 32rpx',
          color: '#666666',
          position: 'tl'
        }
      }
    }
  },
  methods: {
    handleShowPosition(position = 'top') {
      const positionStyleMap = {
        top: { width: '100%', height: '800rpx' },
        bottom: { width: '100%', height: '800rpx' },
        left: { width: '500rpx', height: '100%' },
        right: { width: '500rpx', height: '100%' }
      }
      this.position = {
        show: true,
        position,
        style: positionStyleMap[position]
      }
    },
    handleShowCloseIcon(closeIcon) {
      this.showCloseIcon = {
        show: true,
        closeIcon
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
