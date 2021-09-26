<template>
  <view class="pi-scroll-container">
    <pi-navbar title="Pagination-分页组件" />
    <scroll-view class="pi-scroll pi-flex-column" scroll-y>
      <!-- 基础用法 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="基础用法" :desc="'当前页：' + baseUsed" />
        <template slot="body">
          <pi-pagination v-model="baseUsed" :total="300" />
        </template>
      </pi-card>
      <pi-card>
        <pi-section slot="title" padding="0" title="填充模式" desc="fill" />
        <template slot="body">
          <pi-pagination
            v-model="fill"
            :total="300"
            :limit="5"
            :page-size="20"
            active-mode="fill"
          />
        </template>
      </pi-card>
      <pi-card>
        <pi-section slot="title" padding="0" title="填充模式+右对齐" desc="align=right" />
        <template slot="body">
          <pi-pagination
            v-model="fillAlign"
            :total="300"
            :limit="5"
            :page-size="20"
            active-mode="fill"
            align="right"
          />
        </template>
      </pi-card>
      <pi-card>
        <pi-section slot="title" padding="0" title="item插槽" desc="slot=item" />
        <template slot="body">
          <pi-pagination v-model="itemSlot" :total="300" :page-size="20">
            <template slot="item" slot-scope="{ item, active }">
              <view class="pi-fz-32" :class="active ? 'pi-fz-40 pi-fz-500 pi-solid-bottom-6' : ''">
                {{ item }}
              </view>
            </template>
          </pi-pagination>
        </template>
      </pi-card>
      <pi-card>
        <pi-section
          slot="title"
          padding="0"
          title="上一页、下一页插槽"
          desc="slot=prev，slot=next"
        />
        <template slot="body">
          <pi-pagination
            v-model="prevSlot"
            :total="300"
            :limit="5"
            :page-size="20"
            active-mode="fill"
            align="left"
          >
            <pi-icon slot="prev" name="back" size="32" />
            <pi-icon slot="next" name="right" size="32" />
          </pi-pagination>
        </template>
      </pi-card>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'PiPaginationDemo',
  data() {
    return {
      baseUsed: 2,
      fill: 1,
      fillAlign: 1,
      itemSlot: 3,
      prevSlot: 8
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .pi-solid-bottom-6::after {
  border-bottom-color: $pi-primary-color;
}
</style>
