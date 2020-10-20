import axios from "axios";

let ApiBaseUrl = process.env.VUE_APP_ApiBaseUrl + "";
let Config = {
  headers: {
    "Content-Type": "application/json",
  },
};
export default {
  //取得Token
  Login: function(Arg) {
    let url = ApiBaseUrl + "Member/Login";
    axios.post(url, Arg, Config);
  },
};
