import Vue from 'vue';
import Vuex from 'vuex';
import Transaction from '../components/transaction/transaction';
import { mutations } from './mutations';
import { generateRandomNo } from './storage-util';

Vue.use(Vuex);

export interface AppState {
  transactions: Transaction[];
}

export default new Vuex.Store({
  state: {
    transactions: [
      new Transaction(generateRandomNo(), 'Rewe', 'Beer', new Date(), 'Groceries', 12.99, true),
      new Transaction(generateRandomNo(), 'Cinema', 'Nils ticket', new Date(), 'Entertainment', 8.5, false),
      new Transaction(generateRandomNo(), 'ADH', 'Beer', new Date(), 'Insurance', 9.99, true),
    ],
  },
  mutations: mutations,
  actions: {},
  modules: {},
});
