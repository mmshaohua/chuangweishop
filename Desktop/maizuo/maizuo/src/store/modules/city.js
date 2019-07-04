// import axios from "axios";
import { Toast } from "vant";

const state = {
  cities: window.localStorage.getItem("cities")
    ? JSON.parse(window.localStorage.getItem("cities"))
    : [], //城市列表数据
  searchVal: "", //搜索关键字
  curCityId: window.localStorage.getItem("curCityId")
    ? window.localStorage.getItem("curCityId") - 0
    : 440300 //当前选择的城市id
};

const getters = {
  //当前选择的城市信息
  curCityInfo(state) {
    //[{cityId: xxx,}, {}, {}]
    // {cityid:xxx, name: '深圳'}
    return state.cities.find(item => item.cityId === state.curCityId);
  },
  cityList(state) {
    let result = [];
    state.cities.forEach(city => {
      let py = city.pinyin.charAt(0).toUpperCase();
      let index = result.findIndex(item => item.py === py);
      if (index > -1) {
        result[index].list.push(city);
      } else {
        let obj = {
          py,
          list: [city]
        };
        result.push(obj);
      }
    });
    result = result.sort((a, b) => {
      return a.py.charCodeAt() - b.py.charCodeAt();
    });
    return result;
  },

  hotCity(state) {
    return state.cities.filter(item => item.isHot);
  },

  indexlist(state, getters) {
    // [{py: 'A'}, {py: 'B'}]
    // ['A', 'B']
    return getters.cityList.map(item => item.py);
  },

  /**
   * 搜索结果，根据 state 中 cities 与 searchVal
   */
  searchList(state) {
    // [{name: '北京'}, {name: '北平'}, {name: '鞍山'}]
    // searchVal = '北'
    // [{name: '北京'}, {name: '北平'}]
    let tmp = [];
    if (state.searchVal) {
      tmp = state.cities.filter(item => {
        return item.name.indexOf(state.searchVal) > -1;
      });
    }
    return tmp;
  }
};

const mutations = {
  setSearchVal(state, payload) {
    state.searchVal = payload.value;
  },
  setCities(state, payload) {
    state.cities = payload.list;
  },
  setCurCityId(state, payload) {
    state.curCityId = payload.cityId;
  }
};

const actions = {
  getCities({ commit, state }) {
    // 有数据就不发送请求了
    if (state.cities.length) {
      return;
    }

    Toast.loading({ duration: 0, mask: true, message: "加载中..." });
    axios
      .get("https://m.maizuo.com/gateway?k=2498439", {
        headers: {
          "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"156194886142949673108"}',
          "X-Host": "mall.film-ticket.city.list"
        }
      })
      .then(response => {
        let res = response.data;
        if (res.status === 0) {
          // 1. 将城市数据给到 仓库
          commit({ type: "setCities", list: res.data.cities });
          // 2. 将城市数据本地储存起来
          window.localStorage.setItem("cities", JSON.stringify(res.data.cities));
        } else {
          Toast(res.msg);
        }

        Toast.clear();
      });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
