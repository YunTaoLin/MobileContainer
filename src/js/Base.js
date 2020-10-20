/* eslint-disable prettier/prettier */
import API from "./API";
import Item from "./Item";

export default {
  install: function(Vue) {
    Vue.prototype.$AstrorgAPI = API;
    Vue.prototype.$Item = Item;
    Vue.prototype.$ShowError = ShowError;
    Vue.prototype.$UnauthorizedEvent = function(Res) {
      if (Res.status == 401) {
        window.localStorage.clear();
        this.$router.push("/Login");
      } else {
        ShowError();
      }
    };
  },
};

var ShowError = function() {
  alert("系統異常");
};
