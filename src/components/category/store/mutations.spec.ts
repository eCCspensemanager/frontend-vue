import { categoryMutations } from '@/components/category/store/mutations';
import { CategoryState } from '.';
import Category from './category';
import { CATEGORY_CREATE } from './mutation-types';

describe('categories', () => {
  describe('CATEGORY_CREATE', () => {
    it('adds the category to the state', () => {
      const state = createState();
      const newCategory = new Category('Insurance');

      categoryMutations[CATEGORY_CREATE](state, newCategory);

      expect(state.categories.length).toBe(1);
      expect(state.categories[0]).toEqual(newCategory);
    });

    it('generates category ID', () => {
      const state = createState();
      const newCategory = new Category('');
      expect(newCategory.id).toBeNull();

      categoryMutations[CATEGORY_CREATE](state, newCategory);

      expect(newCategory.id).not.toBeNull();
    });
  });
});

function createState(): CategoryState {
  return {
    categories: [],
  };
}
