import Vue from 'vue';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';
import Category from '@/components/category/store/category';
import Transaction from '@/components/transaction/transaction';
import { mutations } from '@/store/mutations';
import { categoryStore } from '@/components/category/store';
import { categoryGetters } from '@/components/category/store/getters';
import { categoryMutations } from '@/components/category/store/mutations';

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
    },
    state: {
      transactions: input?.transactions ?? [],
    },
    mutations: mutations,
  });

  const options = input?.options ?? {};
  return { localVue, vuetify, store, ...options };
}
