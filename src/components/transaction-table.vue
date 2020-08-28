<template>
  <v-data-table :headers="headers" :items="transactions"></v-data-table>
</template>

<script>
export default {
  name: "TransactionTable",
  data: () => ({
    headers: [
      {
        text: "Type",
        align: "start",
        sortable: false,
        value: "name",
      },
      {
        text: "Count",
        align: "start",
        sortable: false,
        value: "count",
      },
    ],
  }),
  computed: {
    transactions: function () {
      return this.$store.state.transactions;
    },
  },
};
</script>

<style>
</style>
