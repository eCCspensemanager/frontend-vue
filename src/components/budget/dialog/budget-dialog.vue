<template>
  <v-dialog id="dialog-budget" v-model="visible" persistent max-width="500px" @keydown.esc="close">
    <v-card>
      <v-card-title>
        <span id="dialog-budget-title" class="headline">{{ formTitle }}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="9">
              <CategoryPicker :value="budget.category" @category-selected="budget.category = $event" />
            </v-col>
            <v-col cols="3">
              <v-text-field v-model.number="budget.amount" label="Amount" type="number" :rules="[rules.required]"></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn id="btn-dialog-budget-close" text @click="close">Cancel</v-btn>
        <v-btn id="btn-dialog-budget-submit" color="accent" :disabled="submitDisabled" text @click="save">
          {{ submitBtn }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import CategoryPicker from '@/components/category/picker/category-picker';
import Budget from '../store/budget';
import { BUDGET_CREATE } from '../store';

export default {
  name: 'BudgetDialog',

  components: {
    CategoryPicker,
  },
  props: {
    isVisible: Boolean,
    budget: { type: Object, default: () => new Budget(undefined, undefined) },
  },

  data: () => ({
    visible: true,
    rules: {
      required: (value) => !!value || 'Required.',
    },
  }),

  computed: {
    formTitle() {
      return 'Create budget';
    },

    submitBtn() {
      return 'Create';
    },

    submitDisabled() {
      // TODO why is the instanceof workaround needed to prevent function unknown?
      return this.budget instanceof Budget && !this.budget.isValid();
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
      if (this.budget.id == null) {
        this.$store.commit(BUDGET_CREATE, this.budget);
      } else {
        // TODO edit
        // this.$store.commit(TRANSACTION_UPDATE, this.item);
      }
      this.close();
    },
  },
};
</script>
