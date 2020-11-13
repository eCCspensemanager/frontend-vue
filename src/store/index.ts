import { budgetStore } from '@/components/budget/store';
import { categoryStore } from '@/components/category/store';
import { transactionStore } from '@/components/transaction/store';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    category: categoryStore,
    transaction: transactionStore,
    budget: budgetStore,
  },
});
