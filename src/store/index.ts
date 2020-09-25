import Vue from 'vue';
import Vuex from 'vuex';
import Transaction from '../components/transaction/transaction';
import { generateRandomNo } from './storage-util';
import { TRANSACTION_CREATE } from './mutation-types';

Vue.use(Vuex);

export const mutations = {
  [TRANSACTION_CREATE](state: any, transaction: Transaction) {
    transaction.id = generateRandomNo();
    state.transactions.push(transaction);
  },
};

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
