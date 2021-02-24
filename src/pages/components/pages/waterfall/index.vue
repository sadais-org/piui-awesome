<template>
  <view class="pi-scroll-container">
    <pi-navbar title="Waterfall瀑布流" />
    <scroll-view class="pi-scroll pi-bg-fifth" scroll-y="">
      <pi-waterfall v-model="list">
        <template v-slot:left="{ items }">
          <view v-for="(item, index) in items" :key="index" class="waterfall-demo">
            <pi-img :src="item.image" border-radius="12" lazy-load />
            <view class="waterfall-title">{{ item.title }}</view>
            <view class="waterfall-price">{{ item.price }}元</view>
            <view class="waterfall-tag">
              <view class="waterfall-tag-owner">自营</view>
              <view class="waterfall-tag-text">放心购</view>
            </view>
            <view class="waterfall-shop">{{ item.shop }}</view>
            <view class="u-close">
              <pi-icon
                name="close-circle-fill"
                color="#fa3534"
                size="34"
                @click="remove(item.id)"
              />
            </view>
          </view>
        </template>
        <template v-slot:right="{ items }">
          <view v-for="(item, index) in items" :key="index" class="waterfall-demo">
            <pi-img :src="item.image" border-radius="12" lazy-load />
            <view class="waterfall-title">{{ item.title }}</view>
            <view class="waterfall-price">{{ item.price }}元</view>
            <view class="waterfall-tag">
              <view class="waterfall-tag-owner">自营</view>
              <view class="waterfall-tag-text">放心购</view>
            </view>
            <view class="waterfall-shop">{{ item.shop }}</view>
            <view class="u-close">
              <pi-icon
                name="close-circle-fill"
                color="#fa3534"
                size="34"
                @click="remove(item.id)"
              />
            </view>
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
          price: 35,
          title: '北国风光，千里冰封，万里雪飘',
          shop: '李白杜甫白居易旗舰店',
          image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23327_s.jpg'
        },
        {
          price: 75,
          title: '望长城内外，惟余莽莽',
          shop: '李白杜甫白居易旗舰店',
          image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23325_s.jpg'
        },
        {
          price: 385,
          title: '大河上下，顿失滔滔',
          shop: '李白杜甫白居易旗舰店',
          image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg'
        },
        {
          price: 784,
          title: '欲与天公试比高',
          shop: '李白杜甫白居易旗舰店',
          image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/zzpic23369_s.jpg'
        },
        {
          price: 7891,
          title: '须晴日，看红装素裹，分外妖娆',
          shop: '李白杜甫白居易旗舰店',
          image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2130_s.jpg'
        },
        {
          price: 2341,
          shop: '李白杜甫白居易旗舰店',
          title: '江山如此多娇，引无数英雄竞折腰',
          image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23346_s.jpg'
        },
        {
          price: 661,
          shop: '李白杜甫白居易旗舰店',
          title: '惜秦皇汉武，略输文采',
          image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23344_s.jpg'
        },
        {
          price: 1654,
          title: '唐宗宋祖，稍逊风骚',
          shop: '李白杜甫白居易旗舰店',
          image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg'
        },
        {
          price: 1678,
          title: '一代天骄，成吉思汗',
          shop: '李白杜甫白居易旗舰店',
          image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg'
        },
        {
          price: 924,
          title: '只识弯弓射大雕',
          shop: '李白杜甫白居易旗舰店',
          image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg'
        },
        {
          price: 8243,
          title: '俱往矣，数风流人物，还看今朝',
          shop: '李白杜甫白居易旗舰店',
          image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg'
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

.u-close {
  position: absolute;
  top: 32rpx;
  right: 32rpx;
}

.waterfall-title {
  margin-top: 5px;
  font-size: 30rpx;
  color: $pi-primary-color;
  word-break: break-all;
}

.waterfall-tag {
  display: flex;
  margin-top: 5px;
}

.waterfall-tag-owner {
  display: flex;
  align-items: center;
  padding: 4rpx 14rpx;
  font-size: 20rpx;
  line-height: 1;
  color: #ffffff;
  border-radius: 50rpx;
}

.waterfall-tag-text {
  display: flex;
  align-items: center;
  padding: 4rpx 14rpx;
  margin-left: 10px;
  font-size: 20rpx;
  line-height: 1;
  color: $pi-primary-color;
  border: 1px solid $pi-primary-color;
  border-radius: 50rpx;
}

.waterfall-price {
  margin-top: 5px;
  font-size: 30rpx;
}

.waterfall-shop {
  margin-top: 5px;
  font-size: 22rpx;
}
</style>
