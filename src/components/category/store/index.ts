import Category from '../category';
import { categoryGetters } from './getters';
import { categoryMutations } from './mutations';

export interface CategoryState {
  categories: Category[];
}

export const categoryStore = {
  state: { categories: [] },
  mutations: categoryMutations,
  getters: categoryGetters,
};
