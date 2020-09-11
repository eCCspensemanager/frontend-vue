<template>
  <v-app class="mx-auto">
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="shouldShowDrawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>eCCspenseManager</v-toolbar-title>
    </v-app-bar>
    <Navigation :should-show-drawer="shouldShowDrawer" @navigation-closed="shouldShowDrawer = $event" />
    <v-main>
      <TransactionTable />
    </v-main>
  </v-app>
</template>

<script>
import TransactionTable from './components/transaction/transaction-table.vue';
import Navigation from './components/navigation.vue';

export default {
  name: 'App',

  components: {
    TransactionTable,
    Navigation,
  },

  data: () => ({
    shouldShowDrawer: false,
  }),
};
</script>
