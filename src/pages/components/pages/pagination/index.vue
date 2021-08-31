<template>
  <view class="pi-scroll-container">
    <pi-navbar title="Pagination-分页组件" />
    <scroll-view class="pi-scroll pi-flex-column" scroll-y>
      <!-- 基础用法 -->
      <pi-card>
        <pi-section slot="title" padding="0" title="基础用法" desc=" " />
        <template slot="body">
          <pi-pagination :total="300" :limit="7" :page.sync="page" :page-size="20" />
        </template>
      </pi-card>
      <pi-card>
        <pi-section slot="title" padding="0" title="基础用法" desc="背景色" />
        <template slot="body">
          <pi-pagination :total="300" :limit="5" :page.sync="page1" :page-size="20" background />
        </template>
      </pi-card>
      <pi-card>
        <pi-section
          slot="title"
          padding="0"
          title="基础用法"
          desc="背景色+右对齐(text-align=right)"
        />
        <template slot="body">
          <pi-pagination
            :total="300"
            :limit="5"
            :page.sync="page2"
            :page-size="20"
            background
            text-align="right"
          />
        </template>
      </pi-card>
      <pi-card>
        <pi-section slot="title" padding="0" title="基础用法" desc="通过插槽改变上一页、下一页" />
        <template slot="body">
          <pi-pagination
            :total="300"
            :limit="5"
            :page.sync="page3"
            :page-size="20"
            background
            text-align="left"
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
      page: 2,
      page1: 1,
      page2: 1,
      page3: 3
    }
  }
}
</script>
