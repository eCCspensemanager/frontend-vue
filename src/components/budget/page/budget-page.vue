<template>
  <v-card class="mt-6">
    <p>Budgets will be</p>
    <CreateBudget />
    <BudgetList />
  </v-card>
</template>

<script>
import CreateBudget from '@/components/budget/create/create-budget';
import BudgetList from '@/components/budget/list/budget-list';

export default {
  name: 'BudgetPage',
  components: {
    CreateBudget,
    BudgetList,
  },
};
</script>
