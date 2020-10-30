import { generateRandomNo } from '@/store/storage-util';
import Category from './category';

export const CATEGORY_CREATE = 'CATEGORY:CREATE';

export interface CategoryState {
  categories: Category[];
}

export const categoryGetters = {
  // TODO add getter and use in CategoryList
  getCategoryByName: (state: CategoryState) => (name: String) => {
    return state.categories.find((category) => category.name == name);
  },
};

export const categoryMutations = {
  [CATEGORY_CREATE](state: CategoryState, category: Category) {
    category.id = generateRandomNo();
    state.categories.push(category);
  },
};

export const categoryStore = {
  state: { categories: [] },
  mutations: categoryMutations,
  getters: categoryGetters,
};
