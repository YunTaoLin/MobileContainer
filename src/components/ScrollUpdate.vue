<template>
  <mescroll-vue ref="mescroll" :down="mescrollDown" @init="mescrollInit">
    <slot></slot>
  </mescroll-vue>
</template>
<script>
import MescrollVue from "mescroll.js/mescroll.vue";
export default {
  name: "ScrollUpdate",
  components: {
    MescrollVue, // 注册mescroll组件
  },
  props: ["update"],
  data() {
    return {
      mescroll: null, // mescroll实例对象
      mescrollDown: {
        callback: this.downCallback,
        dataList: [], // 列表数据
        offset: 100,
        auto: false,
        inOffsetRate: 0.3,
        textInOffset: "繼續下拉重整",
        textOutOffset: "放開重整",
      },
    };
  },
  methods: {
    mescrollInit(mescroll) {
      this.mescroll = mescroll;
    },
    // 上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
    downCallback(page, mescroll) {
      if (this.update) {
        this.update();
      }
      setTimeout(() => {
        this.mescroll.endSuccess();
      }, 1000);
    },
  },
};
</script>

<style lang="scss">
//基礎設置  下拉
.mescroll {
  position: fixed;
  top: 0;
  bottom: 0;
  background-color: #2c3e50;
  -webkit-overflow-scrolling: touch;
  height: auto; /*如设置bottom:50px,则需height:auto才能生效*/
}
</style>
