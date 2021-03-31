<template>
  <view class="pi-scroll-container">
    <pi-navbar title="waterfall 瀑布流" />
    <scroll-view class="pi-scroll pi-bg-fifth" scroll-y="">
      <pi-waterfall v-model="list" :wait="300">
        <template v-slot:left="{ items }">
          <view v-for="(item, index) in items" :key="index" class="waterfall-demo">
            <pi-img :src="item.image" border-radius="12" lazy-load />
          </view>
        </template>
        <template v-slot:right="{ items }">
          <view v-for="(item, index) in items" :key="index" class="waterfall-demo">
            <pi-img :src="item.image" border-radius="12" lazy-load />
          </view>
        </template>
      </pi-waterfall>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'Waterfall',
  data() {
    return {
      list: [
        {
          image: 'https://www.sadais.com/_nuxt/img/89c8332.png'
        },
        {
          image: 'https://m.sadais.com/img/file/20200927/271bea8f-aece-4265-a2c7-565cf6e863be.png'
        },
        {
          image: 'https://www.sadais.com/_nuxt/img/2b9ad72.png'
        },
        {
          image: 'https://www.sadais.com/_nuxt/img/b6c5b7d.png'
        },
        {
          image: 'https://m.sadais.com/img/file/20200927/c227f889-22f4-4506-9b41-3e6a60706564.png'
        },
        {
          image: 'https://www.sadais.com/_nuxt/img/289e7b5.png'
        },
        {
          image: 'https://m.sadais.com/img/file/20200927/23c0cf6e-1d6d-4d03-b882-bbc5c5085ec8.png'
        },
        {
          image: 'https://www.sadais.com/_nuxt/img/a6a8c9a.png'
        },
        {
          image: 'https://m.sadais.com/img/file/20200927/851359b6-a630-4b5a-b693-e36c704f52b3.png'
        },
        {
          image: 'https://m.sadais.com/img/file/20200927/54bfd54f-0d00-432b-8deb-9b49653d7461.png'
        },
        {
          image: 'https://www.sadais.com/_nuxt/img/65e2d8a.png'
        },
        {
          image: 'https://www.sadais.com/_nuxt/img/5f2bd00.png'
        },
        {
          image: 'https://www.sadais.com/_nuxt/img/9c80299.png'
        },
        {
          image: 'https://m.sadais.com/img/file/20200927/896a48d8-705d-4b7f-820e-178be243a91a.png'
        },
        {
          image: 'https://m.sadais.com/img/file/20200927/89fef3e8-372e-4dfb-be97-0966397a7319.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.waterfall-demo {
  position: relative;
  padding: 16rpx;
  margin: 12rpx;
  background-color: #ffffff;
  border-radius: 8px;
}
</style>
