import Vue from 'vue';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';
import { transactionGetters, transactionMutations } from '@/components/transaction/store';
import { categoryMutations, categoryGetters } from '@/components/category/store';
import { mockGetters, mockMutations } from './mock';
import { budgetGetters, budgetMutations } from '@/components/budget/store';

Vue.use(Vuetify);

const mockedCategoryMutations = mockMutations(categoryMutations);
const mockedTransactionMutations = mockMutations(transactionMutations);
const mockedBudgetMutations = mockMutations(budgetMutations);

export function baseVue(options?: {}) {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const vuetify = new Vuetify();

  const store = new Vuex.Store({
    modules: {
      category: {
        state: [],
        mutations: mockedCategoryMutations,
        getters: mockGetters(categoryGetters),
      },
      transaction: {
        state: [],
        getters: mockGetters(transactionGetters),
        mutations: mockedTransactionMutations,
      },
      budget: {
        state: [],
        getters: mockGetters(budgetGetters),
        mutations: mockedBudgetMutations,
      },
    },
  });

  store.getters.getTransactions.mockImplementation(() => []);
  store.getters.getCategories.mockImplementation(() => []);
  store.getters.getBudgets.mockImplementation(() => []);

  return {
    base: { localVue, vuetify, store, ...(options ?? {}) },
    spies: {
      transaction: mockedTransactionMutations,
      category: mockedCategoryMutations,
      budget: mockedBudgetMutations,
    },
  };
}
