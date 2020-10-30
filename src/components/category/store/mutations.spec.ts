import { categoryMutations, CategoryState, CATEGORY_CREATE } from '.';
import Category from './category';

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
