<template>
  <view class="pi-scroll-container">
    <pi-navbar title="列表" />
    <scroll-view class="pi-scroll" scroll-y>
      <pi-list title="基础列表">
        <pi-list-item v-for="item in 3" :key="item">{{ item }}</pi-list-item>
      </pi-list>
      <pi-list title="右侧文字">
        <pi-list-item v-for="item in 3" :key="item" :extra-text="`第${item}行`">
          {{ item }}
        </pi-list-item>
      </pi-list>
      <pi-list title="禁用行">
        <pi-list-item v-for="item in 3" :key="item" disabled>
          {{ item }}
        </pi-list-item>
      </pi-list>
      <pi-list title="隐藏右侧图标">
        <pi-list-item v-for="item in 3" :key="item" :show-right-icon="false">
          {{ item }}
        </pi-list-item>
      </pi-list>
      <pi-list title="列表面板">
        <pi-list-item title="标题1" />
        <pi-list-item title="标题2" desc="描述文本1" />
        <pi-list-item title="标题3" desc="描述文本2" extra-text="额外文本" />
      </pi-list>

      <pi-list title="右侧插入组件或图标">
        <pi-list-item title="中文">
          <pi-checkbox slot="right" active-mode="fill" shape="round" :value="true" />
        </pi-list-item>
        <pi-list-item title="英文">
          <pi-checkbox slot="right" active-mode="fill" shape="round" />
        </pi-list-item>
      </pi-list>
      <pi-list title="左侧带图标">
        <pi-list-item title="标题标题" desc="描述">
          <pi-icon slot="left" name="commentfill" size="50" custom-class="pi-primary" />
        </pi-list-item>
        <pi-list-item title="是否开启版本更新提示" desc="更快更轻">
          <pi-icon slot="left" name="activity-fill" size="50" custom-class="pi-primary" dot />
          <pi-switch slot="right" size="40" active-color="#ff508a" />
        </pi-list-item>
        <pi-list-item title="点击更新" desc="更快更轻">
          <pi-icon slot="left" name="tasklist-fill" size="50" custom-class="pi-primary" dot />
          <pi-button slot="right" type="primary" size="tiny">更新</pi-button>
        </pi-list-item>
      </pi-list>
      <pi-list title="示例--我的菜单">
        <pi-list-item title="订单记录">
          <pi-icon slot="left" name="order1" size="50" custom-class="pi-primary" />
        </pi-list-item>
        <pi-list-item title="我的">
          <pi-icon slot="left" name="mine" size="50" custom-class="pi-primary" />
        </pi-list-item>
        <pi-list-item title="个人信息">
          <pi-icon slot="left" name="form" size="50" custom-class="pi-primary" />
        </pi-list-item>
        <pi-list-item title="系统设置">
          <pi-icon slot="left" name="setup-fill" size="50" custom-class="pi-primary" />
        </pi-list-item>
      </pi-list>
      <pi-list-item title="系统设置">
        <pi-icon slot="left" name="setup-fill" size="50" custom-class="pi-primary" />
      </pi-list-item>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'List'
}
</script>

<style lang="scss" scoped></style>
