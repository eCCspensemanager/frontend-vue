import { generateRandomNo } from '@/store/storage-util';
import { CategoryState, CATEGORY_CREATE } from '.';
import Category from './category';

export const categoryMutations = {
  [CATEGORY_CREATE](state: CategoryState, category: Category) {
    category.id = generateRandomNo();
    state.categories.push(category);
  },
};
