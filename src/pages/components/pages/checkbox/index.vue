<template>
  <view class="pi-scroll-container checkbox-demo">
    <pi-navbar title="checkbox" />
    <scroll-view class="pi-scroll" scroll-y="">
      <!-- 基础用法 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="基础用法" />
        <template slot="body">
          <pi-checkbox v-model="base">复选框</pi-checkbox>
        </template>
      </pi-card>
      <!-- 无边框 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="无边框" />
        <template slot="body">
          <pi-checkbox v-model="border" border="0" active-mode="line-circle" icon-size="40">
            复选框
          </pi-checkbox>
        </template>
      </pi-card>
      <!-- 搭配checkbox-group使用 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="搭配checkbox-group使用" />
        <template slot="body">
          <pi-checkbox-group v-model="checkboxGroup">
            <pi-checkbox name="A">选项一</pi-checkbox>
            <pi-checkbox name="B">选项二</pi-checkbox>
            <pi-checkbox name="C">选项三</pi-checkbox>
          </pi-checkbox-group>
        </template>
      </pi-card>
      <!-- 自定义颜色（active-color="#ff508a"）-->
      <pi-card>
        <pi-section slot="title" padding="0" title="自定义颜色" />
        <template slot="body">
          <pi-checkbox-group v-model="customColor" direction="vertical" active-color="#ff508a">
            <pi-checkbox name="square" shape="square" active-color="#ff508a">
              方形（默认）
            </pi-checkbox>
            <pi-checkbox
              name="square-fill"
              shape="square"
              active-color="#ff508a"
              active-mode="fill"
            >
              方形（填充）
            </pi-checkbox>
            <pi-checkbox name="round" shape="round" active-color="#ff508a">
              圆形
            </pi-checkbox>
            <pi-checkbox name="round-fill" shape="round" active-mode="fill" active-color="#ff508a">
              圆形（填充）
            </pi-checkbox>
            <pi-checkbox name="dot" shape="dot" active-color="#ff508a">
              圆点
            </pi-checkbox>
            <pi-checkbox name="dot-fill" shape="dot" active-color="#ff508a" active-mode="fill">
              圆点（填充）
            </pi-checkbox>
            <pi-checkbox name="text" shape="text" active-color="#ff508a">文字</pi-checkbox>
            <pi-checkbox name="text-fill" shape="text" active-color="#ff508a" active-mode="fill">
              文字（填充）
            </pi-checkbox>
          </pi-checkbox-group>
        </template>
      </pi-card>
      <!-- 自定义形状 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="自定义形状" />
        <template slot="body">
          <pi-checkbox-group v-model="customShape" direction="vertical">
            <pi-checkbox name="square" shape="square">方形（默认）</pi-checkbox>
            <pi-checkbox name="round" shape="round">圆形</pi-checkbox>
            <pi-checkbox name="dot" shape="dot">圆点</pi-checkbox>
            <pi-checkbox name="text" shape="text">文字</pi-checkbox>
          </pi-checkbox-group>
        </template>
      </pi-card>
      <!-- 填充模式 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="填充模式" />
        <template slot="body">
          <pi-checkbox-group v-model="customFill" direction="vertical">
            <pi-checkbox name="square" shape="square" active-mode="line">
              方形
            </pi-checkbox>
            <pi-checkbox name="square-circle" shape="square" active-mode="line-circle">
              方形（线环）
            </pi-checkbox>
            <pi-checkbox name="square-fill-circle" shape="square" active-mode="fill-circle">
              方形（填充环）
            </pi-checkbox>
            <pi-checkbox name="round" shape="round" active-mode="line">
              圆形
            </pi-checkbox>
            <pi-checkbox name="round-circle" shape="round" active-mode="line-circle">
              圆形（线环）
            </pi-checkbox>
            <pi-checkbox name="round-fill-circle" shape="round" active-mode="fill-circle">
              圆形（填充环）
            </pi-checkbox>
            <pi-checkbox name="dot" shape="dot" active-mode="fill">圆点</pi-checkbox>
            <pi-checkbox name="dot-circle" shape="dot" active-mode="line-circle">
              圆点（线环）
            </pi-checkbox>
            <pi-checkbox name="dot-fill-circle" shape="dot" active-mode="fill-circle">
              圆点（填充环）
            </pi-checkbox>
          </pi-checkbox-group>
        </template>
      </pi-card>
      <!-- 自定义形状（禁用）-->
      <pi-card>
        <pi-section slot="title" padding="0" title="自定义形状（禁用）" />
        <template slot="body">
          <pi-checkbox-group v-model="customShapeDisabled" direction="vertical">
            <pi-checkbox name="square" shape="square" disabled>方形（默认）</pi-checkbox>
            <pi-checkbox name="round" shape="round" disabled>圆形</pi-checkbox>
            <pi-checkbox name="dot" shape="dot" disabled>圆点</pi-checkbox>
            <pi-checkbox name="text" shape="text" disabled>文字</pi-checkbox>
          </pi-checkbox-group>
        </template>
      </pi-card>
      <!-- 填充模式（禁用） -->
      <pi-card>
        <pi-section slot="title" padding="0" title="填充模式（禁用）" />
        <template slot="body">
          <pi-checkbox-group v-model="customFillDisabled" direction="vertical">
            <pi-checkbox name="square" shape="square" active-mode="fill" disabled>
              方形（默认）
            </pi-checkbox>
            <pi-checkbox name="round" shape="round" active-mode="fill" disabled>圆形</pi-checkbox>
            <pi-checkbox name="dot" shape="dot" active-mode="fill" disabled>圆点</pi-checkbox>
            <pi-checkbox name="text" shape="text" active-mode="fill" disabled>文字</pi-checkbox>
          </pi-checkbox-group>
        </template>
      </pi-card>
      <!-- 最多选择2项 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="最多选择2项（max:2）" />
        <template slot="body">
          <pi-checkbox-group v-model="max2" max="2">
            <pi-checkbox name="A">
              选项一
            </pi-checkbox>
            <pi-checkbox name="B">
              选项二
            </pi-checkbox>
            <pi-checkbox name="C">
              选项三
            </pi-checkbox>
          </pi-checkbox-group>
        </template>
      </pi-card>
      <!-- 全选与反选 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="全选与反选" />
        <template slot="body">
          <pi-checkbox-group
            ref="checkboxGroup"
            v-model="toggleSelected"
            direction="vertical"
            active-mode="fill"
          >
            <pi-checkbox name="A">
              选项一
            </pi-checkbox>
            <pi-checkbox name="B" disabled>
              选项二
            </pi-checkbox>
            <pi-checkbox name="C">
              选项三
            </pi-checkbox>
            <pi-checkbox name="D">
              选项三
            </pi-checkbox>
          </pi-checkbox-group>
        </template>
        <template slot="footer">
          <pi-button
            :custom-style="{ marginRight: '24rpx' }"
            size="small"
            type="primary"
            @click="handleSelectAll"
          >
            全选
          </pi-button>
          <pi-button size="small" type="secondary" @click="handleUnSelectAll">
            反选
          </pi-button>
        </template>
      </pi-card>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Checkbox',
  data() {
    return {
      base: true, // 基础用法
      border: true, // 边框
      checkboxGroup: ['A', 'C'], // 搭配checkbox-group使用
      customColor: [
        // 自定义颜色
        'square',
        'round',
        'dot',
        'text',
        'square-fill',
        'round-fill',
        'dot-fill',
        'text-fill'
      ],
      customShape: ['square', 'round', 'dot', 'text'], // 自定义形状
      customFill: ['square', 'round', 'dot', 'text'], // 填充模式
      customShapeDisabled: ['dot', 'text'], // 自定义形状（禁用）
      customFillDisabled: ['dot', 'text'], // 填充模式（禁用）
      max2: ['A', 'B'], // 最多选择2项
      toggleSelected: ['A', 'C', 'D'] // 全选与反选
    }
  },
  methods: {
    handleSelectAll() {
      this.$refs.checkboxGroup.toggleSelect(true)
    },
    handleUnSelectAll() {
      this.$refs.checkboxGroup.toggleSelect(false)
    }
  }
}
</script>
