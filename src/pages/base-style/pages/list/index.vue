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
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Grid'
}
</script>

<style lang="scss" scoped></style>
