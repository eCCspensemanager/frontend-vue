<template>
  <v-dialog v-model="visible" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">{{ formTitle }}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="item.payee" label="Payee"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="item.category" label="Category"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="item.date" label="Date"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="item.memo" label="Memo"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="item.amount" label="Amount"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-checkbox v-model="item.outflow" label="Outflow"></v-checkbox>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="close">Cancel</v-btn>
        <v-btn color="accent" text @click="save">{{ submitBtn }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

export default {
  name: "TransactionDialog",

  props: {
    isVisible: Boolean,
    item: Object,
  },

  data: () => ({
    visible: false,
  }),

  computed: {
    formTitle() {
      return this.item.id == null ? "New Item" : "Edit Item";
    },
    submitBtn() {
      return this.item.id == null ? "Create" : "Update"
    }
  },

  watch: {
    isVisible: function (newVal) {
      this.visible = newVal;
    },
  },

  methods: {
    close() {
      this.visible = false;
      this.$emit("dialog-closed", this.visible);
    },

    save() {
      if (this.item.id == null) {
        // Object.assign(this.desserts[this.editedIndex], this.editedItem);
        this.$store.commit("addTransaction", this.item);
      } else {
        this.$store.commit("editTransaction", this.item);
      }
      this.close();
    },
  },
};
</script>

<style>
</style>
