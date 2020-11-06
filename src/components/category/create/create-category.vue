<template>
  <v-container max-height="100px">
    <v-row cols="8" class="px-4">
      <v-col md="5">
        <v-text-field v-model="category" data-test="categoryText" height="30" label="New category" outlined dense />
      </v-col>
      <v-col>
        <v-btn color="accent" :disabled="createDisabled" @click="create">Create</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { CATEGORY_CREATE } from '@/components/category/store';

export default {
  name: 'CreateCategory',

  data: () => ({
    category: '',
  }),

  computed: {
    createDisabled() {
      return this.category == '' || this.$store.getters.categoryExists(this.category);
    },
  },

  methods: {
    create() {
      this.$store.commit(CATEGORY_CREATE, this.category);
      this.category = '';
    },
  },
};
</script>
