<template>
  <div id="test222" class="page">
    <ScrollUpdate :update="reset">
      <div class="box">
        第三頁
        <ul>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表2</li>
          <li>列表2</li>
          <li>列表2</li>
          <li>列表2</li>
          <li>列表2</li>
          <li>列表2</li>
          <li>列表2</li>
          <li>列表2</li>
          <li>列表2</li>
          <li>列表2</li>
          <li>列表2</li>
          <li>列表2</li>
          <li>列表2</li>
          <li>列表2</li>
          <li>列表2</li>
          <li>列表2</li>
          <li>列表2</li>
          <li>列表2</li>
          <li>列表2</li>
        </ul>
      </div>
    </ScrollUpdate>
  </div>
</template>

<script>
import ScrollUpdate from "../components/ScrollUpdate";
export default {
  name: "test2",
  components: {
    ScrollUpdate,
  },
  methods: {
    reset() {
      console.log("好了啦");
    },
  },
  created() {
    console.log("test2");
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
  background-color: rgb(212, 182, 82);
}
</style>
