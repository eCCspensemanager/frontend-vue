import Vue from 'vue';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';
import Category from '@/components/category/category';
import Transaction from '@/components/transaction/transaction';
import { mutations } from '@/store/mutations';

Vue.use(Vuetify);

export function baseVueWithCategories(categories: Category[] = []) {
  return baseVue([], categories);
}

export function baseVue(transactions: Transaction[] = [], categories: Category[] = []) {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const vuetify = new Vuetify();
  const store = new Vuex.Store({
    state: {
      transactions: transactions,
      categories: categories,
    },
    mutations: mutations,
  });

  return { localVue, vuetify, store };
}
