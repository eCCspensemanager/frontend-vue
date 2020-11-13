<template>
  <v-card class="mt-6">
    <p class="pa-3">
      A budget is always based on a category. It's also month-based - this means that it will the amount is in context of the current month's
      transactions. The remaining budget will be added to the next months budget automatically.
    </p>
    <BudgetDialog :is-visible="showDialog" @dialog-closed="showDialog = $event" />
    <BudgetList />
  </v-card>
</template>

<script>
import BudgetDialog from '@/components/budget/dialog/budget-dialog';
import BudgetList from '@/components/budget/list/budget-list';

export default {
  name: 'BudgetPage',

  components: {
    BudgetDialog,
    BudgetList,
  },

  data: () => ({
    showDialog: false,
  }),
};
</script>
