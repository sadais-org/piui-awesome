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
          image: 'https://ss0.baidu.com/6ON1bjeh1BF3odCf/it/u=2179137308,2019256466&fm=15&gp=0.jpg'
        },
        {
          image: 'https://ss1.baidu.com/6ON1bjeh1BF3odCf/it/u=1168071520,250452460&fm=15&gp=0.jpg'
        },
        {
          image: 'https://ss0.baidu.com/6ON1bjeh1BF3odCf/it/u=3247164330,1346995149&fm=15&gp=0.jpg'
        },
        {
          image: 'https://ss2.baidu.com/6ON1bjeh1BF3odCf/it/u=2745595116,3524115992&fm=15&gp=0.jpg'
        },
        {
          image: 'https://ss1.baidu.com/6ON1bjeh1BF3odCf/it/u=1851068170,3950465510&fm=15&gp=0.jpg'
        },
        {
          image: 'https://ss0.baidu.com/6ON1bjeh1BF3odCf/it/u=1148873144,1964380870&fm=15&gp=0.jpg'
        },
        {
          image: 'https://ss1.baidu.com/6ON1bjeh1BF3odCf/it/u=4049406652,157403643&fm=15&gp=0.jpg'
        },
        {
          image: 'https://ss0.baidu.com/6ON1bjeh1BF3odCf/it/u=2179137308,2019256466&fm=15&gp=0.jpg'
        },
        {
          image: 'https://ss2.baidu.com/6ON1bjeh1BF3odCf/it/u=277054237,247093241&fm=15&gp=0.jpg'
        },
        {
          image: 'https://ss0.baidu.com/6ON1bjeh1BF3odCf/it/u=1294747524,1255706073&fm=15&gp=0.jpg'
        },
        {
          image: 'https://ss1.baidu.com/6ON1bjeh1BF3odCf/it/u=3705389317,2516632583&fm=15&gp=0.jpg'
        },
        {
          image: 'https://ss1.baidu.com/6ON1bjeh1BF3odCf/it/u=3688374083,63672476&fm=15&gp=0.jpg'
        },
        {
          image: 'https://ss0.baidu.com/6ON1bjeh1BF3odCf/it/u=3247164330,1346995149&fm=15&gp=0.jpg'
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
