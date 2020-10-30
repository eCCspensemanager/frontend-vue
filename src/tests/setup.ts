import Vue from 'vue';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';
import Category from '@/components/category/store/category';
import Transaction from '@/components/transaction/store/transaction';
import { transactionGetters, transactionMutations } from '@/components/transaction/store';
import { categoryMutations, categoryGetters, CATEGORY_CREATE, CategoryState } from '@/components/category/store';
import { mockGetters, mockMutations } from './mock';

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

const mockedCategoryMutations = mockMutations(categoryMutations);

export function baseVue2(input?: BaseVueInput) {
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
        mutations: transactionMutations,
        getters: transactionGetters, // TODO use 'mockGetters'
      },
    },
  });

  const options = input?.options ?? {};
  return {
    base: { localVue, vuetify, store, ...options },
    spies: mockedCategoryMutations,
  };
}
