<template>
  <div>
    <h3>Existing budgets:</h3>
    <v-list dense height="200px" class="overflow-y-auto">
      <v-list-item v-for="budget in budgets" :id="budget.id" :key="budget.id">
        <v-list-item-content>
          {{ budget.category.name }} - {{ budget.amount }}
          <v-divider class="mt-4 categories-divider" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'BudgetList',
  computed: {
    budgets: function () {
      return this.$store.getters.getBudgets();
    },
  },
};
</script>
