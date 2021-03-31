<template>
  <view class="pi-scroll-container">
    <pi-navbar title="骨架屏" />
    <scroll-view class="pi-scroll" scroll-y="">
      <view class="pi-content pi-skeleton">
        <view class="userinfo">
          <pi-img
            class="pi-skeleton-rect pi-mg-bottom-32"
            width="100%"
            mode="widthFix"
            :src="userInfo.avatarUrl"
          />
          <text class="pi-skeleton-round pi-fz-40 pi-fw-500">
            {{ userInfo.nickName }}
          </text>
        </view>
        <view class="pi-w-100 pi-h-100 pi-circle pi-skeleton-circle pi-bg-fifth" />
        <view class="pi-w-100 pi-h-50 pi-skeleton-round pi-bg-fifth" />
        <view class="pi-mg-top-32">
          <view v-for="(item, index) in lists" :key="index" class="pi-skeleton-rect lists">
            <view class=" pi-mg-bottom-12">{{ item }}</view>
          </view>
        </view>
      </view>
      <pi-skeleton :show="loading" node-background="#c0ebd7" background="rgba(0,0,0,.07)" />
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Skeleton',
  data() {
    return {
      userInfo: {
        avatarUrl: 'http://huozi.sadais.com/img/banner_bg.png',
        nickName: 'piui'
      },
      lists: [
        '自主技术融合阿里云智慧云服务。',
        '三点一四在大数据和人工智能技术上的优势，结合阿里云强大的技术基础生态，为企业提供领先的技术方案',
        '深入理解中小企业数字化难题',
        '数十个成功案例的高效实践，为企业实现客户、渠道、销售和员工的全面在线化，发掘商业新机遇'
      ],
      loading: true, // 是否显示骨架屏组件
      borderRadius: 10
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = true
    }, 5000)
  }
}
</script>
