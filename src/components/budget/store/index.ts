import { generateRandomNo } from '@/store/storage-util';
import Budget from './budget';

export const BUDGET_CREATE = 'BUDGET:CREATE';

export interface BudgetState {
  budgets: Budget[];
}

export const budgetGetters = {
  getBudgets: (state: BudgetState) => () => {
    return state.budgets;
  },
};

export const budgetMutations = {
  [BUDGET_CREATE](state: BudgetState, budget: Budget) {
    budget.id = generateRandomNo();
    state.budgets.push(budget);
  },
};

export const budgetStore = {
  state: { budgets: [] },
  mutations: budgetMutations,
  getters: budgetGetters,
};
