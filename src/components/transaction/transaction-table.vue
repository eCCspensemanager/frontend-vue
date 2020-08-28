<template>
  <v-data-table :headers="headers" :items="transactions">
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-spacer></v-spacer>
        <v-btn color="primary" dark class="mb-2" @click="showDialog = true">New Item</v-btn>
        <transaction-dialog :isVisible="showDialog" v-on:dialog-closed="showDialog = $event" />
      </v-toolbar>
    </template>
    <template v-slot:item.date="{ item }">{{ formatDate(item.date) }}</template>
    <template v-slot:item.amount="{ item }">
      <v-chip :color="getAmountColor(item.outflow)" dark>{{ getAmount(item.amount) }}</v-chip>
    </template>
  </v-data-table>
</template>

<script>
import TransactionDialog from "./transaction-dialog";

export default {
  name: "TransactionTable",
  components: {
    TransactionDialog,
  },
  data: () => ({
    headers: [
      { text: "Payee", align: "start", value: "payee" },
      { text: "Memo", align: "start", value: "memo" },
      { text: "Date", align: "start", value: "date" },
      { text: "Category", align: "start", value: "category" },
      { text: "Amount", align: "end", value: "amount" },
    ],
    showDialog: false,
  }),

  computed: {
    transactions: function () {
      return this.$store.state.transactions;
    },
  },

  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString("de-DE");
    },

    getAmountColor(outflow) {
      return outflow ? "red" : "green";
    },

    getAmount(amount) {
      return amount.toFixed(2).replace(".", ",") + "€";
    },
  },
};
</script>

<style>
</style>
