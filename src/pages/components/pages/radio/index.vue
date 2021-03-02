<template>
  <view class="pi-scroll-container">
    <pi-navbar title="radio" />
    <scroll-view class="pi-scroll" scroll-y="">
      <view class="pi-content pi-flex-column">
        <view class="pi-flex-column">
          <pi-section title="1." desc="结合pi-radio-group使用" />
          <view class="code">
            &lt;pi-radio-group
            <br />
            v-model="demo1"
            <br />
            active-mode="fill"
            <br />
            active-color="#ff0000"
            <br />
            direction="vertical" &gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;pi-radio name="boy"&gt;男&lt;/pi-radio&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;pi-radio name="boy"&gt;男&lt;/pi-radio&gt;
            <br />
            &lt;/pi-radio-group&gt;
          </view>

          <pi-radio-group
            v-model="demo1"
            active-mode="fill"
            active-color="#ff0000"
            direction="vertical"
          >
            <pi-radio name="boy">男</pi-radio>
            <pi-radio name="girl">女</pi-radio>
          </pi-radio-group>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Radio',
  data() {
    return {
      demo1: 'girl'
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
