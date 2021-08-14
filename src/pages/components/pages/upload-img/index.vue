<template>
  <view class="pi-scroll-container">
    <pi-navbar title="图片上传" />
    <scroll-view class="pi-scroll" scroll-y>
      <pi-card>
        <pi-section slot="title" desc="max-count: 9">基础用法</pi-section>
        <template slot="body">
          <pi-upload-img
            v-model="baseUsed"
            size="120"
            max-count="3"
            action="https://api-canteen.sadaiscloud.com/api/canteen/file/uploadfile"
            :headers="headers"
          />
        </template>
      </pi-card>
      <pi-card>
        <pi-section slot="title" desc="uploadText">显示上传文字</pi-section>
        <template slot="body">
          <pi-upload-img
            v-model="uploadText"
            size="120"
            max-count="3"
            upload-text="图片上传"
            action="https://api-canteen.sadaiscloud.com/api/canteen/file/uploadfile"
            :headers="headers"
          />
        </template>
      </pi-card>
      <pi-card>
        <pi-section slot="title" desc="max-count: 1">上传头像</pi-section>
        <template slot="body">
          <pi-upload-img
            v-model="avatar"
            size="120"
            max-count="1"
            action="https://api-canteen.sadaiscloud.com/api/canteen/file/uploadfile"
            :headers="headers"
            :item-style="{
              padding: 0,
              borderRadius: '50%'
            }"
            :upload-btn-style="{
              padding: 0,
              borderRadius: '50%'
            }"
          />
        </template>
      </pi-card>
      <pi-card>
        <pi-section slot="title" desc="upload-icon">自定义上传按钮样式</pi-section>
        <template slot="body">
          <pi-upload-img
            v-model="uploadIcon"
            size="120"
            max-count="3"
            action="https://api-canteen.sadaiscloud.com/api/canteen/file/uploadfile"
            :headers="headers"
            :upload-icon="{
              name: 'camerafill',
              size: '42'
            }"
          />
        </template>
      </pi-card>
      <pi-card>
        <pi-section slot="title" desc="slot=uploadBtn">自定义上传按钮背景</pi-section>
        <template slot="body">
          <pi-upload-img
            v-model="uploadBtnSlot"
            size="120"
            max-count="1"
            action="https://api-canteen.sadaiscloud.com/api/canteen/file/uploadfile"
            :headers="headers"
            :upload-btn-style="{
              padding: 0,
              padding: '24rpx',
              borderRadius: '50%'
            }"
          >
            <pi-img
              slot="uploadBtn"
              src="https://sadais-oss.oss-cn-hangzhou.aliyuncs.com/piui/%E5%95%86%E5%8A%A1%E5%A4%B4%E5%83%8F%EF%BC%8C%E7%94%B7%E5%A3%AB.png"
            />
          </pi-upload-img>
        </template>
      </pi-card>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'UploadImg',
  data() {
    return {
      headers: {
        jwttoken:
          'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI5NWU0NWQ1Yi00NjIzLTQ5OTQtOGNkNS0xY2U1YzA3ZDk5ZTAiLCJzdWIiOiJ7XCJhdXRob3JpdHlcIjpudWxsLFwidXNlckluZm9cIjpcIjZhMzM3MTc0NjczZjYxNjUyMzJhMzg3MjY3MDQ2OTU5NGUyNDU4NDEyZDY4NjM2MjZkN2I1MjY5Nzk1MjI3MjI0NTc0NjA2NjY0NjIxYzBiMjI3OTI3N2M3YjI1MWY3NTcyNmIyMzNjM2Y3NzM2NmUzYTc3NTYzYjczNmYzYTdhNzE2MDc1N2QyNzIwMzMzZDMyN2U3NDcyMmUyOTY2M2EzMjdlM2E2MDY5MjgzOTI1MjMyYjJjMzU2NTJjMjQzMjY2NzE2MjYzNzIyYzIwMmYyMzJhNjY3ZDMxMzQ2NTM2NzE1NDY1MzMzOTU1MjQzZTIzMjQ0ODA4NzkyMzJjNzc2YzMwMjQyNzZmMzM3MTMzNGEwMjMxMjA2MjY0NjA3Mjc2NjcxMTcwNjYzZTY2MjA2YTZlMzIzMzc1NmUzZDM2NzA3ZjIzNmYyYzQ1N2Y3Mjc5NjM2YTMxMzkzNzIzM2YyODNlNjYwZTM2NmYzYjYwMjYyYjE2MDY0NDcwMzg1MTc2N2MzYjMwMjExMTQxM2Y2ZTYwMGEzYzc2M2Y2MDdhM2EzZDRmNzA3MjMwNTg1NzcwNGMyMjc3NDk3MjIwNjQzNjA4NjM2OTVhN2Q3MTMxMzc2NTNhMjYyMTI2MjMzNzI2Nzg1ZDRhNTk0MjQ0M2EyZjMyMzc2YjMwMjU1YTZlMzYzZDdlNzk3MTU3N2I2MTI2M2M2ZTMwM2QyZTZlN2Y2NTJjMWIzYzZiNzgzMzc4MmQyMDI0NTEyNDMzNjIzNDU4MzY2ZTYzMjI2MTdjNjkzNjNmM2YyNTI1Njk2NDM2NjY2OTY0NmM3NTc5NzIzZjc5NmU3ZTIwMzkzODNmNmI3MDMyNjQzNTJhM2I2YzY2MzExZDM4NjI2YzdjMTgzMDcyMmQ3NzcxMzgzNDI3MjM2ZTdkMzkzZjZhM2Q0ZTcwN2Y3NzYyNjUzNzcxMjQyZDYwNWQxMzQ2NzMyODYzNjk2NzdkNjA2OTJlNzcyMjJhNjU3YTdjN2MyNDZhNGQ1ZjIxMmQ3ZDY1NmEyYzE3NjQ3NzNmM2YzZDY0NjY3MDYzNjM2NTJiMjI2ZDY1NjI2YjI0MmYzZTYzMzEzNDM1MzczOTI1M2IzZjdmOTFcIixcInVzZXJJbmZvRHRvXCI6e1wiYWNjb3VudFwiOlwib1c2X0U1TEQzaTZsZWtaeXZUdzRHeW9ucm1CVVwiLFwiYXBwSWRcIjpcIlwiLFwiY29kZUlkXCI6MCxcImlkXCI6XCJcIixcImlwXCI6XCJcIixcIm5hbWVcIjpcIlwiLFwicHJvamVjdEluZm9EdG9cIjpbXSxcInJlc291cmNlXCI6W10sXCJzdXBlckFkbWluXCI6ZmFsc2UsXCJ1YVwiOlwiXCIsXCJ1cmxzXCI6W10sXCJ1c2VySWRcIjpcIlwifX0iLCJpYXQiOjE2Mjg5MjM1MTYsImV4cCI6MTYyODkyNTMxNn0.sGimpMMZ7z_TQ4zXBEy6zQsWiu-eraAM0UuxI_vssb0'
      },
      uploadText: [],
      baseUsed: [],
      avatar: [],
      uploadIcon: [],
      uploadBtnSlot: []
    }
  },
  methods: {
    handleParseResultUrl(result) {
      console.log(result)
    }
  }
}
</script>
