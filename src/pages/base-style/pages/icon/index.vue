<template>
  <view class="pi-scroll-container">
    <pi-navbar title="图标" />
    <scroll-view class="pi-scroll" scroll-y="">
      <view class="pi-content">
        <pi-section title="基础用法" />
        <pi-icon name="message-copy" custom-class="pi-fz-48" />
        <pi-icon name="message-copy" custom-class="pi-primary pi-fz-48" dot />
        <pi-icon name="message-copy" custom-class="pi-fz-48" color="red" dot />
        <pi-icon name="message-copy" custom-class="pi-fz-48" color="red" badge="99+" />

        <pi-section title="所有图标" />
        <pi-grid square col="3">
          <pi-grid-item v-for="glyph in glyphs" :key="glyph.id">
            <view class="pi-h-100P pi-flex-column-center" @tap.stop="handleNavigate(style.name)">
              <pi-icon :name="glyph.font_class" custom-class="pi-primary pi-fz-48" dot />
              <view class="pi-fz-24 pi-mg-top-8 pi-light-gray pi-text-nowrap">
                {{ glyph.font_class }}
              </view>
            </view>
          </pi-grid-item>
        </pi-grid>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // iconfont.json文件glyphs定义
      glyphs: [
        {
          icon_id: '4183170',
          name: 'next',
          font_class: 'next',
          unicode: 'e61c',
          unicode_decimal: 58908
        },
        {
          icon_id: '6184755',
          name: 'filter_fill',
          font_class: 'filter-fill',
          unicode: 'e8c3',
          unicode_decimal: 59587
        },
        {
          icon_id: '15854981',
          name: '消息',
          font_class: 'message-copy',
          unicode: 'e8c5',
          unicode_decimal: 59589
        },
        {
          icon_id: '4503673',
          name: 'filter',
          font_class: 'filter',
          unicode: 'e6c7',
          unicode_decimal: 59079
        },
        {
          icon_id: '9489063',
          name: 'eye close-fill',
          font_class: 'eyeclose-fill',
          unicode: 'e65d',
          unicode_decimal: 58973
        },
        {
          icon_id: '4687294',
          name: 'eye',
          font_class: 'eye',
          unicode: 'e60c',
          unicode_decimal: 58892
        },
        {
          icon_id: '7008886',
          name: 'add',
          font_class: 'add',
          unicode: 'e6e4',
          unicode_decimal: 59108
        },
        {
          icon_id: '7008884',
          name: 'activity',
          font_class: 'activity',
          unicode: 'e6de',
          unicode_decimal: 59102
        },
        {
          icon_id: '7008885',
          name: 'activity_fill',
          font_class: 'activity-fill',
          unicode: 'e6df',
          unicode_decimal: 59103
        },
        {
          icon_id: '7008893',
          name: 'barrage_fill',
          font_class: 'barrage-fill',
          unicode: 'e6e6',
          unicode_decimal: 59110
        },
        {
          icon_id: '7008894',
          name: 'barrage',
          font_class: 'barrage',
          unicode: 'e6e7',
          unicode_decimal: 59111
        },
        {
          icon_id: '7008946',
          name: 'homepage_fill',
          font_class: 'homepage-fill',
          unicode: 'e702',
          unicode_decimal: 59138
        },
        {
          icon_id: '7008947',
          name: 'homepage',
          font_class: 'homepage',
          unicode: 'e703',
          unicode_decimal: 59139
        },
        {
          icon_id: '7008948',
          name: 'integral_fill',
          font_class: 'integral-fill',
          unicode: 'e704',
          unicode_decimal: 59140
        },
        {
          icon_id: '7008949',
          name: 'integral',
          font_class: 'integral',
          unicode: 'e705',
          unicode_decimal: 59141
        },
        {
          icon_id: '7008950',
          name: 'interactive_fill',
          font_class: 'interactive-fill',
          unicode: 'e706',
          unicode_decimal: 59142
        },
        {
          icon_id: '7008951',
          name: 'interactive',
          font_class: 'interactive',
          unicode: 'e707',
          unicode_decimal: 59143
        },
        {
          icon_id: '7008952',
          name: 'keyboard',
          font_class: 'keyboard',
          unicode: 'e708',
          unicode_decimal: 59144
        },
        {
          icon_id: '7008957',
          name: 'live_fill',
          font_class: 'live-fill',
          unicode: 'e709',
          unicode_decimal: 59145
        },
        {
          icon_id: '7008958',
          name: 'live',
          font_class: 'live',
          unicode: 'e70a',
          unicode_decimal: 59146
        },
        {
          icon_id: '7008959',
          name: 'lock_fill',
          font_class: 'lock-fill',
          unicode: 'e713',
          unicode_decimal: 59155
        },
        {
          icon_id: '7008960',
          name: 'lock',
          font_class: 'lock',
          unicode: 'e714',
          unicode_decimal: 59156
        },
        {
          icon_id: '7008961',
          name: 'mail',
          font_class: 'mail',
          unicode: 'e715',
          unicode_decimal: 59157
        },
        {
          icon_id: '7008962',
          name: 'mail_fill',
          font_class: 'mail-fill',
          unicode: 'e716',
          unicode_decimal: 59158
        },
        {
          icon_id: '7008973',
          name: 'offline_fill',
          font_class: 'offline-fill',
          unicode: 'e717',
          unicode_decimal: 59159
        },
        {
          icon_id: '7008974',
          name: 'offline',
          font_class: 'offline',
          unicode: 'e718',
          unicode_decimal: 59160
        },
        {
          icon_id: '7008975',
          name: 'order_fill',
          font_class: 'order-fill',
          unicode: 'e719',
          unicode_decimal: 59161
        },
        {
          icon_id: '7008976',
          name: 'order',
          font_class: 'order1',
          unicode: 'e71c',
          unicode_decimal: 59164
        },
        {
          icon_id: '7009013',
          name: 'stealth_fill',
          font_class: 'stealth-fill',
          unicode: 'e72d',
          unicode_decimal: 59181
        },
        {
          icon_id: '7009014',
          name: 'stealth',
          font_class: 'stealth',
          unicode: 'e72e',
          unicode_decimal: 59182
        },
        {
          icon_id: '7009024',
          name: 'tasklist_fill',
          font_class: 'tasklist-fill',
          unicode: 'e734',
          unicode_decimal: 59188
        },
        {
          icon_id: '7009025',
          name: 'tasklist',
          font_class: 'tasklist',
          unicode: 'e737',
          unicode_decimal: 59191
        },
        {
          icon_id: '7009006',
          name: 'setup',
          font_class: 'setup',
          unicode: 'e729',
          unicode_decimal: 59177
        },
        {
          icon_id: '2045154',
          name: 'addressbook_fill',
          font_class: 'addressbook-fill',
          unicode: 'e6e2',
          unicode_decimal: 59106
        },
        {
          icon_id: '2045155',
          name: 'addressbook',
          font_class: 'addressbook',
          unicode: 'e6e3',
          unicode_decimal: 59107
        },
        {
          icon_id: '7008887',
          name: 'addition_fill',
          font_class: 'addition-fill',
          unicode: 'e6e0',
          unicode_decimal: 59104
        },
        {
          icon_id: '7008888',
          name: 'addition',
          font_class: 'addition',
          unicode: 'e6e1',
          unicode_decimal: 59105
        },
        {
          icon_id: '7008963',
          name: 'manage_fill',
          font_class: 'manage-fill',
          unicode: 'e70b',
          unicode_decimal: 59147
        },
        {
          icon_id: '7008964',
          name: 'manage',
          font_class: 'manage',
          unicode: 'e70c',
          unicode_decimal: 59148
        },
        {
          icon_id: '7008967',
          name: 'mine',
          font_class: 'mine',
          unicode: 'e70e',
          unicode_decimal: 59150
        },
        {
          icon_id: '7008968',
          name: 'mine_fill',
          font_class: 'mine-fill',
          unicode: 'e70f',
          unicode_decimal: 59151
        },
        {
          icon_id: '7008986',
          name: 'praise_fill',
          font_class: 'praise-fill',
          unicode: 'e71a',
          unicode_decimal: 59162
        },
        {
          icon_id: '7008987',
          name: 'praise',
          font_class: 'praise',
          unicode: 'e71b',
          unicode_decimal: 59163
        },
        {
          icon_id: '7009000',
          name: 'select_fill',
          font_class: 'select-fill',
          unicode: 'e725',
          unicode_decimal: 59173
        },
        {
          icon_id: '7009001',
          name: 'select',
          font_class: 'select',
          unicode: 'e726',
          unicode_decimal: 59174
        },
        {
          icon_id: '7009005',
          name: 'setup_fill',
          font_class: 'setup-fill',
          unicode: 'e728',
          unicode_decimal: 59176
        },
        {
          icon_id: '29923',
          name: 'appreciate',
          font_class: 'appreciate',
          unicode: 'e644',
          unicode_decimal: 58948
        },
        {
          icon_id: '29924',
          name: 'check',
          font_class: 'check',
          unicode: 'e645',
          unicode_decimal: 58949
        },
        {
          icon_id: '29925',
          name: 'close',
          font_class: 'close',
          unicode: 'e646',
          unicode_decimal: 58950
        },
        {
          icon_id: '29928',
          name: 'edit',
          font_class: 'edit',
          unicode: 'e649',
          unicode_decimal: 58953
        },
        {
          icon_id: '29929',
          name: 'emoji',
          font_class: 'emoji',
          unicode: 'e64a',
          unicode_decimal: 58954
        },
        {
          icon_id: '29930',
          name: 'favor_fill',
          font_class: 'favorfill',
          unicode: 'e64b',
          unicode_decimal: 58955
        },
        {
          icon_id: '29934',
          name: 'loading',
          font_class: 'loading',
          unicode: 'e64f',
          unicode_decimal: 58959
        },
        {
          icon_id: '29935',
          name: 'location_fill',
          font_class: 'locationfill',
          unicode: 'e650',
          unicode_decimal: 58960
        },
        {
          icon_id: '29936',
          name: 'location',
          font_class: 'location',
          unicode: 'e651',
          unicode_decimal: 58961
        },
        {
          icon_id: '29937',
          name: 'phone',
          font_class: 'phone',
          unicode: 'e652',
          unicode_decimal: 58962
        },
        {
          icon_id: '29941',
          name: 'round_check_fill',
          font_class: 'roundcheckfill',
          unicode: 'e656',
          unicode_decimal: 58966
        },
        {
          icon_id: '29942',
          name: 'round_check',
          font_class: 'roundcheck',
          unicode: 'e657',
          unicode_decimal: 58967
        },
        {
          icon_id: '29943',
          name: 'round_close_fill',
          font_class: 'roundclosefill',
          unicode: 'e658',
          unicode_decimal: 58968
        },
        {
          icon_id: '29944',
          name: 'round_close',
          font_class: 'roundclose',
          unicode: 'e659',
          unicode_decimal: 58969
        },
        {
          icon_id: '29945',
          name: 'round_right_fill',
          font_class: 'roundrightfill',
          unicode: 'e65a',
          unicode_decimal: 58970
        },
        {
          icon_id: '29946',
          name: 'round_right',
          font_class: 'roundright',
          unicode: 'e65b',
          unicode_decimal: 58971
        },
        {
          icon_id: '29947',
          name: 'search',
          font_class: 'search',
          unicode: 'e65c',
          unicode_decimal: 58972
        },
        {
          icon_id: '29949',
          name: 'time_fill',
          font_class: 'timefill',
          unicode: 'e65e',
          unicode_decimal: 58974
        },
        {
          icon_id: '29950',
          name: 'time',
          font_class: 'time',
          unicode: 'e65f',
          unicode_decimal: 58975
        },
        {
          icon_id: '29952',
          name: 'unfold',
          font_class: 'unfold',
          unicode: 'e661',
          unicode_decimal: 58977
        },
        {
          icon_id: '29953',
          name: 'warn_fill',
          font_class: 'warnfill',
          unicode: 'e662',
          unicode_decimal: 58978
        },
        {
          icon_id: '29954',
          name: 'warn',
          font_class: 'warn',
          unicode: 'e663',
          unicode_decimal: 58979
        },
        {
          icon_id: '30413',
          name: 'camera_fill',
          font_class: 'camerafill',
          unicode: 'e664',
          unicode_decimal: 58980
        },
        {
          icon_id: '30414',
          name: 'camera',
          font_class: 'camera',
          unicode: 'e665',
          unicode_decimal: 58981
        },
        {
          icon_id: '30415',
          name: 'comment_fill',
          font_class: 'commentfill',
          unicode: 'e666',
          unicode_decimal: 58982
        },
        {
          icon_id: '30416',
          name: 'comment',
          font_class: 'comment',
          unicode: 'e667',
          unicode_decimal: 58983
        },
        {
          icon_id: '30417',
          name: 'like_fill',
          font_class: 'likefill',
          unicode: 'e668',
          unicode_decimal: 58984
        },
        {
          icon_id: '30418',
          name: 'like',
          font_class: 'like',
          unicode: 'e669',
          unicode_decimal: 58985
        },
        {
          icon_id: '30419',
          name: 'notification_fill',
          font_class: 'notificationfill',
          unicode: 'e66a',
          unicode_decimal: 58986
        },
        {
          icon_id: '30420',
          name: 'notification',
          font_class: 'notification',
          unicode: 'e66b',
          unicode_decimal: 58987
        },
        {
          icon_id: '30421',
          name: 'order',
          font_class: 'order',
          unicode: 'e66c',
          unicode_decimal: 58988
        },
        {
          icon_id: '30441',
          name: 'back',
          font_class: 'back',
          unicode: 'e679',
          unicode_decimal: 59001
        },
        {
          icon_id: '30444',
          name: 'cascades',
          font_class: 'cascades',
          unicode: 'e67c',
          unicode_decimal: 59004
        },
        {
          icon_id: '30450',
          name: 'list',
          font_class: 'list',
          unicode: 'e682',
          unicode_decimal: 59010
        },
        {
          icon_id: '30479',
          name: 'scan',
          font_class: 'scan',
          unicode: 'e689',
          unicode_decimal: 59017
        },
        {
          icon_id: '31334',
          name: 'question_fill',
          font_class: 'questionfill',
          unicode: 'e690',
          unicode_decimal: 59024
        },
        {
          icon_id: '31335',
          name: 'question',
          font_class: 'question',
          unicode: 'e691',
          unicode_decimal: 59025
        },
        {
          icon_id: '31356',
          name: 'form',
          font_class: 'form',
          unicode: 'e699',
          unicode_decimal: 59033
        },
        {
          icon_id: '31416',
          name: 'pic',
          font_class: 'pic',
          unicode: 'e69b',
          unicode_decimal: 59035
        },
        {
          icon_id: '32091',
          name: 'top',
          font_class: 'top',
          unicode: 'e69e',
          unicode_decimal: 59038
        },
        {
          icon_id: '32092',
          name: 'pull_down',
          font_class: 'pulldown',
          unicode: 'e69f',
          unicode_decimal: 59039
        },
        {
          icon_id: '32093',
          name: 'pull_up',
          font_class: 'pullup',
          unicode: 'e6a0',
          unicode_decimal: 59040
        },
        {
          icon_id: '32305',
          name: 'right',
          font_class: 'right',
          unicode: 'e6a3',
          unicode_decimal: 59043
        },
        {
          icon_id: '32312',
          name: 'refresh',
          font_class: 'refresh',
          unicode: 'e6a4',
          unicode_decimal: 59044
        },
        {
          icon_id: '32326',
          name: 'more_android',
          font_class: 'moreandroid',
          unicode: 'e6a5',
          unicode_decimal: 59045
        },
        {
          icon_id: '32472',
          name: 'qr_code',
          font_class: 'qrcode',
          unicode: 'e6b0',
          unicode_decimal: 59056
        },
        {
          icon_id: '32477',
          name: 'delete',
          font_class: 'delete',
          unicode: 'e6b4',
          unicode_decimal: 59060
        },
        {
          icon_id: '33515',
          name: 'profile',
          font_class: 'profile',
          unicode: 'e6b7',
          unicode_decimal: 59063
        },
        {
          icon_id: '33516',
          name: 'home',
          font_class: 'home',
          unicode: 'e6b8',
          unicode_decimal: 59064
        },
        {
          icon_id: '33519',
          name: 'home_fill',
          font_class: 'homefill',
          unicode: 'e6bb',
          unicode_decimal: 59067
        },
        {
          icon_id: '38744',
          name: 'round_add_fill',
          font_class: 'roundaddfill',
          unicode: 'e6d8',
          unicode_decimal: 59096
        },
        {
          icon_id: '38746',
          name: 'round_add',
          font_class: 'roundadd',
          unicode: 'e6d9',
          unicode_decimal: 59097
        },
        {
          icon_id: '577302',
          name: '单选-fill',
          font_class: 'danxuanfill',
          unicode: 'e71e',
          unicode_decimal: 59166
        },
        {
          icon_id: '577305',
          name: '单选',
          font_class: 'danxuan',
          unicode: 'e71f',
          unicode_decimal: 59167
        },
        {
          icon_id: '577316',
          name: '提示-fill',
          font_class: 'tishifill',
          unicode: 'e72a',
          unicode_decimal: 59178
        },
        {
          icon_id: '577317',
          name: '提示',
          font_class: 'tishi',
          unicode: 'e72b',
          unicode_decimal: 59179
        },
        {
          icon_id: '577329',
          name: '标星-fill',
          font_class: 'biaoxingfill',
          unicode: 'e732',
          unicode_decimal: 59186
        },
        {
          icon_id: '577330',
          name: '标星',
          font_class: 'biaoxing',
          unicode: 'e733',
          unicode_decimal: 59187
        },
        {
          icon_id: '577332',
          name: '店铺-fill',
          font_class: 'dianpufill',
          unicode: 'e735',
          unicode_decimal: 59189
        },
        {
          icon_id: '577334',
          name: '店铺',
          font_class: 'dianpu',
          unicode: 'e736',
          unicode_decimal: 59190
        },
        {
          icon_id: '577344',
          name: '客服-fill',
          font_class: 'kefufill',
          unicode: 'e740',
          unicode_decimal: 59200
        },
        {
          icon_id: '577345',
          name: '客服',
          font_class: 'kefu',
          unicode: 'e741',
          unicode_decimal: 59201
        },
        {
          icon_id: '577347',
          name: '留言-fill',
          font_class: 'liuyanfill',
          unicode: 'e743',
          unicode_decimal: 59203
        },
        {
          icon_id: '577348',
          name: '留言',
          font_class: 'liuyan',
          unicode: 'e744',
          unicode_decimal: 59204
        },
        {
          icon_id: '577349',
          name: '朋友-fill',
          font_class: 'pengyoufill',
          unicode: 'e745',
          unicode_decimal: 59205
        },
        {
          icon_id: '577350',
          name: '朋友',
          font_class: 'pengyou',
          unicode: 'e746',
          unicode_decimal: 59206
        },
        {
          icon_id: '577361',
          name: '时钟-fill',
          font_class: 'shizhongfill',
          unicode: 'e74e',
          unicode_decimal: 59214
        },
        {
          icon_id: '577362',
          name: '时钟',
          font_class: 'shizhong',
          unicode: 'e74f',
          unicode_decimal: 59215
        },
        {
          icon_id: '577363',
          name: '首页-fill',
          font_class: 'shouyefill',
          unicode: 'e750',
          unicode_decimal: 59216
        },
        {
          icon_id: '577364',
          name: '首页',
          font_class: 'shouye',
          unicode: 'e751',
          unicode_decimal: 59217
        },
        {
          icon_id: '577366',
          name: '搜索类目-fill',
          font_class: 'sousuoleimufill',
          unicode: 'e753',
          unicode_decimal: 59219
        },
        {
          icon_id: '577367',
          name: '搜索类目',
          font_class: 'sousuoleimu',
          unicode: 'e754',
          unicode_decimal: 59220
        },
        {
          icon_id: '577373',
          name: '通知-fill',
          font_class: 'tongzhifill',
          unicode: 'e758',
          unicode_decimal: 59224
        },
        {
          icon_id: '577374',
          name: '通知',
          font_class: 'tongzhi',
          unicode: 'e759',
          unicode_decimal: 59225
        },
        {
          icon_id: '577383',
          name: '信息-fill',
          font_class: 'xinxifill',
          unicode: 'e762',
          unicode_decimal: 59234
        },
        {
          icon_id: '577384',
          name: '信息',
          font_class: 'xinxi',
          unicode: 'e763',
          unicode_decimal: 59235
        },
        {
          icon_id: '577392',
          name: '顶部-禁止',
          font_class: 'dingbujinzhi',
          unicode: 'e76b',
          unicode_decimal: 59243
        },
        {
          icon_id: '577393',
          name: '顶部',
          font_class: 'dingbu',
          unicode: 'e76c',
          unicode_decimal: 59244
        },
        {
          icon_id: '579872',
          name: 'sale-fill',
          font_class: 'salefill',
          unicode: 'e78a',
          unicode_decimal: 59274
        },
        {
          icon_id: '579873',
          name: 'sale',
          font_class: 'sale',
          unicode: 'e78b',
          unicode_decimal: 59275
        },
        {
          icon_id: '1096518',
          name: 'video_fill',
          font_class: 'videofill',
          unicode: 'e7c7',
          unicode_decimal: 59335
        },
        {
          icon_id: '1492012',
          name: 'home_light',
          font_class: 'home-light',
          unicode: 'e7d4',
          unicode_decimal: 59348
        },
        {
          icon_id: '2023019',
          name: 'play_forward_fill',
          font_class: 'play_forward_fill',
          unicode: 'e7f5',
          unicode_decimal: 59381
        },
        {
          icon_id: '9874459',
          name: 'KHCFDC_编辑',
          font_class: 'bianji',
          unicode: 'e6c5',
          unicode_decimal: 59077
        },
        {
          icon_id: '9874460',
          name: 'KHCFDC_编辑 2',
          font_class: 'bianji1',
          unicode: 'e6c6',
          unicode_decimal: 59078
        }
      ]
    }
  },
  onLoad() {},
  methods: {}
}
</script>

<style>
.content {
  height: 400rpx;
  text-align: center;
}

.logo {
  width: 200rpx;
  height: 200rpx;
  margin-top: 200rpx;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
