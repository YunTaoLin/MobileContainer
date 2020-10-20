<template>
  <div id="app">
    <TabRouter :tab-list="tabList">
      <router-view />
    </TabRouter>
    <!-- <Navbar /> -->
  </div>
</template>
<script>
import TabRouter from "./components/TabRouter";
export default {
  components: {
    TabRouter,
  },
  data() {
    return {
      tabList: [
        {
          name: "home",
          path: "/",
          index: 0,
        },
        {
          name: "tab2",
          path: "/test1",
          index: 1,
        },
        {
          name: "tab3",
          path: "/test2",
          index: 2,
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss">
@import url("./scss/reset.scss");
html,
body {
  overflow-x: hidden;
}
#app {
  width: 100vw;
  overflow-x: hidden;
  box-sizing: border-box;
}
</style>
