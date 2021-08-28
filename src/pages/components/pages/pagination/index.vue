<template>
  <view class="pi-scroll-container">
    <pi-navbar title="Pagination-分页组件" />
    <scroll-view class="pi-scroll pi-flex-column" scroll-y>
      <!-- 基础用法 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="基础用法" desc="slot text" />
        <template slot="body">
          <pi-pagination :speed="60" :total="30" :limit="5" :page="2" />
        </template>
      </pi-card>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: 'PiPaginationDemo'
}
</script>
