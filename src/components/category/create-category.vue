<template>
  <v-container max-height="100px" class="text-xs-center">
    <v-row justify="center" align="center" cols="8" class="px-4">
      <v-col md="5">
        <v-text-field v-model="category" height="30" label="New category" outlined />
      </v-col>
      <v-col offset-md="1">
        <v-btn color="accent" :disabled="createDisabled" @click="create">Create</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { CATEGORY_CREATE } from '@/store/mutation-types';
import Category from '@/components/category/category';

export default {
  name: 'CreateCategory',

  data: () => ({
    category: '',
  }),

  computed: {
    createDisabled() {
      let categoryAlreadyExists = this.$store.state.categories
        .map((item) => {
          return item.name;
        })
        .includes(this.category);
      let emptyTextfield = this.category == '';

      return emptyTextfield || categoryAlreadyExists;
    },
  },

  methods: {
    create() {
      let newCategory = new Category(this.category);
      this.$store.commit(CATEGORY_CREATE, newCategory);
      this.category = '';
    },
  },
};
</script>
