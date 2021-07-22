<template>
  <view class="pi-scroll-container">
    <pi-navbar title="图片" />
    <scroll-view class="pi-scroll" scroll-y>
      <pi-card>
        <pi-section slot="title">基础用法</pi-section>
        <template slot="body">
          <view class="pi-justify-around">
            <view>
              <view class="pi-justify-center pi-mg-bottom-10">正常加载</view>
              <pi-img
                width="220"
                height="120"
                :custom-style="{ background: '#cccccc' }"
                :src="imgsrc"
              />
            </view>
            <view>
              <view class="pi-justify-center pi-mg-bottom-10">加载失败</view>
              <pi-img
                width="220"
                height="120"
                :custom-style="{ background: '#cccccc' }"
                :src="imgsrc + 1"
              />
            </view>
            <view>
              <view class="pi-justify-center pi-mg-bottom-10">自定占位内容</view>
              <pi-img
                width="220"
                height="120"
                :custom-style="{ background: '#cccccc' }"
                :src="imgsrc + 1"
              >
                <view slot="error">
                  自定义占位内容
                </view>
              </pi-img>
            </view>
          </view>
        </template>
      </pi-card>

      <pi-card>
        <pi-section slot="title">懒加载</pi-section>
        <template slot="body">
          <view class="pi-align-center pi-justify-around">
            <view>
              <view class="pi-text-center">spinner-菊花'</view>
              <pi-img
                width="220"
                height="200"
                mode="widthFix"
                :custom-style="{ background: '#cccccc' }"
                :src="imgsrc"
              />
            </view>
            <view>
              <view class="pi-text-center">round-圆环</view>
              <pi-img
                width="220"
                height="200"
                mode="widthFix"
                loading-type="round"
                :custom-style="{ background: '#cccccc' }"
                :src="imgsrc"
              />
            </view>
          </view>
        </template>
      </pi-card>

      <pi-card>
        <pi-section slot="title">裁剪/缩放</pi-section>
        <template slot="body">
          <view class="pi-align-center pi-flex-column">
            <view class="pi-mg-bottom-10">widthFix-高度自适应</view>
            <pi-img
              width="220"
              mode="widthFix"
              :custom-style="{ background: '#cccccc' }"
              :src="imgsrc"
            />
          </view>
          <view class="pi-flex-column-center pi-mg-top-20">
            <view class="pi-mg-bottom-10">scaleToFill-不保持比例缩放</view>
            <pi-img
              width="220"
              height="320"
              mode="scaleToFill"
              :custom-style="{ background: '#cccccc' }"
              :src="imgsrc"
            />
          </view>
          <view class="pi-flex-column-center pi-mg-top-20">
            <view class="pi-mg-bottom-10">aspectFit-保持比例显示长边</view>
            <pi-img
              width="220"
              height="220"
              mode="aspectFit"
              :custom-style="{ background: '#cccccc' }"
              :src="imgsrc"
            />
          </view>
          <view class="pi-flex-column-center pi-mg-top-20">
            <view class="pi-mg-bottom-10">aspectFill-保持比例显示短边</view>
            <pi-img
              width="220"
              height="220"
              mode="aspectFill"
              :custom-style="{ background: '#cccccc' }"
              :src="imgsrc"
            />
          </view>
        </template>
      </pi-card>

      <pi-card>
        <pi-section slot="title">图片形状</pi-section>
        <template slot="body">
          <view class="pi-align-center pi-justify-around">
            <view>
              <view class="pi-text-center">square-方形</view>
              <pi-img
                width="220"
                height="220"
                mode="widthFix"
                shape="square"
                :custom-style="{ background: '#cccccc' }"
                :src="imgsrc"
              />
            </view>
            <view>
              <view class="pi-text-center">round-圆形</view>
              <pi-img
                width="220"
                height="220"
                mode="scaleToFill"
                loading-type="round"
                shape="round"
                :custom-style="{ background: '#cccccc' }"
                :src="imgsrc"
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
  name: 'Img',
  data() {
    return {
      imgsrc: require('./x.jpg')
    }
  }
}
</script>
