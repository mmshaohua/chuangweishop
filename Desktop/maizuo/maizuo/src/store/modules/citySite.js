import { toast } from "vant";
// import Axios from "axios";

const state = {
  citySiteList: []
};

const mutations = {
  setCitySiteList(state, payload) {
    state.citySiteList = payload.list;
  }
};

const actions = {
  getCitySiteList({ commit, state }) {
    // Toast.loading({ durationn: 0, mask: true, message: "加载中..." });
    axios({
      method: "get",
      url: "https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=2937293",
      headers: {
        "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"15612914479350143803725"}',
        "X-Host": "mall.film-ticket.cinema.list"
      }
    }).then(res => {
      console.log(res);
      // toast.clear();
      if (res.status === 200) {
        commit({
          type: "setCitySiteList",
          list: res.data.data.cinemas
        });
        //console.log(list);
      }
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
