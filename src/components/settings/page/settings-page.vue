<template>
  <div class="mb-6 mt-6">
    <SettingsElement data-test="categorySection" :heading="categoriesHeading">
      <CategoryList />
      <CreateCategory />
    </SettingsElement>
  </div>
</template>

<script>
import CategoryList from '@/components/category/list/category-list';
import CreateCategory from '@/components/category/create/create-category';
import SettingsElement from '@/components/settings/element/settings-element';

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
