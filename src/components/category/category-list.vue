<template>
  <v-list max-height="300px" class="overflow-y-auto">
    <v-list-item v-for="category in categories" :id="category.id" :key="category.id">
      <v-list-item-content>{{ category.name }}</v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: 'CategoryList',

  computed: {
    categories: function () {
      return this.$store.state.categories;
    },
  },
};
</script>
