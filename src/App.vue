<script>
import { create } from '@/piui/mixin/page-transitions'
export default {
  // H5环境全局mixin引入转场动画
  // #ifdef H5
  mixins: [
    create({
      'pages/base-style/index': 1,
      'pages/components/index': 2,
      'pages/tools/index': 3
    })
  ],
  // #endif
  onLaunch: function() {},
  onShow: function() {},
  onHide: function() {}
}
</script>

<style lang="scss">
/* 每个页面公共css */

@import '~@/piui/scss/index.scss';
</style>
