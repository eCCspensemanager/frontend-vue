<template>
  <v-card class="mt-6">
    <TransactionTable />
  </v-card>
</template>

<script>
import TransactionTable from '@/components/transaction/table/transaction-table';

export default {
  name: 'ExpensesPage',

  components: {
    TransactionTable,
  },
};
</script>
