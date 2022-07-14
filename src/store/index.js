//vuex store
//引入 Vuex , Vue
import Vuex from "vuex";
import Vue from "vue";
import axios from "axios";
Vue.use(Vuex);
//准备 actions 用于响应组件中的动作
const actions = {
  getRecommendSongs(context, cookie) {
    ///recommend/songs
    axios
      .get(`${context.state.apiurl}/recommend/songs?cookie=${cookie}`)
      .then((res) => {
      
        context.state.recommendSongsList = res.data.data.dailySongs;
        console.log(context.state.recommendSongsList)
      });
  },
};
//用于操作数据（state）
const mutations = {
  beTourist(state) {
    state.touristMode = true;
  },
  offTourist(state) {
    state.touristMode = false;
  },
};
//用于存储数据
const state = {
  apiurl: "https://music.isea.site/api",
  touristMode: false,
  recommendSongsList: [],
};

//创建 store 并暴露
export default new Vuex.Store({
  actions,
  mutations,
  state,
});
