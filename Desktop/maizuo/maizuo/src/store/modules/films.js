import { Toast } from "vant";
import axios from "axios";
const state = {
  filmList: [],
  curFilmType: 0, //影片类型
  filmLoading: false, //影片加载状态
  pageNum: 1, //页码
  pageSize: 20, //每页显示条数
  total: 1 //总条数
};

const getters = {
  //总的页数
  totalPage(state) {
    return Math.ceil(state.total / state.pageSize);
  },
  //是否还有更多数据，为true代表没有更多
  isFinished(state, getters) {
    return state.pageNum > getters.totalPage;
  }
};

const mutations = {
  setFilmList(state, payload) {
    state.filmList = payload.list;
    state.total = payload.total;
  },

  setCurFilmType(state, payload) {
    state.curFilmType = payload.filmType;
  },

  setFilmLoading(state, payload) {
    state.filmLoading = payload.loading;
  },

  setPageNum(state, payload) {
    state.pageNum = payload.num;
  }
};

const actions = {
  getFilmList({ commit, state }, isChangeFilmType) {
    //请求之前， loading
    if (isChangeFilmType) {
      // 1. 清空filmlist
      // commit({ type: "setFilmList", list: [], total: 1 });
      // 2. 将 pageNum 设置为 1
      commit({ type: "setPageNum", num: 1 });
    }

    Toast.loading({ durationn: 0, mask: true, message: "加载中..." });
    axios
      .get("https://m.maizuo.com/gateway", {
        params: {
          cityId: 440300,
          pageNum: state.pageNum,
          pageSize: state.pageSize,
          //type =1 正在热映
          //type =2 即将上映
          type: state.curFilmType === 0 ? 1 : 2,
          k: 66161
        },
        headers: {
          "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"156194886142949673108"}',
          "X-Host": "mall.film-ticket.film.list"
        }
      })
      .then(response => {
        let res = response.data;
        if (res.status === 0) {
          commit({
            type: "setFilmList",
            list: isChangeFilmType ? res.data.films : [...state.filmList, ...res.data.films],
            total: res.data.total
          });
        } else {
          Toast(res.msg);
        }
        // 1. 数据加载完成，需要将 filmLoading 设置为 false
        commit({ type: "setFilmLoading", loading: false });
        // 2. 数据加载完成，需要将页码++
        commit({ type: "setPageNum", num: state.pageNum + 1 });
        // 3. 判断是否是最后一页 ，已经交给上面的 isFinised 来处理了
        // 4. 数据追击，而不是赋值。
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
