<template>
  <v-card class="mt-6 pa-4">
    <p>
      A budget is always based on a category. It's also month-based - this means that it will the amount is in context of the current month's
      transactions. The remaining budget will be added to the next months budget automatically.
    </p>
    <p class="mt-6">
      <v-btn color="accent" @click="openDialog">Create</v-btn>
      <BudgetDialog :is-visible="showDialog" :budget="budget" @dialog-closed="showDialog = $event" />
    </p>
    <BudgetList />
  </v-card>
</template>

<script>
import BudgetDialog from '@/components/budget/dialog/budget-dialog';
import BudgetList from '@/components/budget/list/budget-list';
import Budget from '../store/budget';

export default {
  name: 'BudgetPage',

  components: {
    BudgetDialog,
    BudgetList,
  },

  data: () => ({
    showDialog: false,
    budget: {},
  }),

  methods: {
    openDialog() {
      this.budget = new Budget(undefined, undefined);
      this.showDialog = true;
    },
  },
};
</script>
