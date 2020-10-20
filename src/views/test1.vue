<template>
  <div id="test1" class="page">
    <ScrollUpdate :update="reset">
      <div class="box">
        第二頁
        <ul>
          <li>測試</li>
          <li>測試</li>
          <li>測試</li>
          <li>測試</li>
          <li>測試</li>
          <li>測試</li>
          <li>測試</li>
          <li>測試</li>
          <li>測試</li>
          <li>測試</li>
          <li>測試</li>
          <li>測試</li>
          <li>測試</li>
          <li>測試</li>
          <li>測試</li>
          <li>測試</li>
          <li>測試</li>
          <li>測試</li>
          <li>測試</li>
          <li>測試</li>
          <li>測試2</li>
          <li>測試2</li>
          <li>測試2</li>
          <li>測試2</li>
          <li>測試2</li>
          <li>測試2</li>
          <li>測試2</li>
          <li>測試2</li>
          <li>測試2</li>
          <li>測試2</li>
          <li>測試2</li>
          <li>測試2</li>
          <li>測試2</li>
          <li>測試2</li>
          <li>測試2</li>
          <li>測試2</li>
          <li>測試2</li>
          <li>測試2</li>
          <li>測試2</li>
        </ul>
      </div>
    </ScrollUpdate>
  </div>
</template>

<script>
import ScrollUpdate from "../components/ScrollUpdate";
export default {
  name: "test1",
  components: {
    ScrollUpdate,
  },
  methods: {
    reset() {
      console.log("好了啦");
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
  width: 100%;
  height: 100%;
  min-height: 100vh;
  font-size: 36px;
  color: #fff;
  background-color: rgb(0, 119, 255);
}
</style>
