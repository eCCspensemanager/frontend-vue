// [vue/valid-v-slot]
<template>
  <v-data-table :headers="headers" :items="transactions">
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-spacer></v-spacer>
        <v-btn id="btn-create-transaction" color="accent" dark class="mb-2" @click="newTransaction()">New Transaction</v-btn>
        <TransactionDialog :is-visible="showDialog" :item="dialogItem" @dialog-closed="showDialog = $event" />
        <DeletionConfirmation :deletion-data="deletionConfirmationData" @close-event="confirmationClosed" />
      </v-toolbar>
    </template>
    <template v-slot:[`item.date`]="{ item }">{{ formatDate(item.date) }}</template>
    <template v-slot:[`item.amount`]="{ item }">
      <span :class="getAmountColor(item.outflow)">{{ getAmount(item.amount) }}</span>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon small class="mr-2" @click="editTransaction(item)">mdi-pencil</v-icon>
      <v-icon small @click="deleteTransaction(item)">mdi-delete</v-icon>
    </template>
  </v-data-table>
</template>

<script>
import { defaultTransaction } from '@/components/transaction/store/transaction';
import TransactionDialog from '@/components/transaction/dialog/transaction-dialog';
import DeletionConfirmation from '@/components/deletion';
import DeletionConfirmationData from '@/components/deletion/data/deletion-confirmation-data';
import { TRANSACTION_DELETE } from '@/components/transaction/store';

export default {
  name: 'TransactionTable',
  components: {
    TransactionDialog,
    DeletionConfirmation,
  },
  data: () => ({
    headers: [
      { text: 'Payee', align: 'start', value: 'payee' },
      { text: 'Memo', align: 'start', value: 'memo' },
      { text: 'Date', align: 'start', value: 'date' },
      { text: 'Category', align: 'start', value: 'category.name' },
      { text: 'Amount', align: 'end', value: 'amount' },
      { text: 'Actions', align: 'center', value: 'actions', sortable: false },
    ],
    showDialog: false,
    dialogItem: {},
    deletionConfirmationData: new DeletionConfirmationData(),
  }),

  computed: {
    transactions: function () {
      return this.$store.state.transaction.transactions;
    },
  },

  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString('de-DE');
    },

    getAmountColor(outflow) {
      return 'amount-cell ' + (outflow ? 'red--text' : 'green--text');
    },

    getAmount(amount) {
      return amount.toFixed(2).replace('.', ',') + '€';
    },

    newTransaction() {
      this.dialogItem = defaultTransaction();
      this.showDialog = true;
    },

    editTransaction(item) {
      this.dialogItem = Object.assign({}, item);
      this.showDialog = true;
    },

    deleteTransaction(item) {
      this.deletionConfirmationData.show(`${item.payee} (${item.amount}€ on ${item.date.toLocaleDateString()})`, () =>
        this.$store.commit(TRANSACTION_DELETE, item),
      );
    },

    confirmationClosed() {
      this.deletionConfirmationData.showConfirmation = false;
    },
  },
};
</script>

<style></style>
