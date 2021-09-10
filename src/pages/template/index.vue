<!--
 * @Author: zhangzhenfei
 * @Date: 2021-09-10 10:08:14
 * @LastEditTime: 2021-09-10 11:04:30
 * @LastEditors: zhangzhenfei
 * @Description: 模板平台
 * @FilePath: /piui-awesome/src/pages/template/index.vue
-->

<template>
  <view class="pi-scroll-container">
    <pi-navbar :border-bottom="false">模板</pi-navbar>
    <scroll-view class="pi-scroll" scroll-y>
      <pi-card v-for="temp in templates" :key="temp.name">
        <pi-section slot="title" padding="0" :title="temp.title" />
        <template slot="body">
          <pi-grid square col="3" gap="24">
            <pi-grid-item
              v-for="(template, index) in temp.templates"
              :key="template.name"
              :index="index"
              bg-color="#f5f5f5"
              custom-class="pi-radius-22"
              square
            >
              <view
                class="pi-h-100P pi-flex-column-center"
                @tap.stop="handleNavigate(temp.name, template.name)"
              >
                <view class="pi-fz-22 pi-text-center pi-light-gray">{{ template.name }}</view>
                <view class="pi-fz-30 pi-text-center pi-gray pi-mg-top-12">
                  {{ template.zhName }}
                </view>
              </view>
            </pi-grid-item>
          </pi-grid>
        </template>
      </pi-card>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    templates() {
      return [
        {
          name: 'scroll',
          title: '滚动布局',
          templates: [
            {
              name: 'sub-scroll',
              zhName: '子区域滚动'
            }
          ]
        },
        {
          name: 'profile',
          title: '我的',
          templates: [
            {
              name: 'form-profile',
              zhName: '我的表单填写'
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleNavigate(groupName, name) {
      this.$pi.navi.navigateTo(`pages/template/pages/${groupName}/${name}`)
    }
  }
}
</script>
