import { generateRandomNo } from '@/store/storage-util';
import Category from './category';

export const CATEGORY_CREATE = 'CATEGORY:CREATE';

export interface CategoryState {
  categories: Category[];
}

export const categoryGetters = {
  getCategories: (state: CategoryState) => () => {
    return state.categories;
  },
  getCategoryByName: (state: CategoryState) => (name: string) => {
    return state.categories.find((category) => category.name == name);
  },
  categoryExists: (state: CategoryState) => (name: string) => {
    return state.categories
      .map((item) => {
        return item.name;
      })
      .includes(name);
  },
};

export const categoryMutations = {
  [CATEGORY_CREATE](state: CategoryState, name: string) {
    let category = new Category(name);
    category.id = generateRandomNo();
    state.categories.push(category);
  },
};

export const categoryStore = {
  state: { categories: [] },
  mutations: categoryMutations,
  getters: categoryGetters,
};
