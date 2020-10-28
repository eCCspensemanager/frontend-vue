<template>
  <v-dialog id="dialog-transaction" v-model="visible" persistent max-width="500px" @keydown.esc="close">
    <v-card>
      <v-card-title>
        <span id="dialog-transaction-title" class="headline">{{ formTitle }}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-text-field id="text-payee" v-model="item.payee" label="Payee" :rules="[rules.required]"></v-text-field>
          <CategoryPicker :value="item.category" @category-selected="item.category = $event" />
          <v-text-field
            :value="formattedDate"
            label="Date"
            type="date"
            :rules="[rules.required]"
            @input="item.date = new Date($event)"
          ></v-text-field>
          <v-text-field v-model="item.memo" label="Memo"></v-text-field>
          <v-row>
            <v-col cols="9">
              <v-text-field v-model.number="item.amount" label="Amount" type="number" :rules="[rules.required]"></v-text-field>
            </v-col>
            <v-col cols="3">
              <v-checkbox v-model="item.outflow" label="Outflow"></v-checkbox>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn id="btn-transaction-dialog-close" text @click="close">Cancel</v-btn>
        <v-btn id="btn-transaction-dialog-submit" color="accent" :disabled="submitDisabled" text @click="save">
          {{ submitBtn }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { TRANSACTION_CREATE, TRANSACTION_UPDATE } from '../../store/mutation-types';
import Transaction from './transaction';
import CategoryPicker from '@/components/category/category-picker';

export default {
  name: 'TransactionDialog',

  components: {
    CategoryPicker,
  },

  props: {
    isVisible: Boolean,
    item: { type: Object, default: () => {} },
  },

  data: () => ({
    visible: false,
    rules: {
      required: (value) => !!value || 'Required.',
    },
  }),

  computed: {
    formattedDate() {
      let date = '';
      if (this.item.date) {
        date = this.item.date.toISOString().substring(0, 10);
      }
      return date;
    },
    formTitle() {
      return this.item.id == null ? 'New Transaction' : 'Edit Transaction';
    },
    submitBtn() {
      return this.item.id == null ? 'Create' : 'Update';
    },
    submitDisabled() {
      return this.item instanceof Transaction && !this.item.isValid();
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
      this.$emit('dialog-closed', this.visible);
    },

    save() {
      if (this.item.id == null) {
        this.$store.commit(TRANSACTION_CREATE, this.item);
      } else {
        this.$store.commit(TRANSACTION_UPDATE, this.item);
      }
      this.close();
    },
  },
};
</script>
