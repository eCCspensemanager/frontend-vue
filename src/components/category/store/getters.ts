import { CategoryState } from '.';

export const categoryGetters = {
  getCategoryByName: (state: CategoryState) => (name: String) => {
    return state.categories.find((category) => category.name == name);
  },
};
