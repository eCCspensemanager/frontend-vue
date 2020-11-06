import Vue from 'vue';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';
import Category from '@/components/category/store/category';
import Transaction from '@/components/transaction/store/transaction';
import { transactionGetters, transactionMutations } from '@/components/transaction/store';
import { categoryMutations, categoryGetters } from '@/components/category/store';
import { mockGetters, mockMutations } from './mock';

Vue.use(Vuetify);

interface BaseVueInput {
  transactions?: Transaction[];
  categories?: Category[];
  options?: any;
}

const mockedCategoryMutations = mockMutations(categoryMutations);
const mockedTransactionMutations = mockMutations(transactionMutations);

export function baseVue(input?: BaseVueInput) {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const vuetify = new Vuetify();

  const store = new Vuex.Store({
    modules: {
      category: {
        state: { categories: input?.categories ?? [] },
        mutations: mockedCategoryMutations,
        getters: mockGetters(categoryGetters),
      },
      transaction: {
        state: { transactions: input?.transactions ?? [] },
        getters: mockGetters(transactionGetters),
        mutations: mockedTransactionMutations,
      },
    },
  });

  store.getters.getTransactions.mockImplementation(() => []);
  store.getters.getCategories.mockImplementation(() => []);

  const options = input?.options ?? {};
  return {
    base: { localVue, vuetify, store, ...options },
    spies: {
      transaction: mockedTransactionMutations,
      category: mockedCategoryMutations,
    },
  };
}
