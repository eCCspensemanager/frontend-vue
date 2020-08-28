<template>
  <v-data-table :headers="headers" :items="transactions">
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">New Item</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.count" label="Count"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.date="{ item }">{{ formatDate(item.date) }}</template>
    <template v-slot:item.amount="{ item }">
      <v-chip :color="getAmountColor(item.outflow)" dark>{{ getAmount(item.amount) }}</v-chip>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: "TransactionTable",
  data: () => ({
    dialog: false,
    headers: [
      { text: "Payee", align: "start", value: "payee" },
      { text: "Memo", align: "start", value: "memo" },
      { text: "Date", align: "start", value: "date" },
      { text: "Category", align: "start", value: "category" },
      { text: "Amount", align: "end", value: "amount" },
    ],
    data: false,
    editedItem: {
      name: "",
      count: 0,
    },
    defaultItem: {
      name: "",
      count: 0,
    },
  }),

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  computed: {
    transactions: function () {
      return this.$store.state.transactions;
    },
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
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

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        // TODO edit
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.$store.commit("addTransaction", this.editedItem);
      }
      this.close();
    },
  },
};
</script>

<style>
</style>
