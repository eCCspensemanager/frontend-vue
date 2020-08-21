<template>
  <v-data-table :headers="headers" :items="transactions"></v-data-table>
</template>

<script>
export default {
  name: "TransactionTable",
  props: ["headers", "transactions"],
};
</script>

<style>
</style>
