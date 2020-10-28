<template>
  <v-card class="mt-6">
    <TransactionTable />
  </v-card>
</template>

<script>
import TransactionTable from '@/components/transaction/transaction-table.vue';

export default {
  name: 'ExpensesPage',

  components: {
    TransactionTable,
  },
};
</script>
