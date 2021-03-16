<template>
  <view class="pi-scroll-container">
    <pi-navbar title="switch" />
    <scroll-view class="pi-scroll" scroll-y="">
      <view class="pi-content pi-flex-column">
        <view class="pi-flex-column">
          <pi-section title="1." desc="最简模式" />
          <view class="code">
            &lt;pi-switch /&gt;
          </view>
          <pi-switch />
        </view>
        <view class="pi-flex-column">
          <pi-section title="2." desc="type属性" />
          <view class="code">
            &lt;pi-switch type="line" /&gt;
            <br />
            &lt;pi-switch type="fill" /&gt;
          </view>
          <view class="pi-align-center">
            <text class="pi-mg-right-18">type = 'line'</text>
            <pi-switch type="line" />
          </view>
          <view class="pi-align-center pi-mg-top-16">
            <text class="pi-mg-right-18">type = 'fill'</text>
            <pi-switch type="fill" />
          </view>
        </view>
        <view class="pi-flex-column">
          <pi-section title="3." desc="设置颜色:" />
          <view class="code">
            &lt;pi-switch class="pi-mg-top-16" active-color="#ff508a" inactive-color="#888888" /&gt;
          </view>
          <pi-switch class="pi-mg-top-16" active-color="#ff508a" inactive-color="#888888" />
        </view>
        <view class="pi-flex-column">
          <pi-section title="4." desc="设置值" />
          <view class="code">
            &lt;pi-switch v-model="demo4Val" class="pi-mg-top-16" active-value="boy"
            inactive-value="girle" /&gt;
          </view>
          <view class="pi-align-center">
            <pi-switch
              v-model="demo4Val"
              class="pi-mg-top-16 pi-mg-right-8"
              active-value="boy"
              inactive-value="girle"
            />
            {{ demo4Val }}
          </view>
        </view>
        <view class="pi-flex-column">
          <pi-section title="5." desc="loading" />
          <view class="code">
            &lt;pi-switch :loading="isLoading" loading-type="spinner" /&gt;
            <br />
            &lt;pi-switch :loading="isLoading" loading-type="round" /&gt;
          </view>
          <view class="pi-align-center">
            <text class="pi-mg-right-18">loadingType = 'spinner'</text>
            <pi-switch :loading="isLoading" loading-type="spinner" />
          </view>
          <view class="pi-align-center pi-mg-top-16">
            <text class="pi-mg-right-18">loadingType = 'round'</text>
            <pi-switch :loading="isLoading" loading-type="round" />
          </view>
        </view>
        <view class="pi-flex-column">
          <pi-section title="6." desc="设置size" />
          <view class="code">
            &lt;pi-switch :size="40" /&gt;
            <br />
            &lt;pi-switch size="40px" /&gt;
          </view>
          <view class="pi-align-center">
            <text class="pi-mg-right-18">数值格式：size = 40</text>
            <pi-switch :size="40" />
          </view>
          <view class="pi-align-center pi-mg-top-16">
            <text class="pi-mg-right-18">字符串格式：size = '40px'</text>
            <pi-switch size="40px" />
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      demo4Val: 'boy',
      isLoading: true
    }
  }
}
</script>
<style lang="scss" scoped>
.code {
  padding: 16px;
  margin: 8px 0;
  font-size: 14px;
  color: #888888;
  background: #f8f8f8;
  border-radius: 8px;
}
</style>
