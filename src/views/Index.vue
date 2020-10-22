<template>
  <div id="home" class="page">
    <ScrollUpdate :update="reset">
      <div class="box">
        <h1>第一頁</h1>
        <div
          @touchstart.stop="
            {
            }
          "
          @touchmove.stop="
            {
            }
          "
        >
          <swiper id="sw" :options="swiper">
            <swiper-slide
              class="list-item"
              v-for="(item, index) in dataList"
              :key="item.title"
            >
              {{ index }}
              {{ item.title }}
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </ScrollUpdate>
  </div>
</template>

<script>
import ScrollUpdate from "../components/ScrollUpdate";
export default {
  name: "home",
  components: {
    ScrollUpdate,
  },
  data() {
    return {
      swiper: {
        slidesPerView: 1,
        spaceBetween: 12,
        initialSlide: 0,
        // freeMode: true,
        grabCursor: true,
        centerInsufficientSlides: true,
        touchMoveStopPropagation: true,
      },
      dataList: [
        { title: "1111111" },
        { title: "2222222" },
        { title: "3333333" },
      ],
    };
  },
  mounted() {},
  methods: {
    reset() {
      console.log("好了啦");
    },
    touchHandler() {
      console.log("有");
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  position: fixed;
  width: 100%;
  height: 100%;
  font-size: 36px;
}
.box {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  font-size: 36px;
  background-color: #f0a;
}
#sw {
  width: 100%;
  box-sizing: border-box;
  padding: 0 40px 0 20px;
}
.list-item {
  width: 90vw;
  height: 300px;
  border-radius: 2px;
  backdrop-filter: blur(10px);
  border: solid 1px #ffffff;
  background-color: #c2aff0;
  margin-top: 18px;
  cursor: pointer;
  position: relative;
}
</style>
