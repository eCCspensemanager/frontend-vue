<template>
  <TransactionTable />
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
