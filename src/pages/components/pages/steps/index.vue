<template>
  <view class="pi-scroll-container">
    <pi-navbar title="steps 步骤条" />
    <scroll-view class="pi-scroll" scroll-y>
      <!-- 圆点 -->
      <pi-card padding="24">
        <pi-section slot="title" padding="0" title="基础用法" />
        <template slot="body">
          <pi-steps
            :list="list"
            direction="row"
            :current="current"
            mode="dot"
            icon="check"
            size="24"
          />
        </template>
      </pi-card>

      <!-- 方向 -->
      <pi-card padding="24">
        <pi-section slot="title" padding="0" title="方向" />
        <template slot="body">
          <pi-steps
            :list="list"
            direction="column"
            :current="current"
            mode="dot"
            icon="check"
            size="24"
          />
        </template>
      </pi-card>

      <!-- 数字 -->
      <pi-card padding="24">
        <pi-section slot="title" padding="0" title="数字" />
        <template slot="body">
          <pi-steps
            :list="list"
            direction="row"
            :current="current"
            mode="number"
            icon="check"
            size="40"
          />
        </template>
      </pi-card>

      <!-- 图标 -->
      <pi-card padding="24">
        <pi-section slot="title" padding="0" title="图标" />
        <template slot="body">
          <pi-steps
            :list="list"
            direction="row"
            :current="current"
            mode="icon"
            icon="check"
            size="40"
          />
        </template>
      </pi-card>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Select',
  data() {
    return {
      current: 1
    }
  },
  computed: {
    list() {
      return [
        {
          name: '编辑',
          icon: 'bianji1',
          desc: '',
          url: 'http://platform.xd0760.com/static/img/home_ic_shuju.fb5fb274.png'
        },
        {
          name: '审核',
          icon: 'timefill',
          desc: '',
          url: 'http://platform.xd0760.com/static/img/home_ic_shuju.fb5fb274.png'
        },
        {
          name: '结果',
          icon: 'roundcheckfill',
          desc: '',
          url: 'http://platform.xd0760.com/static/img/home_ic_shuju.fb5fb274.png'
        },
        {
          name: '留言',
          icon: 'liuyanfill',
          desc: '描述文字',
          url: 'http://platform.xd0760.com/static/img/home_ic_shuju.fb5fb274.png'
        }
      ]
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped></style>
