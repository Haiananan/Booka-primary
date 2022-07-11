//vuex store
//引入 Vuex , Vue
import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);
//准备 actions 用于响应组件中的动作
const actions = {};
//用于操作数据（state）
const mutations = {};
//用于存储数据
const state = {};
//创建 store 并暴露
export default new Vuex.Store({
  actions,
  mutations,
  state,
});