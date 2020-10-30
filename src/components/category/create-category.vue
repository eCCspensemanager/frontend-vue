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
import { CATEGORY_CREATE } from '@/components/category/store/mutation-types';
import Category from '@/components/category/category';

export default {
  name: 'CreateCategory',

  data: () => ({
    category: '',
  }),

  computed: {
    createDisabled() {
      let categoryAlreadyExists = this.$store.state.category.categories
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
