import Vue from 'vue';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';
import Category from '@/components/category/store/category';
import Transaction from '@/components/transaction/store/transaction';
import { transactionGetters, transactionMutations } from '@/components/transaction/store';
import { categoryMutations, categoryGetters, CATEGORY_CREATE, CategoryState } from '@/components/category/store';

Vue.use(Vuetify);

interface BaseVueInput {
  transactions?: Transaction[];
  categories?: Category[];
  options?: any;
}

export function baseVue(input?: BaseVueInput) {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const vuetify = new Vuetify();
  const store = new Vuex.Store({
    modules: {
      category: {
        state: { categories: input?.categories ?? [] },
        mutations: categoryMutations,
        getters: categoryGetters,
      },
      transaction: {
        state: { transactions: input?.transactions ?? [] },
        mutations: transactionMutations,
        getters: transactionGetters,
      },
    },
  });

  const options = input?.options ?? {};
  return { localVue, vuetify, store, ...options };
}

const mockedCategoryGetters = {
  getCategories: (_: CategoryState) => jest.fn(),
  getCategoryByName: (_: CategoryState) => jest.fn(),
  categoryExists: (_: CategoryState) => jest.fn(),
};

const mockedCategoryMutations = {
  [CATEGORY_CREATE]: jest.fn(),
};

export function baseVue2(input?: BaseVueInput) {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const vuetify = new Vuetify();

  const store = new Vuex.Store({
    modules: {
      category: {
        state: { categories: input?.categories ?? [] },
        mutations: mockedCategoryMutations,
        getters: mockedCategoryGetters,
      },
      transaction: {
        state: { transactions: input?.transactions ?? [] },
        mutations: transactionMutations,
        getters: transactionGetters,
      },
    },
  });

  const options = input?.options ?? {};
  return {
    base: { localVue, vuetify, store, ...options },
    spies: mockedCategoryMutations,
  };
}
