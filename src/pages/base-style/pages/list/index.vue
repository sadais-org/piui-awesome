<template>
  <view class="pi-scroll-container">
    <pi-navbar title="list" />
    <scroll-view class="pi-scroll" scroll-y>
      <pi-list title="列表面板">
        <pi-list-item title="标题标题" />
        <pi-list-item title="标题标题" desc="我很帅" />
        <pi-list-item title="舔狗" desc="我很可爱" extra-text="舔狗子可爱" />
      </pi-list>

      <pi-list title="语言切换">
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
      <pi-list title="我的菜单">
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
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Grid'
}
</script>

<style lang="scss" scoped></style>
