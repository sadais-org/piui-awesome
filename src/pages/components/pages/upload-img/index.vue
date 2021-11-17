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
        <pi-section slot="title" desc="[{url: 'img.png'}]">对象数组格式</pi-section>
        <template slot="body">
          <pi-upload-img
            v-model="objectValue"
            img-field="url"
            size="120"
            max-count="3"
            action="https://api-canteen.sadaiscloud.com/api/canteen/file/uploadfile"
            :headers="headers"
            :parse-result-fn="parseResultFn"
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
        <pi-section slot="title" desc="max-count: 1">上传头像【剪裁】</pi-section>
        <template slot="body">
          <pi-upload-img
            v-model="avatar"
            size="120"
            max-count="1"
            crop
            action="https://api-canteen.sadaiscloud.com/api/canteen/file/uploadfile"
            :headers="headers"
            :item-style="{
              borderRadius: '50%'
            }"
            :upload-btn-style="{
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
          'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI4OWU0ZWI3Zi00ZjFkLTQ3NGItODgwZi1kYmZiMjg0OGE4ZjIiLCJzdWIiOiJ7XCJhdXRob3JpdHlcIjpudWxsLFwidXNlckluZm9cIjpcIjIzN2EzODNkMmU3NjI4MmM2YTYzNzEzYjJlNGQyMDEwMDc2ZDExMDg2NDIxMmEyYjI0MzIxYjIwMzAxYjZlNmIwYzNkMjkyZjJkMmI1NTQyNmIzMDZlMzUzMjZjNTYzYzNiMjI2YTc1NzYzZTdmMjc3MzNlMWY3MjNhMjY3MzMzMzgyOTNjMzQ2ZTY5N2E3NDdiMzczZDNiNjc2MDJmNzM3YjM3NzMyOTIwNjE3MDZjNmE2MjY1N2MyYzY1NmQ3YjJmMzgyYjJhM2I2NTY5MmU2NjZhNjMyZjM0Nzg3ZDJjN2YzODFkMmM3YTcwMWM2ZDc3NmE2ZDAxNDEzMDZhNjUzZTI1Nzk2ZDZlMjY3YTM4N2EwMzRiNzg2OTJiMmQyOTNiM2Y1ODM5MmY3NzJmNjkyMzI3N2I3YTNjMjc3NDdmMzkzNjZhMjY2NTBjMzYzYjMwMmEyMzc4NzA3ZTZhNzY2MTc3MmY0NzdmMjY3MjI5NmY2MjVmNGYwZDM5NzExODNmMzU3Mjc5Njg1ODA4NzYyNzI5NDM3NTNmNzYyOTMzNzM3NDA2MzkzYjc5MTExZTM5MDU2YjNlMDAzYjY5MmQ3ZjQxMmEyMDEzMzQzODc4N2UyYzczNmY2ODZmNmE3ZTZmMzExNDAzMTAwYjBkNzM2NjdiN2UyMjc5NmMxMzI3N2Y3NDM3MzAzODFlMzIyODZmNzUyNzc5NzQ2NzI3MzYyYzY1NTI3NTIyMzE3YTMxNjQ2OTZkMTg2ZDdhMmI3ZDExN2YyNzJhNmIyODM1MjA3Zjc2NzY2YzZjMjAyZDdmMmYyMDJkMjUzYzMwM2I3NjMwMjczNzY5NzA3MTc2MjIzOTdiMmQ3YzYzNzIyNTJmNzg1NDcxMmIyNTM1NTE3OTNiNjQzZTM4NzE3ZDZlNmEyNzM0NzA3NjIzNzQwNzM5MzYzZTJiMmM3ZTM4NmQ2NDI5MTQ1YTBmM2E2MTJhMjAyZTM0MjkyMDY3M2U2YjYzMmMzMzM1MzU2ZDIzMDQxNjY4NjQzNDJjMjM2NTVlMmQzZTc2NzY3NDJkMmYzOTJhMmEyYzYyNmIyNDJjMmIyMjZkNjY3NzJhNzg3ZDdjN2U3MDZjNzI3NjM2NjdcIixcInVzZXJJbmZvRHRvXCI6e1wiYWNjb3VudFwiOlwib1c2X0U1TEQzaTZsZWtaeXZUdzRHeW9ucm1CVVwiLFwiYXBwSWRcIjpcIlwiLFwiY29kZUlkXCI6MCxcImlkXCI6XCJcIixcImlwXCI6XCJcIixcIm5hbWVcIjpcIlwiLFwicHJvamVjdEluZm9EdG9cIjpbXSxcInJlc291cmNlXCI6W10sXCJzdXBlckFkbWluXCI6ZmFsc2UsXCJ1YVwiOlwiXCIsXCJ1cmxzXCI6W10sXCJ1c2VySWRcIjpcIlwifX0iLCJpYXQiOjE2MjkxMDQ1OTUsImV4cCI6MTYyOTEwNjM5NX0.s35RMXkF_Pe-jwnA4Z6xQfawWjiq_n9mB5WJuJMZqxE'
      },
      uploadText: [],
      objectValue: [
        {
          url: 'https://m.sadais.com/img/file/20210816/7eda5c19-6da8-4c99-965e-7403f6ee8169.png'
        }
      ],
      baseUsed: [],
      avatar: 'https://m.sadais.com/img/file/20210816/7eda5c19-6da8-4c99-965e-7403f6ee8169.png',
      uploadIcon: [],
      uploadBtnSlot: []
    }
  },
  methods: {
    parseResultFn(result) {
      return JSON.parse(result.data)?.data
    }
  }
}
</script>
