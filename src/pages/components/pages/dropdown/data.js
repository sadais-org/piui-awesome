/*
 * @Author: zhangzhenfei
 * @Date: 2021-11-20 11:19:34
 * @LastEditTime: 2021-11-20 16:42:14
 * @LastEditors: zhangzhenfei
 * @Description: dropdown组件data数据
 * @FilePath: /piui-awesome/src/pages/components/pages/dropdown/data.js
 */

export default {
  orders: [
    {
      text: '默认排序',
      id: 'default'
    },
    {
      text: '信用',
      id: 'credit'
    },
    {
      text: '价格优先',
      id: 'price'
    }
  ],
  discounts: [
    {
      text: '全部',
      id: 1
    },
    {
      text: '9.9折',
      id: 2
    },
    {
      text: '8.8折',
      id: 3
    },
    {
      text: '7.7折',
      id: 4
    }
  ],
  types: [
    {
      text: '包邮',
      id: 1
    },
    {
      text: '全球购',
      id: 2
    },
    {
      text: '半折',
      id: 3
    },
    {
      text: '免费包邮',
      id: 4
    },
    {
      text: '折扣排序',
      id: 5
    }
  ],
  sizes: [
    {
      text: '小',
      id: 1
    },
    {
      text: '中',
      id: 2,
      disabled: true
    },
    {
      text: '大',
      id: 3
    }
  ],
  regions: [
    {
      text: '广东',
      id: 1
    },
    {
      text: '广西',
      id: 2
    },
    {
      text: '北京',
      id: 3
    },
    {
      text: '新疆',
      id: 4
    }
  ],
  baseUsed: {
    value: ['credit', 4], // 绑定默认值
    order: 'credit',
    discount: 4,
    type: '',
    size: '',
    region: ''
  },
  customSlot: {
    value: [], // 绑定默认值
    order: '',
    discount: '',
    type: 3,
    size: '',
    region: ''
  }
}
