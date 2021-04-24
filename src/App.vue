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
  watch: {
    '$route.path'(value) {
      /**  此处无法使用 window.parent && window.parent.postMessage({ action: 'back' }, '*')来过
       *  滤当页面不在iframe中的情况，因为涉及到跨域问题，iframe中的页面只能调用window.parent.postMessage
       *  其他方法都会报跨域，即使是访问window.parent也会报跨域，只能window.parent.postMessage
       */
      if (this.$route.query.noSend === '1') {
        return
      }
      window.parent.postMessage(
        {
          action: 'pathChange',
          path: value
        },
        '*'
      )
    }
  },
  beforeDestroy() {
    window.removeEventListener('message', this.customNavi)
  },
  methods: {
    customNavi(e) {
      if (!e.data.action || e.data.action !== 'changePath') {
        return
      }
      this.$pi.navi.navigateTo(e.data.path)
    }
  },
  // #endif
  onLaunch: function() {
    window.addEventListener('message', this.customNavi)
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
