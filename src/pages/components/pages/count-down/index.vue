<template>
  <view class="pi-scroll-container">
    <pi-navbar title="倒计时" />
    <scroll-view class="pi-scroll" scroll-y="">
      <pi-card padding="0">
        <pi-section slot="title" padding="24">
          基础用法
        </pi-section>
        <template slot="body">
          <view class="pi-pd-24">
            <pi-count-down value="314159" />
          </view>
        </template>
      </pi-card>

      <pi-card padding="0">
        <pi-section slot="title" padding="24">
          停止倒计时
        </pi-section>
        <template slot="body">
          <view class="pi-pd-24">
            <pi-count-down value="314159" :autoplay="false" />
          </view>
        </template>
      </pi-card>

      <pi-card padding="0">
        <pi-section slot="title" padding="24">
          不同精度
        </pi-section>
        <template slot="body">
          <view class="pi-pd-24">
            <view>
              不显示天：
              <pi-count-down value="314159" :show-day="false" />
            </view>
            <view class="pi-mg-tb-24">
              不显示小时：
              <pi-count-down value="314159" :show-day="false" :show-hour="false" />
            </view>
            <view>
              不显示分钟：
              <pi-count-down
                value="314159"
                :show-day="false"
                :show-hour="false"
                :show-minute="false"
              />
            </view>
          </view>
        </template>
      </pi-card>

      <pi-card padding="0">
        <pi-section slot="title" padding="24">
          分隔符
        </pi-section>
        <template slot="body">
          <view class="pi-pd-24">
            <view>
              分隔符(colon-冒号)：
              <pi-count-down value="314159" separator="colon" />
            </view>
            <view class="pi-mg-tb-24">
              分隔符(zh-中文)：
              <pi-count-down value="314159" separator="zh" />
            </view>
          </view>
        </template>
      </pi-card>

      <pi-card padding="0">
        <pi-section slot="title" padding="24">
          自定义样式
        </pi-section>
        <template slot="body">
          <view class="pi-pd-24">
            <view>
              时间项：
              <pi-count-down
                value="314159"
                :time-style="{
                  color: '#CA332C',
                  background: '#FFE7E8',
                  border: '1px solid #CA332C'
                }"
                :separator-style="{
                  color: '#CA332C'
                }"
              />
            </view>
            <view class="pi-mg-tb-24">
              分隔符：
              <pi-count-down
                value="314159"
                separator="zh"
                :separator-style="{
                  color: '#CA332C'
                }"
              />
            </view>
          </view>
        </template>
      </pi-card>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'CountDown'
}
</script>
