<template>
  <v-autocomplete v-model="buffer" :items="items" @change="categorySelected($event)" />
</template>

<script>
import Category from './category';
export default {
  name: 'CategoryPicker',

  props: {
    value: { type: Category, default: () => {} },
  },

  data: (vm) => ({ buffer: vm.value }),

  computed: {
    items() {
      let items = this.$store.state.category.categories.map((item) => {
        return { text: item.name, value: item, disabled: false };
      });

      return items;
    },
  },

  watch: {
    value: function (newVal) {
      this.buffer = newVal;
    },
  },

  methods: {
    categorySelected(newCategory) {
      this.$emit('category-selected', newCategory);
    },
  },
};
</script>
