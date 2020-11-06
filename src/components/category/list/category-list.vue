<template>
  <v-list dense height="300px" class="overflow-y-auto">
    <v-list-item v-for="category in categories" :id="category.id" :key="category.id">
      <v-list-item-content>
        {{ category.name }}
        <v-divider class="mt-4" />
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: 'CategoryList',

  computed: {
    categories: function () {
      return this.$store.getters.getCategories();
    },
  },
};
</script>
