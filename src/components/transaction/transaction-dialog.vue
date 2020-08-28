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
</template>

<script>
import Transaction from "./Transaction";

export default {
  name: "TransactionDialog",

  props: {
    isVisible: Boolean,
  },

  data: () => ({
    visible: false,
    editedItem: new Transaction("", "", null, "", 0, true),
    defaultItem: new Transaction("", "", null, "", 0, true),
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
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
        this.$store.commit(
          "addTransaction",
          new Transaction("4", "es", "wird", new Date(), "any", 1337, false)
        );
      }
      this.close();
    },
  },
};
</script>

<style>
</style>