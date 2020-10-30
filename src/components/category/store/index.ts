import Category from './category';
import { categoryGetters } from './getters';
import { categoryMutations } from './mutations';

export const CATEGORY_CREATE = 'CATEGORY:CREATE';

export interface CategoryState {
  categories: Category[];
}

export const categoryStore = {
  state: { categories: [] },
  mutations: categoryMutations,
  getters: categoryGetters,
};
