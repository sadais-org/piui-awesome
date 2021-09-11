<script>
// #ifdef H5
import { create } from '@/piui/mixin/page-transitions'
// #endif

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
  methods: {},
  onLaunch: function() {
    // #ifdef MP
    this.$pi.common.mpUpdate()
    // #endif
  },
  onShow: function() {},
  onHide: function() {}
}
</script>

<style lang="scss">
/* 每个页面公共css */

@import '~@/piui/scss/index.scss';
.pi-content {
  background: transparent;
}
</style>
