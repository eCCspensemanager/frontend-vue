import Vue from 'vue';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';
import Category from '@/components/category/category';
import Transaction from '@/components/transaction/transaction';
import { mutations } from '@/store/mutations';

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
    state: {
      transactions: input?.transactions ?? [],
      categories: input?.categories ?? [],
    },
    mutations: mutations,
  });

  const options = input?.options ?? {};
  return { localVue, vuetify, store, ...options };
}
