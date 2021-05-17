<template>
  <view class="pi-scroll-container">
    <pi-navbar title="Mask" />
    <scroll-view class="pi-scroll" scroll-y>
      <!-- 基础用法 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="基础用法" />
        <template slot="body">
          <pi-button type="primary" @click="baseUsed.show = true">
            显示蒙层
          </pi-button>
        </template>
      </pi-card>
      <!-- 过渡动画 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="过渡动画" />
        <template slot="body">
          <pi-button type="primary" @click="handleShowAnimation('top')">
            顶部滑入滑出
          </pi-button>
          <pi-button type="primary" @click="handleShowAnimation('bottom')">
            下方滑入滑出
          </pi-button>
          <pi-button type="primary" @click="handleShowAnimation('left')">
            左侧滑入滑出
          </pi-button>

          <pi-button type="primary" @click="handleShowAnimation('right')">
            右侧滑入滑出
          </pi-button>
        </template>
      </pi-card>
      <!-- 过渡时间 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="过渡时间（duration: 3000）" />
        <template slot="body">
          <pi-button type="primary" @click="duration.show = true">
            显示蒙层
          </pi-button>
        </template>
      </pi-card>
      <!-- 点击遮罩层不关闭 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="点击遮罩层不关闭" />
        <template slot="body">
          <pi-button type="primary" @click="maskClosable.show = true">
            显示蒙层
          </pi-button>
        </template>
      </pi-card>
      <!-- 背景颜色 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="背景颜色" />
        <template slot="body">
          <pi-button type="primary" @click="background.show = true">
            显示蒙层
          </pi-button>
        </template>
      </pi-card>
    </scroll-view>
    <!-- 基础用法 popup -->
    <pi-mask v-model="baseUsed.show" />
    <pi-mask
      v-model="animation.show"
      :animation-show="animation.animationShow"
      :animation-hide="animation.animationHide"
    />
    <pi-mask v-model="duration.show" duration="3000" />
    <pi-mask ref="unClosableMask" v-model="maskClosable.show" :mask-closable="false">
      <view class="pi-abso-center">
        <pi-button
          color="#5A8FFF"
          bg-color="#EEF2FF"
          width="250"
          round
          @click="handleCloseUnClosableMask"
        >
          关闭蒙层
        </pi-button>
      </view>
    </pi-mask>
    <pi-mask v-model="background.show" append-to-body background="rgba(0, 0, 0, .9)" />
  </view>
</template>

<script>
export default {
  name: 'MaskPage',
  data() {
    return {
      baseUsed: {
        show: false
      },
      animation: {
        show: false,
        animationShow: 'pi-ani-slide-top-show',
        animationHide: 'pi-ani-slide-top-hide',
        style: { width: '100%', height: '800rpx' }
      },
      duration: {
        show: false
      },
      maskClosable: {
        show: false
      },
      background: {
        show: false
      }
    }
  },
  methods: {
    handleShowAnimation(position = 'top') {
      const positionAnimationMap = {
        top: { animationShow: 'pi-ani-slide-top-show', animationHide: 'pi-ani-slide-top-hide' },
        bottom: {
          animationShow: 'pi-ani-slide-bottom-show',
          animationHide: 'pi-ani-slide-bottom-hide'
        },
        left: { animationShow: 'pi-ani-slide-left-show', animationHide: 'pi-ani-slide-left-hide' },
        right: {
          animationShow: 'pi-ani-slide-right-show',
          animationHide: 'pi-ani-slide-right-hide'
        }
      }
      this.animation = {
        show: true,
        ...positionAnimationMap[position]
      }
    },
    handleCloseUnClosableMask() {
      this.$refs.unClosableMask.closeMask()
    }
  }
}
</script>

<style>
.pi-button {
  display: block;
  width: 380rpx;
  margin-top: 5rpx;
}
</style>
