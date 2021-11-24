<template>
  <view class="pi-scroll-container">
    <pi-navbar title="下拉菜单" />
    <scroll-view class="pi-scroll" scroll-y>
      <pi-card>
        <pi-section slot="title" padding="0" title="基础用法" />
        <template slot="body">
          <pi-dropdown v-model="baseUsed.value">
            <pi-dropdown-item v-model="baseUsed.order" title="综合" :options="orders" />
            <pi-dropdown-item
              v-model="baseUsed.discount"
              title="折扣"
              :options="discounts"
              disabled
            />
            <pi-dropdown-item v-model="baseUsed.type" title="类型" :options="types" />
            <pi-dropdown-item v-model="baseUsed.size" title="尺寸" :options="sizes" />
            <pi-dropdown-item
              v-model="baseUsed.region"
              show-icon
              :icon-option="{ name: 'list' }"
              title="地区"
              :options="regions"
            />
          </pi-dropdown>
        </template>
      </pi-card>
      <pi-card>
        <pi-section slot="title" padding="0" title="自定义插槽" />
        <template slot="body">
          <pi-dropdown ref="custom-slot" v-model="customSlot.value">
            <pi-dropdown-item v-model="customSlot.order" title="综合" :options="orders" />
            <pi-dropdown-item v-model="customSlot.discount" title="折扣" :options="discounts" />
            <pi-dropdown-item v-model="customSlot.type" title="自定义插槽" :options="types">
              <view class="pi-pd-24">
                <!-- 插槽内容 -->
                <pi-grid col="2" gap="24">
                  <pi-grid-item v-for="(type, index) in types" :key="type.id" :index="index">
                    <view
                      class="pi-h-100P pi-flex-column-center pi-pd-tb-20"
                      :class="{ 'pi-bg-fourth pi-white': customSlot.type === type.id }"
                      @tap="handleSelectCustomSlot(type)"
                    >
                      {{ type.text }}
                    </view>
                  </pi-grid-item>
                </pi-grid>
              </view>
              <!-- 插槽内容 End -->
            </pi-dropdown-item>
            <pi-dropdown-item v-model="customSlot.size" title="尺寸" :options="sizes" />
            <pi-dropdown-item
              v-model="customSlot.region"
              show-icon
              :icon-option="{ name: 'list' }"
              title="地区"
              :options="regions"
            />
          </pi-dropdown>
        </template>
      </pi-card>
    </scroll-view>
  </view>
</template>

<script>
import data from './data.js'
export default {
  name: 'DropDown',
  data() {
    return {
      ...data
    }
  },
  methods: {
    handleSelectCustomSlot(type) {
      this.customSlot.type = type.id
      this.$refs['custom-slot'].submit()
    }
  }
}
</script>
