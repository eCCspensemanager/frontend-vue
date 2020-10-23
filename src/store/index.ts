import Category from '@/components/category/category';
import Transaction from '@/components/transaction/transaction';
import Vue from 'vue';
import Vuex from 'vuex';
import { getters } from './getters';
import { mutations } from './mutations';

Vue.use(Vuex);

export interface AppState {
  transactions: Transaction[];
  categories: Category[];
}

export default new Vuex.Store({
  state: {
    transactions: [],
    categories: [],
  },
  mutations: mutations,
  getters: getters,
  actions: {},
  modules: {},
});
