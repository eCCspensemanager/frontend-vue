<template>
  <v-navigation-drawer v-model="showDrawer" temporary app @input="$emit('navigation-closed', showDrawer)">
    <v-list dense nav>
      <v-list-item v-for="item in items" :id="item.id" :key="item.id" link :to="item.to">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import Vue from 'vue';
import { EXPENSES_ROUTE, BUDGETS_ROUTE, SETTINGS_ROUTE, ABOUT_ROUTE } from '@/router/routes';

export default Vue.component('Navigation', {
  props: {
    shouldShowDrawer: Boolean,
  },
  data: () => ({
    showDrawer: false,
    items: [
      { id: 'btn-expenses', title: 'Expenses', icon: 'mdi-cash', to: EXPENSES_ROUTE },
      { id: 'btn-budgets', title: 'Budgets', icon: 'mdi-cash-multiple', to: BUDGETS_ROUTE },
      { id: 'btn-settings', title: 'Settings', icon: 'mdi-cog', to: SETTINGS_ROUTE },
      { id: 'btn-about', title: 'About', icon: 'mdi-help-box', to: ABOUT_ROUTE },
    ],
  }),
  watch: {
    shouldShowDrawer: function (newVal) {
      this.showDrawer = newVal;
    },
  },
});
</script>

<style></style>
