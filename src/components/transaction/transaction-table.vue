// [vue/valid-v-slot]
 <template>
  <v-data-table :headers="headers" :items="transactions">
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-spacer></v-spacer>
        <v-btn color="accent" dark class="mb-2" @click="newTransaction()">New Item</v-btn>
        <transaction-dialog :isVisible="showDialog" :item="dialogItem" v-on:dialog-closed="showDialog = $event" />
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
import {defaultTransaction } from "./Transaction";
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
      { text: "Actions", align: "center", value: "actions", sortable: false },
    ],
    showDialog: false,
    dialogItem: {},
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
      return outflow ? "red--text" : "green--text"
    },

    getAmount(amount) {
      return amount.toFixed(2).replace(".", ",") + "€";
    },

    newTransaction() {
      this.dialogItem = defaultTransaction()
      this.showDialog = true
    },

    editTransaction(item) {
      this.dialogItem = Object.assign({}, item)
      this.showDialog = true
    },

    deleteTransaction(item) {
      alert("delete \n" + item)
    },
  },
};
</script>

<style>
</style>
