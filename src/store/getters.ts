import { AppState } from '.';

export const getters = {
  getCategoryByName: (state: AppState) => (name: String) => {
    return state.categories.find((category) => category.name == name);
  },
};
