<template>
  <div class="align-center mb-6 mt-6">
    <v-container id="settings-container">
      <SettingsElement :heading="categoriesHeading">
        <CategoryList />
        <CreateCategory />
      </SettingsElement>
    </v-container>
  </div>
</template>

<script>
import CategoryList from '@/components/category/category-list';
import CreateCategory from '@/components/category/create-category';
import SettingsElement from '@/components/settings/settings-element';

export default {
  name: 'SettingsPage',
  components: {
    SettingsElement,
    CategoryList,
    CreateCategory,
  },
  data: () => ({
    categoriesHeading: 'Categories',
  }),
};
</script>

<style scoped>
#settings-container {
  max-width: 60%;
  min-width: 400px;
}
</style>
