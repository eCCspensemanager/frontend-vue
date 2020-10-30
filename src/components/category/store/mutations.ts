import { generateRandomNo } from '@/store/storage-util';
import { CategoryState } from '.';
import Category from '../category';
import { CATEGORY_CREATE } from './mutation-types';

export const categoryMutations = {
  [CATEGORY_CREATE](state: CategoryState, category: Category) {
    category.id = generateRandomNo();
    state.categories.push(category);
  },
};
