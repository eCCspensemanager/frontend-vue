import { categoryMutations, CategoryState, CATEGORY_CREATE } from '.';

describe('categoryMutations', () => {
  describe('CATEGORY_CREATE', () => {
    it('adds the category to the state', () => {
      const state = createState();

      categoryMutations[CATEGORY_CREATE](state, 'Insurance');

      expect(state.categories.length).toBe(1);
      expect(state.categories[0].name).toEqual('Insurance');
    });

    it('generates category ID', () => {
      const state = createState();

      categoryMutations[CATEGORY_CREATE](state, '');

      expect(state.categories[0].id).not.toBeNull();
    });
  });
});

function createState(): CategoryState {
  return { categories: [] };
}
