<template>
  <view class="pi-scroll-container checkbox-demo">
    <pi-navbar title="checkbox" />
    <scroll-view class="pi-scroll" scroll-y="">
      <!-- 基础用法 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="基础用法" show-right-icon />
        <template slot="body">
          <pi-checkbox v-model="demo1">复选框</pi-checkbox>
        </template>
      </pi-card>
      <!-- 自定义颜色 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="自定义颜色（#ff508a）" show-right-icon />
        <template slot="body">
          <pi-checkbox v-model="demo2" active-color="#ff508a">
            自定义颜色
          </pi-checkbox>
        </template>
      </pi-card>

      <!-- 自定义形状 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="自定义形状" show-right-icon />
        <template slot="body">
          <pi-checkbox-group direction="vertical">
            <pi-checkbox v-model="demo1" shape="square">方形（默认）</pi-checkbox>
            <pi-checkbox v-model="demo1" shape="round">圆形</pi-checkbox>
            <pi-checkbox v-model="demo1" shape="dot">圆点</pi-checkbox>
            <pi-checkbox v-model="demo1" shape="text">文字</pi-checkbox>
          </pi-checkbox-group>
        </template>
      </pi-card>
      <!-- 填充模式 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="填充模式" show-right-icon />
        <template slot="body">
          <pi-checkbox-group direction="vertical">
            <pi-checkbox v-model="demo1" shape="square" active-mode="fill">
              方形（默认）
            </pi-checkbox>
            <pi-checkbox v-model="demo1" shape="round" active-mode="fill">圆形</pi-checkbox>
            <pi-checkbox v-model="demo1" shape="dot" active-mode="fill">圆点</pi-checkbox>
            <pi-checkbox v-model="demo1" shape="text" active-mode="fill">文字</pi-checkbox>
          </pi-checkbox-group>
        </template>
      </pi-card>
      <pi-checkbox v-model="defaultCustomColor" active-color="#ee0a24">
        自定义颜色
      </pi-checkbox>
      <pi-checkbox v-model="fillCustomColor" active-color="#ee0a24" active-mode="fill">
        填充
      </pi-checkbox>
      <pi-checkbox v-model="demo1">复选框</pi-checkbox>
      <pi-checkbox-group ref="checkboxGroup1" v-model="checkboxGroupMax" direction="vertical">
        <pi-checkbox v-model="defaultCheckbox">默认复选框</pi-checkbox>
        <pi-checkbox v-model="fillCheckbox" active-mode="fill">实底复选框</pi-checkbox>
        <pi-checkbox v-model="defaultCustomColor" active-color="#0092fe">
          自定义颜色线框
        </pi-checkbox>
        <pi-checkbox v-model="fillCustomColor" active-color="#07c160" active-mode="fill">
          自定义颜色填充
        </pi-checkbox>
        <pi-checkbox
          v-model="fillRoundCustomColor"
          active-color="#07c160"
          active-mode="fill"
          shape="round"
        >
          自定义颜色填充圆形
        </pi-checkbox>
        <pi-checkbox
          v-model="disabled"
          active-color="#07c160"
          active-mode="fill"
          shape="round"
          disabled
        >
          禁用
        </pi-checkbox>
        <pi-checkbox
          v-model="trueDisabled"
          active-color="#07c160"
          active-mode="fill"
          shape="round"
          disabled
        >
          禁用
        </pi-checkbox>
      </pi-checkbox-group>
      <pi-button size="small" type="primary" @click="handleSelectAll">全选</pi-button>
      <pi-button size="small" type="secondary" @click="handleUnSelectAll">全清</pi-button>
      <pi-section>checkboxGroup 最多选择2个</pi-section>
      <pi-checkbox-group ref="checkboxGroup" v-model="checkboxGroupMax" max="2">
        <pi-checkbox name="a">复选框 a</pi-checkbox>
        <pi-checkbox name="b">复选框 b</pi-checkbox>
        <pi-checkbox name="c">复选框 c</pi-checkbox>
      </pi-checkbox-group>
      <pi-section>checkboxGroup 圆点模式</pi-section>
      <pi-checkbox-group v-model="checkboxGroupMax" shape="dot">
        <pi-checkbox name="a">复选框 a</pi-checkbox>
        <pi-checkbox name="b">复选框 b</pi-checkbox>
        <pi-checkbox name="c">复选框 c</pi-checkbox>
      </pi-checkbox-group>
      <pi-section>checkboxGroup 圆点填充模式</pi-section>
      <pi-checkbox-group v-model="checkboxGroupMax" shape="dot" active-mode="fill">
        <pi-checkbox name="a">复选框 a</pi-checkbox>
        <pi-checkbox name="b">复选框 b</pi-checkbox>
        <pi-checkbox name="c">复选框 c</pi-checkbox>
      </pi-checkbox-group>
      <pi-section>checkboxGroup 文字模式</pi-section>
      <pi-checkbox-group v-model="checkboxGroupMax" shape="text">
        <pi-checkbox name="a">复选框 a</pi-checkbox>
        <pi-checkbox name="b">复选框 b</pi-checkbox>
        <pi-checkbox name="c">复选框 c</pi-checkbox>
      </pi-checkbox-group>
      <pi-section>checkboxGroup 文字填充模式</pi-section>
      <pi-checkbox-group v-model="checkboxGroupMax" shape="text" active-mode="fill">
        <pi-checkbox name="a">复选框 a</pi-checkbox>
        <pi-checkbox name="b">复选框 b</pi-checkbox>
        <pi-checkbox name="c">复选框 c</pi-checkbox>
      </pi-checkbox-group>
      <pi-section>checkboxGroup 纵向排列</pi-section>
      <pi-checkbox-group ref="checkboxGroup" v-model="checkboxGroupVertical" direction="vertical">
        <pi-checkbox :name="1" active-color="red">红色，代表热情</pi-checkbox>
        <pi-checkbox :name="2" active-color="blue">蓝色，代表冷静</pi-checkbox>
        <pi-checkbox :name="3" active-color="green">绿色，代表生活</pi-checkbox>
      </pi-checkbox-group>
      <pi-section>
        是否禁用
        <pi-switch slot="right" v-model="demo5.disabled" size="40" active-color="#ff508a" />
      </pi-section>
      <pi-checkbox-group
        ref="checkboxGroup"
        v-model="demo5.checkboxGroup"
        direction="vertical"
        :disabled="demo5.disabled"
      >
        <pi-checkbox :name="1" active-color="red">红色，代表热情</pi-checkbox>
        <pi-checkbox :name="2" active-color="blue">蓝色，代表冷静</pi-checkbox>
        <pi-checkbox :name="3" active-color="green">绿色，代表生活</pi-checkbox>
      </pi-checkbox-group>
      <pi-section>checkboxGroup 设置填充模式</pi-section>
      <pi-checkbox-group
        ref="checkboxGroup"
        v-model="demo2.checkboxGroup"
        direction="vertical"
        shape="round"
        active-mode="fill"
      >
        <pi-checkbox :name="1" disabled active-color="red">红色，代表热情</pi-checkbox>
        <pi-checkbox :name="2" active-color="blue">蓝色，代表冷静</pi-checkbox>
        <pi-checkbox :name="3" active-color="green">绿色，代表生活</pi-checkbox>
      </pi-checkbox-group>
      <pi-section>checkboxGroup 设置颜色</pi-section>
      <pi-checkbox-group
        ref="checkboxGroup"
        v-model="demo3.checkboxGroup"
        direction="vertical"
        active-color="#ff508a"
      >
        <pi-checkbox :name="1" active-mode="fill">红色，代表热情</pi-checkbox>
        <pi-checkbox :name="2">蓝色，代表冷静</pi-checkbox>
        <pi-checkbox :name="3" disabled>绿色，代表生活</pi-checkbox>
      </pi-checkbox-group>
      <pi-section>checkboxGroup 设置size: 60</pi-section>
      <pi-checkbox-group ref="checkboxGroup" v-model="demo4.checkboxGroup" size="60" icon-size="40">
        <pi-checkbox :name="1" active-mode="fill" active-color="red">红色，代表热情</pi-checkbox>
        <pi-checkbox :name="2" active-color="blue">蓝色，代表冷静</pi-checkbox>
        <pi-checkbox :name="3" disabled active-color="green">绿色，代表生活</pi-checkbox>
      </pi-checkbox-group>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Checkbox',
  data() {
    return {
      defaultCheckbox: false,
      fillCheckbox: true,
      defaultCustomColor: false,
      fillCustomColor: false,
      fillRoundCustomColor: false,
      disabled: false,
      trueDisabled: true,
      checkboxGroupMax: ['a'],
      checkboxGroupVertical: [1, 2],
      demo1: true,
      demo2: true,
      demo3: {
        checkboxGroup: [1, 3]
      },
      demo4: {
        checkboxGroup: [1]
      },
      demo5: {
        checkboxGroup: [1],
        disabled: true
      }
    }
  },
  methods: {
    handleSelectAll() {
      this.$refs.checkboxGroup1.toggleSelect(true)
    },
    handleUnSelectAll() {
      this.$refs.checkboxGroup1.toggleSelect(false)
    }
  }
}
</script>
