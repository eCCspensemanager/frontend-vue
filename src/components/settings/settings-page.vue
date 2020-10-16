<template>
  <div class="align-center mb-6 mt-6">
    <v-container max-width="600px">
      <SettingsElement :heading="categoriesHeading">
        <CategoryList />
      </SettingsElement>
    </v-container>
  </div>
</template>

<script>
import CategoryList from '@/components/category/category-list';
import SettingsElement from '@/components/settings/settings-element';

export default {
  name: 'SettingsPage',
  components: {
    SettingsElement,
    CategoryList,
  },
  data: () => ({
    categoriesHeading: 'Categories',
  }),
};
</script>
