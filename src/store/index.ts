import { categoryStore } from '@/components/category/store';
import Transaction from '@/components/transaction/transaction';
import Vue from 'vue';
import Vuex from 'vuex';
import { mutations } from './mutations';

Vue.use(Vuex);

export interface AppState {
  transactions: Transaction[];
  //categories: Category[];
}

export default new Vuex.Store({
  modules: {
    category: categoryStore,
  },
  state: {
    transactions: [],
  },
  mutations: mutations,
});
